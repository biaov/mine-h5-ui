# mine-h5-ui MCP 服务实施计划

> **执行变更（2026-11-12）：** 根据用户要求，首版已移除 `mcp/tests/`、`vitest` 与相关脚本。验证方式调整为 `npm run mcp:check`（数据校验）+ `npm run mcp:build`（构建）+ MCP 客户端手工验收。本文件中涉及测试的任务步骤仅作历史记录。

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建独立 npm 包 `mine-h5-ui-mcp`，通过 stdio 提供 mine-h5-ui 组件 API、示例、文档、图标与指南的只读查询能力。

**Architecture:** 构建期由 `mcp/scripts/extract.ts` 从 `packages/` 与 `examples/docs/` 生成静态 JSON 快照；运行期 `DataRepository` 常驻精简索引、按需加载单个组件元数据，`McpServer` 注册 7 个工具、资源模板与 2 个 Prompt。构建期与运行期完全分离，运行时不依赖组件库源码。

**Tech Stack:** TypeScript、Node.js 20+、`@modelcontextprotocol/sdk` 1.32.x、`zod` 4.x、`markdown-it` 15.x、`@vue/compiler-sfc` 3.5.x、TypeScript Compiler API、tsup、tsx、vitest。

**Spec:** `mcp/方案.md`

## Global Constraints

- 运行时 Node `>=20`；开发环境为仓库现用的 Node 24.18。
- 仅使用 stdio 传输；运行期所有日志写 stderr，stdout 只能输出 MCP 协议帧。
- 服务只读：不访问网络、不写文件、不执行用户代码。
- 发布包名 `mine-h5-ui-mcp`，版本与根 `package.json` 一致，发布时同步。
- 生成数据位于 `mcp/src/generated/`，不提交版本库；`npm test` 与 `npm run build` 前必须重新生成。
- MCP SDK 使用 v1 导入路径：`@modelcontextprotocol/sdk/server/mcp.js`、`server/stdio.js`、`client/index.js`、`inMemory.js`。
- 代码风格遵循仓库 Prettier：单引号、无分号、200 字符宽度、无尾逗号。
- 面向用户的工具描述、返回说明使用中文；代码标识符使用英文。
- 工具名统一 snake_case；错误返回使用固定错误码。

## Review Focus

- **复合组件 API 归属**：`MeCheckbox`、`MeTab` 等子组件的 Props 必须归属到正确的 `parts` 分区，不能把 Group 的 Props 挂到 Checkbox 下。
- **文档结构异常**：缺失表格、标题层级不标准、代码块内含 `#` 时，提取器不得崩溃或错判标题。
- **名称解析歧义**：`checkbox` 同时可能指向 `MeCheckboxGroup` 与 `MeCheckbox`，解析必须稳定且给出可预期结果。
- **协议通道污染**：任何 `console.log` 或第三方库输出到 stdout 都会破坏 MCP 会话。
- **返回体积失控**：`get_component_api` 与 `get_component_doc` 必须支持裁剪或截断，不能一次返回整库内容。
- **版本漂移**：`manifest.libraryVersion` 必须与根包版本一致，发布包内数据必须来自同一版本源码。

---

### Task 1: 初始化 mcp 独立包与测试基线

**Files:**
- Create: `mcp/package.json`
- Create: `mcp/tsconfig.json`
- Create: `mcp/tsup.config.ts`
- Create: `mcp/vitest.config.ts`
- Create: `mcp/.gitignore`
- Create: `mcp/src/version.ts`
- Test: `mcp/tests/version.spec.ts`

**Interfaces:**
- Consumes: 无。
- Produces: `readPackageInfo(): { name: string; version: string }`，供后续 server 与 CLI 使用。

- [ ] **Step 1: 创建包配置**

`mcp/package.json`：

```json
{
  "name": "mine-h5-ui-mcp",
  "version": "2.19.0",
  "description": "MCP server for mine-h5-ui component library",
  "type": "module",
  "bin": { "mine-h5-ui-mcp": "dist/index.js" },
  "main": "dist/index.js",
  "files": ["dist", "README.md", "LICENSE"],
  "engines": { "node": ">=20" },
  "keywords": ["mcp", "mine-h5-ui", "vue", "component-library"],
  "license": "ISC",
  "scripts": {
    "extract": "tsx scripts/extract.ts",
    "check": "npm run extract && tsx scripts/check-data.ts",
    "test": "npm run extract && npm run build && vitest run",
    "build": "npm run extract && tsup && tsx scripts/copy-data.ts",
    "dev": "tsx src/index.ts",
    "typecheck": "tsc --noEmit",
    "prepack": "npm run build"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.32.2",
    "zod": "^4.6.7"
  },
  "devDependencies": {
    "@types/markdown-it": "^14.2.0",
    "@types/node": "^26.6.6",
    "@vue/compiler-sfc": "^3.5.45",
    "markdown-it": "^15.0.3",
    "tsup": "^9.0.0",
    "tsx": "^4.23.15",
    "typescript": "^6.0.3",
    "vitest": "^5.1.0"
  }
}
```

`mcp/tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022"],
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "noUncheckedIndexedAccess": true,
    "types": ["node", "vitest/globals"]
  },
  "include": ["src/**/*.ts", "scripts/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules", "dist", "src/generated"]
}
```

`mcp/tsup.config.ts`：

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node20',
  platform: 'node',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false
})
```

`mcp/vitest.config.ts`：

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.spec.ts'],
    testTimeout: 30000
  }
})
```

`mcp/.gitignore`：

```text
node_modules/
dist/
src/generated/
*.tsbuildinfo
```

- [ ] **Step 2: 写失败的版本读取测试**

`mcp/tests/version.spec.ts`：

```ts
import { describe, expect, it } from 'vitest'
import { readPackageInfo } from '../src/version'

describe('readPackageInfo', () => {
  it('读取本包名称与版本', () => {
    const info = readPackageInfo()
    expect(info.name).toBe('mine-h5-ui-mcp')
    expect(info.version).toMatch(/^\d+\.\d+\.\d+/)
  })
})
```

- [ ] **Step 3: 运行测试确认失败**

Run: `npm --prefix mcp run test -- --run tests/version.spec.ts`

Expected: FAIL，提示无法解析 `../src/version`。

- [ ] **Step 4: 实现版本读取**

`mcp/src/version.ts`：

```ts
import { readFileSync } from 'node:fs'

const packageUrl = new URL('../package.json', import.meta.url)

export function readPackageInfo(): { name: string; version: string } {
  const pkg = JSON.parse(readFileSync(packageUrl, 'utf-8')) as { name: string; version: string }
  return { name: pkg.name, version: pkg.version }
}
```

- [ ] **Step 5: 安装依赖并验证**

Run:

```bash
cd mcp
npm install
npm run typecheck
npx vitest run tests/version.spec.ts
```

Expected: 依赖安装成功，typecheck 无错误，测试 PASS。

- [ ] **Step 6: 提交**

```bash
git add mcp/package.json mcp/package-lock.json mcp/tsconfig.json mcp/tsup.config.ts mcp/vitest.config.ts mcp/.gitignore mcp/src/version.ts mcp/tests/version.spec.ts
git commit -m "chore(mcp): 初始化独立包与测试基线"
```

---

### Task 2: 定义元数据类型与数据校验 schema

**Files:**
- Create: `mcp/src/types.ts`
- Create: `mcp/src/schema.ts`
- Test: `mcp/tests/schema.spec.ts`

**Interfaces:**
- Consumes: 无。
- Produces: 全部元数据接口（`LibraryManifest`、`ComponentIndexItem`、`ComponentMeta`、`ComponentPart`、`PropMeta`、`EventMeta`、`SlotMeta`、`ExampleMeta`、`GuideMeta`、`IconMeta`）与 zod schema（`componentMetaSchema`、`manifestSchema`、`iconListSchema`）。

- [ ] **Step 1: 写失败的 schema 测试**

`mcp/tests/schema.spec.ts`：

```ts
import { describe, expect, it } from 'vitest'
import { componentMetaSchema, iconListSchema } from '../src/schema'

describe('componentMetaSchema', () => {
  it('接受最小合法组件元数据', () => {
    const value = {
      id: 'button',
      name: 'MeButton',
      tag: 'me-button',
      title: 'Button 按钮',
      zhName: '按钮',
      category: '基础组件',
      kind: 'component',
      description: '',
      keywords: ['type'],
      docUrl: 'https://example.com/button',
      importCode: "import { MeButton } from 'mine-h5-ui'",
      stylePath: 'mine-h5-ui/styles/MeButton.css',
      parts: [{ name: 'MeButton', props: [], events: [], slots: [], methods: [], types: [], extraTables: [] }],
      examples: [],
      markdown: '# Button'
    }
    expect(componentMetaSchema.parse(value).name).toBe('MeButton')
  })

  it('拒绝缺少 name 的组件元数据', () => {
    expect(() => componentMetaSchema.parse({ id: 'button' })).toThrow()
  })
})

describe('iconListSchema', () => {
  it('接受图标列表', () => {
    const icons = [{ name: 'icon-close', label: 'close', fontClass: 'close', unicode: 'e60f' }]
    expect(iconListSchema.parse(icons)).toHaveLength(1)
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/schema.spec.ts`

Expected: FAIL，提示找不到 `../src/schema`。

- [ ] **Step 3: 定义类型**

`mcp/src/types.ts`：

```ts
export type ComponentKind = 'component' | 'api'
export type GuideKind = 'guide' | 'utility'

export interface LibraryManifest {
  name: string
  libraryVersion: string
  generatedAt: string
  counts: { components: number; guides: number; icons: number }
  warnings: string[]
  hash: string
}

export interface ComponentIndexItem {
  id: string
  name: string
  tag: string
  title: string
  zhName: string
  category: string
  kind: ComponentKind
  parentId?: string
  description: string
  keywords: string[]
  docUrl: string
}

export interface ComponentMeta extends ComponentIndexItem {
  importCode: string
  stylePath: string
  parts: ComponentPart[]
  examples: ExampleMeta[]
  markdown: string
}

export interface ComponentPart {
  name: string
  props: PropMeta[]
  events: EventMeta[]
  slots: SlotMeta[]
  methods: MethodMeta[]
  types: TypeMeta[]
  extraTables: RawTable[]
}

export interface PropMeta {
  name: string
  type: string
  required: boolean
  default?: string
  values?: string[]
  description?: string
  since?: string
  vModel?: boolean
  source: 'ts' | 'doc' | 'both'
}

export interface EventMeta {
  name: string
  params?: string
  description?: string
  since?: string
}

export interface SlotMeta {
  name: string
  description?: string
  scoped?: string
  since?: string
}

export interface MethodMeta {
  name: string
  description?: string
  params?: string
  since?: string
}

export interface TypeMeta {
  name: string
  definition: string
}

export interface RawTable {
  title: string
  rows: string[][]
}

export interface ExampleMeta {
  title: string
  description: string
  blocks: { language: string; code: string }[]
}

export interface GuideIndexItem {
  topic: string
  title: string
  category: string
  kind: GuideKind
}

export interface GuideMeta extends GuideIndexItem {
  markdown: string
}

export interface IconMeta {
  name: string
  label: string
  fontClass: string
  unicode: string
}

export interface GeneratedBundle {
  manifest: LibraryManifest
  index: ComponentIndexItem[]
  components: Map<string, ComponentMeta>
  guides: GuideMeta[]
  icons: IconMeta[]
  warnings: string[]
}
```

- [ ] **Step 4: 定义 zod schema**

`mcp/src/schema.ts`：

```ts
import { z } from 'zod'

export const propMetaSchema = z.object({
  name: z.string(),
  type: z.string(),
  required: z.boolean(),
  default: z.string().optional(),
  values: z.array(z.string()).optional(),
  description: z.string().optional(),
  since: z.string().optional(),
  vModel: z.boolean().optional(),
  source: z.enum(['ts', 'doc', 'both'])
})

export const eventMetaSchema = z.object({
  name: z.string(),
  params: z.string().optional(),
  description: z.string().optional(),
  since: z.string().optional()
})

export const slotMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  scoped: z.string().optional(),
  since: z.string().optional()
})

export const methodMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  params: z.string().optional(),
  since: z.string().optional()
})

export const typeMetaSchema = z.object({ name: z.string(), definition: z.string() })

export const rawTableSchema = z.object({ title: z.string(), rows: z.array(z.array(z.string())) })

export const componentPartSchema = z.object({
  name: z.string(),
  props: z.array(propMetaSchema),
  events: z.array(eventMetaSchema),
  slots: z.array(slotMetaSchema),
  methods: z.array(methodMetaSchema),
  types: z.array(typeMetaSchema),
  extraTables: z.array(rawTableSchema)
})

export const exampleMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.object({ language: z.string(), code: z.string() }))
})

export const componentIndexItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  tag: z.string(),
  title: z.string(),
  zhName: z.string(),
  category: z.string(),
  kind: z.enum(['component', 'api']),
  parentId: z.string().optional(),
  description: z.string(),
  keywords: z.array(z.string()),
  docUrl: z.string()
})

export const componentMetaSchema = componentIndexItemSchema.extend({
  importCode: z.string(),
  stylePath: z.string(),
  parts: z.array(componentPartSchema).min(1),
  examples: z.array(exampleMetaSchema),
  markdown: z.string()
})

export const guideMetaSchema = z.object({
  topic: z.string(),
  title: z.string(),
  category: z.string(),
  kind: z.enum(['guide', 'utility']),
  markdown: z.string()
})

export const guideIndexItemSchema = guideMetaSchema.omit({ markdown: true })

export const iconMetaSchema = z.object({
  name: z.string().startsWith('icon-'),
  label: z.string(),
  fontClass: z.string(),
  unicode: z.string()
})

export const iconListSchema = z.array(iconMetaSchema)

export const manifestSchema = z.object({
  name: z.string(),
  libraryVersion: z.string(),
  generatedAt: z.string(),
  counts: z.object({ components: z.number().int(), guides: z.number().int(), icons: z.number().int() }),
  warnings: z.array(z.string()),
  hash: z.string()
})
```

- [ ] **Step 5: 运行测试确认通过**

Run: `npx vitest run tests/schema.spec.ts && npm run typecheck`

Expected: PASS，typecheck 无错误。

- [ ] **Step 6: 提交**

```bash
git add mcp/src/types.ts mcp/src/schema.ts mcp/tests/schema.spec.ts
git commit -m "feat(mcp): 定义元数据类型与校验 schema"
```

---

### Task 3: Markdown 标题树、代码块与表格解析

**Files:**
- Create: `mcp/src/extract/markdown.ts`
- Create: `mcp/tests/fixtures/sample.md`
- Test: `mcp/tests/markdown.spec.ts`

**Interfaces:**
- Consumes: 无。
- Produces:
  - `parseMarkdown(text: string): ParsedMarkdown`
  - `findHeading(nodes: HeadingNode[], predicate: (node: HeadingNode) => boolean): HeadingNode | undefined`
  - `flattenHeadings(nodes: HeadingNode[]): HeadingNode[]`
  - `extractSectionText(text: string, node: HeadingNode): string`

- [ ] **Step 1: 准备测试夹具**

`mcp/tests/fixtures/sample.md`：

```markdown
# Demo 演示

## 代码演示

### 基础用法

- 这是基础说明。

```html
<me-button>按钮</me-button>
```

### 复杂示例

- 多段说明。
- 第二段说明。

```vue
<template>
  <me-button type="primary">主要按钮</me-button>
</template>
```

## API

### 参数

| 参数  | 说明 | 类型    | 可选值         | 默认值  | 版本   |
| ----- | ---- | ------- | -------------- | ------- | ------ |
| type  | 类型 | string  | default / text | default | v2.0.0 |
| plain | 朴素 | boolean | --             | false   | v2.0.0 |

### MeGroup

#### 参数

| 参数     | 说明     | 类型   | 可选值 | 默认值 | 版本 |
| -------- | -------- | ------ | ------ | ------ | ---- |
| disabled | 是否禁用 | boolean | --    | false  | --   |

#### 方法

| 方法名 | 说明     | 回调参数 | 版本 |
| ------ | -------- | -------- | ---- |
| change | 值变化时 | value: T | --   |
```

- [ ] **Step 2: 写失败的解析测试**

`mcp/tests/markdown.spec.ts`：

```ts
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { extractSectionText, findHeading, flattenHeadings, parseMarkdown } from '../src/extract/markdown'

const text = readFileSync(new URL('./fixtures/sample.md', import.meta.url), 'utf-8')

describe('parseMarkdown', () => {
  it('构建标题树并计算区间', () => {
    const parsed = parseMarkdown(text)
    const demo = findHeading(parsed.headings, node => node.title === '代码演示')
    expect(demo?.children.map(node => node.title)).toEqual(['基础用法', '复杂示例'])
    expect(demo?.endLine).toBeGreaterThan(demo?.line ?? 0)
  })

  it('提取代码块语言与内容', () => {
    const parsed = parseMarkdown(text)
    expect(parsed.fences.map(fence => fence.language)).toEqual(['html', 'vue'])
    expect(parsed.fences[0]?.content).toContain('<me-button>')
  })

  it('提取表格行', () => {
    const parsed = parseMarkdown(text)
    expect(parsed.tables).toHaveLength(2)
    expect(parsed.tables[0]?.rows[1]).toEqual(['type', '类型', 'string', 'default / text', 'default', 'v2.0.0'])
  })

  it('忽略代码块内的井号', () => {
    const parsed = parseMarkdown('```md\n# 不是标题\n```\n\n## 真标题')
    expect(flattenHeadings(parsed.headings).map(node => node.title)).toEqual(['真标题'])
  })

  it('按标题区间截取原文', () => {
    const parsed = parseMarkdown(text)
    const api = findHeading(parsed.headings, node => node.title === 'API')
    expect(api && extractSectionText(text, api)).toContain('### 参数')
  })
})
```

- [ ] **Step 3: 运行测试确认失败**

Run: `npx vitest run tests/markdown.spec.ts`

Expected: FAIL，找不到 `../src/extract/markdown`。

- [ ] **Step 4: 实现解析器**

`mcp/src/extract/markdown.ts`：

```ts
import MarkdownIt from 'markdown-it'

export interface HeadingNode {
  level: number
  title: string
  line: number
  endLine: number
  children: HeadingNode[]
}

export interface FenceBlock {
  line: number
  language: string
  content: string
}

export interface TableBlock {
  line: number
  rows: string[][]
}

export interface ParsedMarkdown {
  headings: HeadingNode[]
  fences: FenceBlock[]
  tables: TableBlock[]
}

interface FlatHeading {
  level: number
  title: string
  line: number
}

const md = new MarkdownIt({ html: false })

export function parseMarkdown(text: string): ParsedMarkdown {
  const tokens = md.parse(text, {})
  const flat: FlatHeading[] = []
  const fences: FenceBlock[] = []
  const tables: TableBlock[] = []
  let table: string[][] | null = null
  let row: string[] | null = null

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index]!
    if (token.type === 'heading_open') {
      flat.push({ level: Number(token.tag.slice(1)), title: tokens[index + 1]?.content.trim() ?? '', line: token.map?.[0] ?? 0 })
    } else if (token.type === 'fence') {
      fences.push({ line: token.map?.[0] ?? 0, language: token.info.trim().split(/\s+/)[0] || 'text', content: token.content })
    } else if (token.type === 'table_open') {
      table = []
    } else if (token.type === 'tr_open') {
      row = []
    } else if (token.type === 'th_open' || token.type === 'td_open') {
      row?.push(tokens[index + 1]?.content.trim() ?? '')
    } else if (token.type === 'tr_close' && table && row) {
      table.push(row)
      row = null
    } else if (token.type === 'table_close' && table) {
      tables.push({ line: token.map?.[0] ?? 0, rows: table })
      table = null
    }
  }

  return { headings: buildTree(flat), fences, tables }
}

function buildTree(flat: FlatHeading[]): HeadingNode[] {
  const roots: HeadingNode[] = []
  const stack: HeadingNode[] = []
  const all: HeadingNode[] = []

  for (const item of flat) {
    const node: HeadingNode = { ...item, endLine: Number.MAX_SAFE_INTEGER, children: [] }
    while (stack.length && stack[stack.length - 1]!.level >= node.level) stack.pop()
    const parent = stack[stack.length - 1]
    if (parent) parent.children.push(node)
    else roots.push(node)
    stack.push(node)
    all.push(node)
  }

  for (let index = 0; index < all.length; index++) {
    const node = all[index]!
    const next = all.slice(index + 1).find(item => item.level <= node.level)
    node.endLine = next ? next.line - 1 : Number.MAX_SAFE_INTEGER
  }

  return roots
}

export function findHeading(nodes: HeadingNode[], predicate: (node: HeadingNode) => boolean): HeadingNode | undefined {
  for (const node of nodes) {
    if (predicate(node)) return node
    const found = findHeading(node.children, predicate)
    if (found) return found
  }
  return undefined
}

export function flattenHeadings(nodes: HeadingNode[]): HeadingNode[] {
  return nodes.flatMap(node => [node, ...flattenHeadings(node.children)])
}

export function extractSectionText(text: string, node: HeadingNode): string {
  const lines = text.split(/\r?\n/)
  const end = node.endLine === Number.MAX_SAFE_INTEGER ? lines.length : node.endLine + 1
  return lines.slice(node.line, end).join('\n').trim()
}
```

- [ ] **Step 5: 运行测试确认通过**

Run: `npx vitest run tests/markdown.spec.ts && npm run typecheck`

Expected: PASS。

- [ ] **Step 6: 提交**

```bash
git add mcp/src/extract/markdown.ts mcp/tests/markdown.spec.ts mcp/tests/fixtures/sample.md
git commit -m "feat(mcp): 实现 Markdown 标题树与表格解析"
```

---

### Task 4: 路由、导出、图标与源码解析

**Files:**
- Create: `mcp/src/extract/routes.ts`
- Create: `mcp/src/extract/exports.ts`
- Create: `mcp/src/extract/icons.ts`
- Create: `mcp/src/extract/source.ts`
- Test: `mcp/tests/sources.spec.ts`

**Interfaces:**
- Consumes: `mcp/src/types.ts` 中的 `PropMeta`、`EventMeta`、`TypeMeta`、`IconMeta`。
- Produces:
  - `parseRoutes(json: unknown): RoutesData`
  - `parseComponentExports(text: string): Map<string, ExportInfo>`
  - `parseIcons(json: IconfontJson, warnings: string[]): IconMeta[]`
  - `parseTypesSource(text: string, filename: string): { props: PropMeta[]; events: EventMeta[]; types: TypeMeta[] }`
  - `parseSfcSource(text: string, filename: string): { defaults: Record<string, string> }`
  - `parseInstallKind(indexTs: string): 'component' | 'api'`

- [ ] **Step 1: 写失败的解析测试**

`mcp/tests/sources.spec.ts`：

```ts
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseComponentExports } from '../src/extract/exports'
import { parseIcons } from '../src/extract/icons'
import { parseRoutes } from '../src/extract/routes'
import { parseInstallKind, parseSfcSource, parseTypesSource } from '../src/extract/source'

const root = new URL('../../', import.meta.url)
const read = (path: string) => readFileSync(new URL(path, root), 'utf-8')

describe('parseRoutes', () => {
  it('解析分类、指南与 slug', () => {
    const routes = parseRoutes(JSON.parse(read('examples/config/routes.json')))
    expect(routes.components.length).toBeGreaterThan(60)
    expect(routes.components.find(item => item.english === 'Button')?.slug).toBe('button')
    expect(routes.guides.find(item => item.slug === 'composable')?.kind).toBe('utility')
    expect(routes.guides.filter(item => item.kind === 'guide')).toHaveLength(7)
  })
})

describe('parseComponentExports', () => {
  it('读取导出名、分类与行尾注释', () => {
    const exports = parseComponentExports(read('packages/components.ts'))
    expect(exports.get('MeButton')).toEqual({ exportName: 'MeButton', category: '基础组件', comment: '按钮' })
    expect(exports.get('MeToast')?.category).toBe('反馈组件')
  })
})

describe('parseIcons', () => {
  it('把 font_class 映射为 icon- 前缀名称', () => {
    const warnings: string[] = []
    const icons = parseIcons(JSON.parse(read('packages/styles/fonts/iconfont.json')), warnings)
    expect(icons.length).toBeGreaterThanOrEqual(70)
    expect(icons.find(icon => icon.fontClass === 'close')?.name).toBe('icon-close')
    expect(warnings).toHaveLength(0)
  })
})

describe('parseTypesSource', () => {
  it('提取 Props、Emits 与类型别名', () => {
    const parsed = parseTypesSource(read('packages/MeButton/types.ts'), 'types.ts')
    const type = parsed.props.find(prop => prop.name === 'type')
    expect(type?.type).toBe('ButtonType')
    expect(type?.required).toBe(false)
    expect(type?.description).toBe('类型')
    expect(parsed.events[0]?.name).toBe('click')
    expect(parsed.events[0]?.params).toBe('e: MouseEvent')
    expect(parsed.types.find(item => item.name === 'ButtonType')?.definition).toContain("'primary'")
  })
})

describe('parseSfcSource', () => {
  it('提取 withDefaults 默认值', () => {
    const parsed = parseSfcSource(read('packages/MeButton/index.vue'), 'index.vue')
    expect(parsed.defaults).toMatchObject({ nativeType: "'button'", type: "'default'", plain: 'false' })
  })
})

describe('parseInstallKind', () => {
  it('识别命令式 API 组件', () => {
    expect(parseInstallKind(read('packages/MeToast/index.ts'))).toBe('api')
    expect(parseInstallKind(read('packages/MeButton/index.ts'))).toBe('component')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/sources.spec.ts`

Expected: FAIL，模块不存在。

- [ ] **Step 3: 实现路由解析**

`mcp/src/extract/routes.ts`：

```ts
export interface ComponentRoute {
  title: string
  english: string
  zhName: string
  slug: string
  category: string
}

export interface GuideRoute {
  title: string
  slug: string
  category: string
  kind: 'guide' | 'utility'
}

export interface RoutesData {
  components: ComponentRoute[]
  guides: GuideRoute[]
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

export function slugFromTitle(title: string): string {
  const first = title.trim().split(/\s+/)[0] ?? ''
  if (/^[A-Za-z]/.test(first)) return lowerFirst(first)
  if (title.includes('组合式')) return 'composable'
  return lowerFirst(title.replace(/\s+/g, ''))
}

function toComponentRoute(value: unknown, category: string): ComponentRoute {
  const title = String(value).trim()
  const [english = '', ...rest] = title.split(/\s+/)
  return { title, english, zhName: rest.join(' '), slug: slugFromTitle(title), category }
}

function toGuideRoute(value: unknown, category: string, kind: 'guide' | 'utility'): GuideRoute {
  const title = String(value).trim()
  return { title, slug: slugFromTitle(title), category, kind }
}

export function parseRoutes(json: unknown): RoutesData {
  const data = json as Record<string, unknown>
  const components: ComponentRoute[] = []
  const guides: GuideRoute[] = []

  const guideList = data['指南']
  if (Array.isArray(guideList)) {
    for (const item of guideList) guides.push(toGuideRoute(item, '指南', 'guide'))
  }

  const componentGroups = data['组件']
  if (componentGroups && typeof componentGroups === 'object') {
    for (const [category, list] of Object.entries(componentGroups as Record<string, unknown>)) {
      if (!Array.isArray(list)) continue
      for (const item of list) components.push(toComponentRoute(item, category))
    }
  }

  const wrapperGroups = data['封装']
  if (wrapperGroups && typeof wrapperGroups === 'object') {
    for (const [category, list] of Object.entries(wrapperGroups as Record<string, unknown>)) {
      if (!Array.isArray(list)) continue
      for (const item of list) guides.push(toGuideRoute(item, category, 'utility'))
    }
  }

  return { components, guides }
}
```

- [ ] **Step 4: 实现导出解析**

`mcp/src/extract/exports.ts`：

```ts
export interface ExportInfo {
  exportName: string
  category: string
  comment: string
}

const SECTION_RE = /\/\*\s*(.+?)\s+start\s*\*\//g
const EXPORT_RE = /export\s+\*\s+from\s+'\.\/(Me\w+)'\s*(?:\/\/\s*(.*))?/g

export function parseComponentExports(text: string): Map<string, ExportInfo> {
  const result = new Map<string, ExportInfo>()
  const sections: { index: number; category: string }[] = []

  for (const match of text.matchAll(SECTION_RE)) {
    sections.push({ index: match.index ?? 0, category: match[1]!.trim() })
  }

  for (const match of text.matchAll(EXPORT_RE)) {
    const index = match.index ?? 0
    const category = sections.filter(section => section.index <= index).at(-1)?.category ?? '未分类'
    const exportName = match[1]!
    const comment = (match[2] ?? '').trim()
    result.set(exportName, { exportName, category, comment })
  }

  return result
}
```

- [ ] **Step 5: 实现图标解析**

`mcp/src/extract/icons.ts`：

```ts
import type { IconMeta } from '../types'

export interface IconfontGlyph {
  name: string
  font_class: string
  unicode: string
}

export interface IconfontJson {
  glyphs: IconfontGlyph[]
}

export function parseIcons(json: IconfontJson, warnings: string[]): IconMeta[] {
  const icons: IconMeta[] = []
  const seen = new Set<string>()

  for (const glyph of json.glyphs) {
    const name = `icon-${glyph.font_class}`
    if (seen.has(name)) {
      warnings.push(`icon-name-duplicated: ${name}`)
      continue
    }
    seen.add(name)
    icons.push({ name, label: glyph.name, fontClass: glyph.font_class, unicode: glyph.unicode })
  }

  return icons
}
```

- [ ] **Step 6: 实现类型与 SFC 源码解析**

`mcp/src/extract/source.ts`：

```ts
import { parse } from '@vue/compiler-sfc'
import * as ts from 'typescript'
import type { EventMeta, PropMeta, TypeMeta } from '../types'

export interface ParsedTypesSource {
  props: PropMeta[]
  events: EventMeta[]
  types: TypeMeta[]
}

function getJsDoc(node: ts.Node): string {
  const docs = ts.getJSDocCommentsAndTags(node)
  return docs
    .map(doc => (doc as ts.JSDoc).comment)
    .filter((comment): comment is string => typeof comment === 'string')
    .join(' ')
    .trim()
}

function propertyName(node: ts.PropertyName, source: ts.SourceFile): string {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text
  return node.getText(source)
}

export function parseTypesSource(text: string, filename: string): ParsedTypesSource {
  const source = ts.createSourceFile(filename, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const props: PropMeta[] = []
  const events: EventMeta[] = []
  const types: TypeMeta[] = []

  for (const statement of source.statements) {
    if (ts.isTypeAliasDeclaration(statement)) {
      types.push({ name: statement.name.text, definition: statement.type.getText(source) })
    }

    if (!ts.isInterfaceDeclaration(statement)) continue

    if (statement.name.text === 'Props') {
      for (const member of statement.members) {
        if (!ts.isPropertySignature(member)) continue
        props.push({
          name: propertyName(member.name, source),
          type: member.type?.getText(source) ?? 'unknown',
          required: !member.questionToken,
          description: getJsDoc(member),
          source: 'ts'
        })
      }
    }

    if (statement.name.text === 'Emits') {
      for (const member of statement.members) {
        if (!ts.isCallSignatureDeclaration(member)) continue
        const [eventParam, ...rest] = member.parameters
        let eventName: string | undefined
        if (eventParam?.type && ts.isLiteralTypeNode(eventParam.type)) {
          eventName = eventParam.type.literal.getText(source).replace(/^['"]|['"]$/g, '')
        }
        if (!eventName) continue
        const params = rest.map(param => `${param.name.getText(source)}: ${param.type?.getText(source) ?? 'unknown'}`).join(', ')
        events.push({ name: eventName, params: params || undefined })
      }
    }
  }

  return { props, events, types }
}

export function parseSfcSource(text: string, filename: string): { defaults: Record<string, string> } {
  const { descriptor } = parse(text, { filename })
  const content = descriptor.scriptSetup?.content ?? descriptor.script?.content ?? ''
  const source = ts.createSourceFile(`${filename}.ts`, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const defaults: Record<string, string> = {}

  const visit = (node: ts.Node): void => {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 'withDefaults') {
      const object = node.arguments[1]
      if (object && ts.isObjectLiteralExpression(object)) {
        for (const property of object.properties) {
          if (!ts.isPropertyAssignment(property)) continue
          defaults[propertyName(property.name, source)] = property.initializer.getText(source)
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(source)
  return { defaults }
}

export function parseInstallKind(indexTs: string): 'component' | 'api' {
  return indexTs.includes('addInstallAPI') ? 'api' : 'component'
}
```

- [ ] **Step 7: 运行测试确认通过**

Run: `npx vitest run tests/sources.spec.ts && npm run typecheck`

Expected: PASS。若 `MeButton` 的 `Emits` 参数文本断言失败，打印实际值并按实际格式调整断言，但保持 `name === 'click'` 不变。

- [ ] **Step 8: 提交**

```bash
git add mcp/src/extract/routes.ts mcp/src/extract/exports.ts mcp/src/extract/icons.ts mcp/src/extract/source.ts mcp/tests/sources.spec.ts
git commit -m "feat(mcp): 解析路由、导出、图标与组件源码"
```

---

### Task 5: 文档示例与 API 分区提取

**Files:**
- Create: `mcp/src/extract/docs.ts`
- Test: `mcp/tests/docs.spec.ts`

**Interfaces:**
- Consumes: `parseMarkdown`、`findHeading`、`HeadingNode`、`TableBlock`。
- Produces: `extractDoc(markdown: string, fallbackName: string): ExtractedDoc`，其中 `ExtractedDoc = { title: string; description: string; importCode: string; examples: ExampleMeta[]; parts: ComponentPart[] }`。

- [ ] **Step 1: 写失败的文档提取测试**

`mcp/tests/docs.spec.ts`：

```ts
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { extractDoc } from '../src/extract/docs'

const root = new URL('../../', import.meta.url)
const read = (path: string) => readFileSync(new URL(path, root), 'utf-8')

describe('extractDoc', () => {
  it('提取按钮示例与 Props', () => {
    const doc = extractDoc(read('examples/docs/button.md'), 'MeButton')
    expect(doc.title).toBe('Button 按钮')
    expect(doc.examples.length).toBeGreaterThan(5)
    expect(doc.examples[0]?.title).toBe('类型按钮')
    expect(doc.examples[0]?.blocks[0]?.language).toBe('html')
    expect(doc.importCode).toContain("import { MeButton } from 'mine-h5-ui'")
    const part = doc.parts.find(item => item.name === 'MeButton')
    const type = part?.props.find(prop => prop.name === 'type')
    expect(type?.values).toEqual(['default', 'primary', 'success', 'info', 'warning', 'danger'])
    expect(type?.default).toBe('default')
    expect(part?.events.find(event => event.name === 'click')?.since).toBe('v2.3.5')
    expect(part?.slots.find(slot => slot.name === 'default')).toBeTruthy()
  })

  it('拆分复合组件 API', () => {
    const doc = extractDoc(read('examples/docs/checkbox.md'), 'MeCheckbox')
    expect(doc.parts.map(part => part.name)).toEqual(['MeCheckboxGroup', 'MeCheckbox'])
    const group = doc.parts.find(part => part.name === 'MeCheckboxGroup')
    expect(group?.props.find(prop => prop.name === 'modelValue')?.vModel).toBe(true)
    expect(group?.events.find(event => event.name === 'change')).toBeTruthy()
    const checkbox = doc.parts.find(part => part.name === 'MeCheckbox')
    expect(checkbox?.props.find(prop => prop.name === 'iconSelect')?.default).toBe('icon-radio')
  })

  it('兼容参数分区下嵌套子组件写法', () => {
    const doc = extractDoc(read('examples/docs/tab.md'), 'MeTab')
    expect(doc.parts.map(part => part.name)).toEqual(['MeTab', 'MeTabItem'])
    expect(doc.parts[0]?.props.length).toBeGreaterThan(0)
    expect(doc.parts[1]?.props.length).toBeGreaterThan(0)
  })

  it('保留 Option 与 rules 等额外表格', () => {
    const toast = extractDoc(read('examples/docs/toast.md'), 'MeToast')
    expect(toast.parts[0]?.extraTables.some(table => table.title === 'Option')).toBe(true)
    const form = extractDoc(read('examples/docs/form.md'), 'MeForm')
    expect(form.parts[0]?.extraTables.some(table => table.title === 'rules')).toBe(true)
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/docs.spec.ts`

Expected: FAIL，模块不存在。

- [ ] **Step 3: 实现文档提取**

`mcp/src/extract/docs.ts`：

```ts
import type { ComponentPart, EventMeta, ExampleMeta, PropMeta, RawTable, SlotMeta } from '../types'
import { findHeading, parseMarkdown, type HeadingNode, type TableBlock } from './markdown'

export interface ExtractedDoc {
  title: string
  description: string
  importCode: string
  examples: ExampleMeta[]
  parts: ComponentPart[]
}

type TableKind = 'props' | 'slots' | 'events' | 'extra'

const HEADER_ALIASES: Record<string, string> = {
  '参数': 'name',
  '属性': 'name',
  '属性名': 'name',
  '参数名': 'name',
  'props': 'name',
  '说明': 'description',
  '描述': 'description',
  '功能': 'description',
  '类型': 'type',
  '可选值': 'values',
  '可选': 'values',
  '默认值': 'default',
  '默认': 'default',
  '版本': 'since',
  '方法名': 'name',
  '事件名': 'name',
  '回调参数': 'params',
  '具名插槽': 'name',
  '插槽名': 'name',
  'scopedslots': 'scoped'
}

function mapTable(rows: string[][]): Record<string, string>[] {
  const [header, ...body] = rows
  if (!header) return []
  const keys = header.map(value => HEADER_ALIASES[value.trim().toLowerCase()] ?? value.trim())
  return body.map(row => Object.fromEntries(keys.map((key, index) => [key, (row[index] ?? '').trim()])))
}

function toProp(row: Record<string, string>): PropMeta {
  const rawName = row.name ?? ''
  const vModel = /\(v-model\)/i.test(rawName)
  const values = row.values && row.values !== '--' && row.values !== '-' ? row.values.split('/').map(value => value.trim()).filter(Boolean) : undefined
  return {
    name: rawName.replace(/\(v-model\)/gi, '').trim(),
    type: row.type || 'unknown',
    required: false,
    default: row.default && row.default !== '--' ? row.default : undefined,
    values,
    description: row.description || undefined,
    since: row.since && row.since !== '--' ? row.since : undefined,
    vModel: vModel || undefined,
    source: 'doc'
  }
}

function toSlot(row: Record<string, string>): SlotMeta {
  return {
    name: row.name ?? '',
    description: row.description || undefined,
    scoped: row.scoped && row.scoped !== '--' ? row.scoped : undefined,
    since: row.since && row.since !== '--' ? row.since : undefined
  }
}

function toEvent(row: Record<string, string>): EventMeta {
  return {
    name: row.name ?? '',
    params: row.params && row.params !== '--' ? row.params : undefined,
    description: row.description || undefined,
    since: row.since && row.since !== '--' ? row.since : undefined
  }
}

function classify(title: string): TableKind | undefined {
  const text = title.toLowerCase()
  if (/参数|props|属性/.test(text)) return 'props'
  if (/slots|插槽/.test(text)) return 'slots'
  if (/方法|事件|events|emits/.test(text)) return 'events'
  if (/option|rules|回调|数据/.test(text)) return 'extra'
  return undefined
}

function isPartHeading(title: string): boolean {
  return /^Me[A-Za-z0-9]+$/.test(title.trim())
}

function ownTables(node: HeadingNode, tables: TableBlock[]): TableBlock[] {
  const limit = node.children.length ? node.children[0]!.line : node.endLine + 1
  return tables.filter(table => table.line > node.line && table.line < limit)
}

function emptyPart(name: string): ComponentPart {
  return { name, props: [], events: [], slots: [], methods: [], types: [], extraTables: [] }
}

function extractParts(markdown: string, fallbackName: string, parsed = parseMarkdown(markdown)): ComponentPart[] {
  const api = findHeading(parsed.headings, node => node.level === 2 && node.title.trim() === 'API')
  if (!api) return [emptyPart(fallbackName)]

  const parts = new Map<string, ComponentPart>()
  let currentPart = fallbackName

  const ensure = (name: string): ComponentPart => {
    let part = parts.get(name)
    if (!part) {
      part = emptyPart(name)
      parts.set(name, part)
    }
    return part
  }

  ensure(currentPart)

  const walk = (node: HeadingNode, inheritedKind?: TableKind): void => {
    const title = node.title.trim()
    if (isPartHeading(title)) {
      currentPart = title
      ensure(currentPart)
    }

    const kind = classify(title) ?? inheritedKind
    const tables = ownTables(node, parsed.tables)

    if (tables.length) {
      const part = ensure(currentPart)
      if (kind === 'props') {
        for (const table of tables) part.props.push(...mapTable(table.rows).map(toProp))
      } else if (kind === 'slots') {
        for (const table of tables) part.slots.push(...mapTable(table.rows).map(toSlot))
      } else if (kind === 'events') {
        for (const table of tables) part.events.push(...mapTable(table.rows).map(toEvent))
      } else if (kind === 'extra') {
        for (const table of tables) part.extraTables.push({ title, rows: table.rows })
      }
    }

    for (const child of node.children) walk(child, kind)
  }

  walk(api)
  return [...parts.values()]
}

function extractDescription(text: string): string {
  const lines = text.split(/\r?\n/)
  let inContent = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (!inContent) {
      if (/^#\s+/.test(trimmed)) inContent = true
      continue
    }
    if (!trimmed || trimmed === '---' || /^##\s+/.test(trimmed)) {
      if (/^##\s+/.test(trimmed)) return ''
      continue
    }
    if (/^[-*>|#`]/.test(trimmed)) continue
    return trimmed
  }
  return ''
}

function extractExamples(markdown: string): ExampleMeta[] {
  const parsed = parseMarkdown(markdown)
  const demo = findHeading(parsed.headings, node => node.level === 2 && node.title.trim() === '代码演示')
  if (!demo) return []

  return demo.children.map(node => {
    const fences = parsed.fences.filter(fence => fence.line > node.line && fence.line <= node.endLine)
    const lines = markdown.split(/\r?\n/).slice(node.line + 1, node.endLine === Number.MAX_SAFE_INTEGER ? undefined : node.endLine + 1)
    const description = lines
      .map(line => line.trim())
      .filter(line => /^-\s+/.test(line))
      .map(line => line.replace(/^-\s+/, '').trim())
      .join(' ')
    return {
      title: node.title.trim(),
      description,
      blocks: fences.map(fence => ({ language: fence.language, code: fence.content.trim() }))
    }
  })
}

function extractImportCode(markdown: string): string {
  const parsed = parseMarkdown(markdown)
  const section = findHeading(parsed.headings, node => node.level === 2 && node.title.includes('按需引入'))
  if (!section) return ''
  return parsed.fences.find(fence => fence.line > section.line && fence.line <= section.endLine)?.content.trim() ?? ''
}

export function extractDoc(markdown: string, fallbackName: string): ExtractedDoc {
  const parsed = parseMarkdown(markdown)
  const h1 = findHeading(parsed.headings, node => node.level === 1)
  return {
    title: h1?.title.trim() ?? fallbackName,
    description: extractDescription(markdown),
    importCode: extractImportCode(markdown),
    examples: extractExamples(markdown),
    parts: extractParts(markdown, fallbackName, parsed)
  }
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npx vitest run tests/docs.spec.ts && npm run typecheck`

Expected: PASS。若 Tab 的 `parts` 顺序与文档一致但名称不同，先打印实际标题树，按真实标题修正 `isPartHeading` 或测试断言；不得跳过复合组件拆分。

- [ ] **Step 5: 提交**

```bash
git add mcp/src/extract/docs.ts mcp/tests/docs.spec.ts
git commit -m "feat(mcp): 提取文档示例与 API 分区"
```

---

### Task 6: 合并元数据、生成快照与校验命令

**Files:**
- Create: `mcp/src/extract/merge.ts`
- Create: `mcp/src/extract/index.ts`
- Create: `mcp/scripts/extract.ts`
- Create: `mcp/scripts/check-data.ts`
- Create: `mcp/scripts/copy-data.ts`
- Test: `mcp/tests/extract.spec.ts`

**Interfaces:**
- Consumes: Task 3-5 的全部解析函数。
- Produces:
  - `extractAll(root: URL): Promise<ExtractResult>`，`ExtractResult` 见下。
  - `writeGenerated(result: ExtractResult, outputDir: URL): Promise<void>`。
  - CLI：`tsx scripts/extract.ts` 生成数据，`tsx scripts/check-data.ts` 校验。

- [ ] **Step 1: 写失败的全量提取测试**

`mcp/tests/extract.spec.ts`：

```ts
import { describe, expect, it } from 'vitest'
import { extractAll } from '../src/extract'

const root = new URL('../../', import.meta.url)

describe('extractAll', () => {
  it('生成覆盖全库的组件、指南与图标', async () => {
    const result = await extractAll(root)
    const parents = result.index.filter(item => !item.parentId)
    expect(parents.length).toBeGreaterThanOrEqual(60)
    expect(result.guides).toHaveLength(11)
    expect(result.icons.length).toBeGreaterThanOrEqual(70)
    expect(result.manifest.libraryVersion).toMatch(/^\d+\.\d+\.\d+/)
    expect(result.manifest.counts.components).toBe(parents.length)
  })

  it('合并按钮的 TS 类型与文档默认值', async () => {
    const result = await extractAll(root)
    const button = result.components.get('button')
    const part = button?.parts.find(item => item.name === 'MeButton')
    const type = part?.props.find(prop => prop.name === 'type')
    expect(type?.type).toBe('ButtonType')
    expect(type?.default).toBe("'default'")
    expect(type?.values).toEqual(['default', 'primary', 'success', 'info', 'warning', 'danger'])
    expect(type?.source).toBe('both')
  })

  it('把子组件加入索引并指向父文档', async () => {
    const result = await extractAll(root)
    const group = result.index.find(item => item.name === 'MeCheckboxGroup')
    expect(group?.parentId).toBe('checkbox')
    const tabItem = result.index.find(item => item.name === 'MeTabItem')
    expect(tabItem?.parentId).toBe('tab')
  })

  it('识别命令式 API 组件', async () => {
    const result = await extractAll(root)
    expect(result.components.get('toast')?.kind).toBe('api')
    expect(result.components.get('button')?.kind).toBe('component')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/extract.spec.ts`

Expected: FAIL，找不到 `../src/extract`。

- [ ] **Step 3: 实现合并逻辑**

`mcp/src/extract/merge.ts`：

```ts
import { createHash } from 'node:crypto'
import type { ComponentIndexItem, ComponentMeta, ComponentPart, EventMeta, GuideIndexItem, GuideMeta, IconMeta, LibraryManifest, PropMeta } from '../types'
import type { ExtractedDoc } from './docs'
import type { ExportInfo } from './exports'
import type { ComponentRoute, GuideRoute } from './routes'
import type { ParsedTypesSource } from './source'

export interface SourceInfo extends ParsedTypesSource {
  defaults: Record<string, string>
  installKind: 'component' | 'api'
}

export interface BuildInput {
  libraryVersion: string
  routes: { components: ComponentRoute[]; guides: GuideRoute[] }
  exports: Map<string, ExportInfo>
  docs: Map<string, ExtractedDoc>
  markdown: Map<string, string>
  sources: Map<string, SourceInfo>
  icons: IconMeta[]
  warnings: string[]
}

export interface ExtractResult {
  manifest: LibraryManifest
  index: ComponentIndexItem[]
  components: Map<string, ComponentMeta>
  guides: GuideMeta[]
  icons: IconMeta[]
  warnings: string[]
}

export function kebab(name: string): string {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function emptyPart(name: string): ComponentPart {
  return { name, props: [], events: [], slots: [], methods: [], types: [], extraTables: [] }
}

function mergePart(docPart: ComponentPart, source: SourceInfo | undefined, warnings: string[]): ComponentPart {
  const props = new Map<string, PropMeta>()
  for (const prop of docPart.props) props.set(prop.name, { ...prop, source: 'doc' })

  if (source) {
    for (const prop of source.props) {
      const docProp = props.get(prop.name)
      const defaultValue = source.defaults[prop.name]
      if (docProp) {
        props.set(prop.name, {
          ...docProp,
          type: prop.type,
          required: prop.required,
          description: docProp.description || prop.description,
          default: defaultValue ?? docProp.default,
          source: 'both'
        })
      } else {
        warnings.push(`prop-not-documented: ${docPart.name}.${prop.name}`)
        props.set(prop.name, { ...prop, default: defaultValue, source: 'ts' })
      }
    }
    for (const docProp of docPart.props) {
      if (!source.props.some(prop => prop.name === docProp.name)) warnings.push(`prop-not-in-ts: ${docPart.name}.${docProp.name}`)
    }
  }

  const events = new Map<string, EventMeta>()
  for (const event of docPart.events) events.set(event.name, event)
  for (const event of source?.events ?? []) {
    const existing = events.get(event.name)
    events.set(event.name, existing ? { ...existing, params: existing.params ?? event.params, description: existing.description ?? event.description } : event)
  }

  return {
    name: docPart.name,
    props: [...props.values()],
    events: [...events.values()],
    slots: docPart.slots,
    methods: docPart.methods,
    types: source?.types ?? [],
    extraTables: docPart.extraTables
  }
}

function buildKeywords(parts: ComponentPart[], examples: ExtractedDoc['examples']): string[] {
  const values = new Set<string>()
  for (const part of parts) {
    for (const prop of part.props) values.add(prop.name)
    for (const event of part.events) values.add(event.name)
    for (const slot of part.slots) values.add(slot.name)
    for (const type of part.types) values.add(type.name)
  }
  for (const example of examples) values.add(example.title)
  return [...values].slice(0, 80)
}

function toIndexItem(meta: ComponentMeta): ComponentIndexItem {
  return {
    id: meta.id,
    name: meta.name,
    tag: meta.tag,
    title: meta.title,
    zhName: meta.zhName,
    category: meta.category,
    kind: meta.kind,
    description: meta.description,
    keywords: meta.keywords,
    docUrl: meta.docUrl
  }
}

function primaryName(route: ComponentRoute, doc: ExtractedDoc, sources: Map<string, SourceInfo>, exports: Map<string, ExportInfo>): string {
  const candidate = `Me${route.english}`
  if (sources.has(candidate) || exports.has(candidate)) return candidate
  return doc.parts.find(part => part.name.toLowerCase() === candidate.toLowerCase())?.name ?? doc.parts[0]?.name ?? candidate
}

export function buildData(input: BuildInput): ExtractResult {
  const warnings = [...input.warnings]
  const components = new Map<string, ComponentMeta>()
  const index: ComponentIndexItem[] = []
  const guides: GuideMeta[] = []

  for (const route of input.routes.components) {
    const doc = input.docs.get(route.slug)
    if (!doc) {
      warnings.push(`doc-missing: ${route.slug}.md`)
      continue
    }

    const name = primaryName(route, doc, input.sources, input.exports)
    const docParts = doc.parts.length ? doc.parts : [emptyPart(name)]
    const merged = docParts.map(part => mergePart(part, input.sources.get(part.name), warnings))
    merged.sort((left, right) => (left.name === name ? -1 : right.name === name ? 1 : 0))

    const source = input.sources.get(name)
    const meta: ComponentMeta = {
      id: route.slug,
      name,
      tag: kebab(name),
      title: route.title,
      zhName: route.zhName,
      category: route.category,
      kind: source?.installKind === 'api' ? 'api' : 'component',
      description: doc.description || input.exports.get(name)?.comment || '',
      keywords: buildKeywords(merged, doc.examples),
      docUrl: `https://mineh5ui.biaov.cn/v2/doc/${route.slug}`,
      importCode: doc.importCode || `import { ${name} } from 'mine-h5-ui'`,
      stylePath: `mine-h5-ui/styles/${name}.css`,
      parts: merged,
      examples: doc.examples,
      markdown: input.markdown.get(route.slug) ?? ''
    }

    components.set(route.slug, meta)
    index.push(toIndexItem(meta))

    for (const part of merged) {
      if (part.name === name) continue
      index.push({
        ...toIndexItem(meta),
        name: part.name,
        tag: kebab(part.name),
        parentId: route.slug
      })
    }
  }

  for (const route of input.routes.guides) {
    const markdown = input.markdown.get(route.slug)
    if (!markdown) {
      warnings.push(`guide-missing: ${route.slug}.md`)
      continue
    }
    guides.push({
      topic: route.slug,
      title: route.title,
      category: route.category,
      kind: route.kind,
      markdown
    })
  }

  const hash = createHash('sha256')
    .update(JSON.stringify([...components.values()]))
    .update(JSON.stringify(guides))
    .update(JSON.stringify(input.icons))
    .digest('hex')
    .slice(0, 12)

  const manifest: LibraryManifest = {
    name: 'mine-h5-ui',
    libraryVersion: input.libraryVersion,
    generatedAt: new Date().toISOString(),
    counts: { components: index.filter(item => !item.parentId).length, guides: guides.length, icons: input.icons.length },
    warnings,
    hash
  }

  return { manifest, index, components, guides, icons: input.icons, warnings }
}

export function guideIndex(guides: GuideMeta[]): GuideIndexItem[] {
  return guides.map(({ topic, title, category, kind }) => ({ topic, title, category, kind }))
}
```

- [ ] **Step 4: 实现全量提取入口**

`mcp/src/extract/index.ts`：

```ts
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import type { IconMeta } from '../types'
import { extractDoc } from './docs'
import { parseComponentExports } from './exports'
import { parseIcons, type IconfontJson } from './icons'
import { buildData, type ExtractResult, type SourceInfo } from './merge'
import { parseRoutes, type RoutesData } from './routes'
import { parseInstallKind, parseSfcSource, parseTypesSource } from './source'

async function readText(root: URL, path: string): Promise<string> {
  return readFile(new URL(path, root), 'utf-8')
}

async function readJson<T>(root: URL, path: string): Promise<T> {
  return JSON.parse(await readText(root, path)) as T
}

export async function extractAll(root: URL): Promise<ExtractResult> {
  const warnings: string[] = []
  const pkg = await readJson<{ version: string }>(root, 'package.json')
  const routes = parseRoutes(await readJson(root, 'examples/config/routes.json'))
  const exports = parseComponentExports(await readText(root, 'packages/components.ts'))
  const icons = parseIcons(await readJson<IconfontJson>(root, 'packages/styles/fonts/iconfont.json'), warnings)

  const docFiles = (await readdir(new URL('examples/docs/', root))).filter(file => file.endsWith('.md'))
  const markdown = new Map<string, string>()
  for (const file of docFiles) {
    markdown.set(file.replace(/\.md$/, ''), await readText(root, `examples/docs/${file}`))
  }

  const docs = new Map<string, ReturnType<typeof extractDoc>>()
  for (const route of routes.components) {
    const text = markdown.get(route.slug)
    if (!text) {
      warnings.push(`doc-missing: ${route.slug}.md`)
      continue
    }
    docs.set(route.slug, extractDoc(text, `Me${route.english}`))
  }

  const sources = new Map<string, SourceInfo>()
  const entries = await readdir(new URL('packages/', root), { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith('Me')) continue
    const dir = `packages/${entry.name}/`
    let indexTs = ''
    try {
      indexTs = await readText(root, `${dir}index.ts`)
    } catch {
      warnings.push(`source-index-missing: ${entry.name}`)
      continue
    }
    let typesText = ''
    try {
      typesText = await readText(root, `${dir}types.ts`)
    } catch {
      typesText = ''
    }
    const parsedTypes = typesText ? parseTypesSource(typesText, `${entry.name}/types.ts`) : { props: [], events: [], types: [] }
    const parsedSfc = entry.name === 'MeComposable' ? { defaults: {} } : parseSfcSource(await readText(root, `${dir}index.vue`), `${entry.name}/index.vue`)
    sources.set(entry.name, {
      ...parsedTypes,
      defaults: parsedSfc.defaults,
      installKind: parseInstallKind(indexTs)
    })
  }

  const validGuides = new Set(routes.guides.map(guide => guide.slug))
  for (const slug of markdown.keys()) {
    const isComponent = routes.components.some(route => route.slug === slug)
    if (!isComponent && !validGuides.has(slug)) warnings.push(`doc-unmapped: ${slug}.md`)
  }

  return buildData({
    libraryVersion: pkg.version,
    routes,
    exports,
    docs,
    markdown,
    sources,
    icons,
    warnings
  })
}

export function guideIndex(routes: RoutesData, guides: ExtractResult['guides']) {
  return guides.map(({ topic, title, category, kind }) => ({ topic, title, category, kind }))
}
```

- [ ] **Step 5: 实现数据写入与 CLI**

`mcp/src/extract/write.ts`：

```ts
import { mkdir, writeFile } from 'node:fs/promises'
import type { ExtractResult } from './merge'

async function writeJson(dir: URL, name: string, value: unknown): Promise<void> {
  await writeFile(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`, 'utf-8')
}

export async function writeGenerated(result: ExtractResult, outputDir: URL): Promise<void> {
  await mkdir(new URL('components/', outputDir), { recursive: true })
  await mkdir(new URL('guides/', outputDir), { recursive: true })

  for (const [id, meta] of result.components) await writeJson(new URL('components/', outputDir), `${id}.json`, meta)
  for (const guide of result.guides) await writeJson(new URL('guides/', outputDir), `${guide.topic}.json`, guide)

  await writeJson(outputDir, 'components.index.json', result.index)
  await writeJson(outputDir, 'guides.index.json', result.guides.map(({ topic, title, category, kind }) => ({ topic, title, category, kind })))
  await writeJson(outputDir, 'icons.json', result.icons)
  await writeJson(outputDir, 'manifest.json', result.manifest)
}
```

`mcp/scripts/extract.ts`：

```ts
import { extractAll } from '../src/extract'
import { writeGenerated } from '../src/extract/write'

const root = new URL('../../', import.meta.url)
const outputDir = new URL('../src/generated/', import.meta.url)

const result = await extractAll(root)
await writeGenerated(result, outputDir)

console.log(`[extract] mine-h5-ui@${result.manifest.libraryVersion}`)
console.log(`[extract] components=${result.manifest.counts.components} guides=${result.manifest.counts.guides} icons=${result.manifest.counts.icons}`)
console.log(`[extract] warnings=${result.warnings.length}`)
for (const warning of result.warnings.slice(0, 20)) console.warn(`  - ${warning}`)
if (result.warnings.length > 20) console.warn(`  ... ${result.warnings.length - 20} more`)
```

`mcp/scripts/check-data.ts`：

```ts
import { readFile } from 'node:fs/promises'
import { extractAll } from '../src/extract'
import { manifestSchema } from '../src/schema'

const root = new URL('../../', import.meta.url)
const generated = new URL('../src/generated/', import.meta.url)
const result = await extractAll(root)
const rawManifest = JSON.parse(await readFile(new URL('manifest.json', generated), 'utf-8')) as unknown
const manifest = manifestSchema.parse(rawManifest)
const rootPkg = JSON.parse(await readFile(new URL('package.json', root), 'utf-8')) as { version: string }

const errors: string[] = []
if (manifest.libraryVersion !== rootPkg.version) errors.push(`version-mismatch: data=${manifest.libraryVersion} root=${rootPkg.version}`)
if (manifest.counts.components !== result.index.filter(item => !item.parentId).length) errors.push('component-count-mismatch')
if (manifest.counts.guides !== result.guides.length) errors.push('guide-count-mismatch')
if (manifest.counts.icons !== result.icons.length) errors.push('icon-count-mismatch')
if (manifest.counts.components < 60) errors.push('component-count-too-low')
if (manifest.counts.icons < 70) errors.push('icon-count-too-low')
if (result.warnings.length > 300) errors.push(`too-many-warnings: ${result.warnings.length}`)

for (const item of result.index) {
  const id = item.parentId ?? item.id
  if (!result.components.has(id)) errors.push(`orphan-index-item: ${item.name} -> ${id}`)
}

const iconNames = new Set(result.icons.map(icon => icon.name))
if (iconNames.size !== result.icons.length) errors.push('duplicate-icon-name')

if (errors.length) {
  console.error('[check] failed')
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log(`[check] ok: components=${manifest.counts.components} guides=${manifest.counts.guides} icons=${manifest.counts.icons} warnings=${result.warnings.length}`)
```

`mcp/scripts/copy-data.ts`：

```ts
import { cp } from 'node:fs/promises'

const source = new URL('../src/generated/', import.meta.url)
const target = new URL('../dist/generated/', import.meta.url)

await cp(source, target, { recursive: true })
console.log('[build] generated data copied to dist/generated')
```

- [ ] **Step 6: 运行提取与测试**

Run:

```bash
npm --prefix mcp run extract
npm --prefix mcp run check
npx vitest run tests/extract.spec.ts
npm --prefix mcp run typecheck
```

Expected: 提取成功，`[check] ok`，测试 PASS。若按钮默认值断言失败，检查 `withDefaults` 提取结果是否带引号；以实际源码文本为准调整断言，不修改提取器行为。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/extract/merge.ts mcp/src/extract/index.ts mcp/src/extract/write.ts mcp/scripts/extract.ts mcp/scripts/check-data.ts mcp/scripts/copy-data.ts mcp/tests/extract.spec.ts
git commit -m "feat(mcp): 合并元数据并生成静态快照"
```

---

### Task 7: 运行时数据仓库、名称解析与检索

**Files:**
- Create: `mcp/src/data/loader.ts`
- Create: `mcp/src/data/resolve.ts`
- Create: `mcp/src/data/search.ts`
- Test: `mcp/tests/search.spec.ts`

**Interfaces:**
- Consumes: Task 2 的类型、Task 6 生成的 `src/generated/`。
- Produces:
  - `DataRepository.open(dataDir?: URL): Promise<DataRepository>`
  - `DataRepository.listComponents(category?, kind?): ComponentIndexItem[]`
  - `DataRepository.resolve(input: string): { item?: ComponentIndexItem; suggestions: string[] }`
  - `DataRepository.searchComponents(query: string, category?: string, limit?: number): SearchHit<ComponentIndexItem>[]`
  - `DataRepository.searchIcons(query: string, limit?: number, offset?: number): { total: number; icons: IconMeta[] }`
  - `DataRepository.getComponentScope(input: string): Promise<ComponentScope | undefined>`
  - `DataRepository.getGuide(topic: string): Promise<GuideMeta | undefined>`
  - `ComponentScope = { item: ComponentIndexItem; meta: ComponentMeta; part: ComponentPart; isSubComponent: boolean }`

- [ ] **Step 1: 写失败的检索与解析测试**

`mcp/tests/search.spec.ts`：

```ts
import { describe, expect, it } from 'vitest'
import { DataRepository } from '../src/data/loader'

describe('DataRepository', () => {
  it('解析多种组件名写法', async () => {
    const repo = await DataRepository.open()
    expect(repo.resolve('MeButton').item?.name).toBe('MeButton')
    expect(repo.resolve('me-button').item?.name).toBe('MeButton')
    expect(repo.resolve('button').item?.name).toBe('MeButton')
    expect(repo.resolve('按钮').item?.name).toBe('MeButton')
    expect(repo.resolve('MeCheckboxGroup').item?.parentId).toBe('checkbox')
  })

  it('为拼写错误提供建议', async () => {
    const repo = await DataRepository.open()
    const result = repo.resolve('MeBotton')
    expect(result.item).toBeUndefined()
    expect(result.suggestions).toContain('MeButton')
  })

  it('按中文与英文检索组件', async () => {
    const repo = await DataRepository.open()
    expect(repo.searchComponents('按钮')[0]?.item.name).toBe('MeButton')
    expect(repo.searchComponents('表单').some(hit => hit.item.name === 'MeForm')).toBe(true)
    expect(repo.searchComponents('toast')[0]?.item.name).toBe('MeToast')
  })

  it('解析子组件分区', async () => {
    const repo = await DataRepository.open()
    const group = await repo.getComponentScope('MeCheckboxGroup')
    expect(group?.isSubComponent).toBe(true)
    expect(group?.meta.id).toBe('checkbox')
    expect(group?.part.name).toBe('MeCheckboxGroup')
  })

  it('检索图标并支持分页', async () => {
    const repo = await DataRepository.open()
    const result = repo.searchIcons('close', 5, 0)
    expect(result.icons.some(icon => icon.name === 'icon-close')).toBe(true)
    const first = repo.searchIcons('', 3, 0)
    const second = repo.searchIcons('', 3, 3)
    expect(first.icons).toHaveLength(3)
    expect(first.icons[0]?.name).not.toBe(second.icons[0]?.name)
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/search.spec.ts`

Expected: FAIL，模块不存在。

- [ ] **Step 3: 实现名称解析**

`mcp/src/data/resolve.ts`：

```ts
import type { ComponentIndexItem } from '../types'

export interface ResolveResult {
  item?: ComponentIndexItem
  suggestions: string[]
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '')
}

function aliasKeys(item: ComponentIndexItem): string[] {
  return [item.name, item.tag, item.id, item.zhName, item.title, item.name.replace(/^Me/, '')].map(normalize)
}

function editDistance(left: string, right: string): number {
  const rows = Array.from({ length: left.length + 1 }, (_, index) => [index])
  for (let column = 1; column <= right.length; column++) rows[0]![column] = column
  for (let row = 1; row <= left.length; row++) {
    for (let column = 1; column <= right.length; column++) {
      rows[row]![column] = Math.min(
        rows[row - 1]![column]! + 1,
        rows[row]![column - 1]! + 1,
        rows[row - 1]![column - 1]! + (left[row - 1] === right[column - 1] ? 0 : 1)
      )
    }
  }
  return rows[left.length]![right.length]!
}

export function buildAliasMap(index: ComponentIndexItem[]): Map<string, ComponentIndexItem> {
  const map = new Map<string, ComponentIndexItem>()
  for (const item of index) {
    for (const key of aliasKeys(item)) {
      if (!map.has(key)) map.set(key, item)
    }
  }
  return map
}

export function resolveComponent(index: ComponentIndexItem[], input: string): ResolveResult {
  const map = buildAliasMap(index)
  const key = normalize(input)
  const exact = map.get(key) ?? map.get(normalize(input.replace(/^Me/i, ''))) ?? map.get(`me${key}`)
  if (exact) return { item: exact, suggestions: [] }

  const isCjk = /[一-龥]/.test(key)
  const suggestions = index
    .map(item => {
      const candidates = aliasKeys(item)
      let distance = Number.POSITIVE_INFINITY
      for (const candidate of candidates) {
        if (isCjk) {
          if (candidate.includes(key) || key.includes(candidate)) distance = Math.min(distance, 1)
        } else {
          distance = Math.min(distance, editDistance(key, candidate))
        }
      }
      return { item, distance }
    })
    .filter(entry => entry.distance <= (isCjk ? 1 : 2))
    .sort((left, right) => left.distance - right.distance)
    .slice(0, 3)
    .map(entry => entry.item.name)

  return { suggestions: [...new Set(suggestions)] }
}
```

- [ ] **Step 4: 实现检索打分**

`mcp/src/data/search.ts`：

```ts
import type { ComponentIndexItem, IconMeta } from '../types'

export interface SearchHit<T> {
  item: T
  score: number
  matchedOn: string[]
}

function tokenize(query: string): string[] {
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
}

function matchScore(value: string | undefined, token: string, exactScore: number, prefixScore: number, includesScore: number): number {
  if (!value) return 0
  const text = value.toLowerCase()
  if (text === token) return exactScore
  if (text.startsWith(token)) return prefixScore
  if (text.includes(token)) return includesScore
  return 0
}

export function scoreComponent(item: ComponentIndexItem, query: string): SearchHit<ComponentIndexItem> {
  const tokens = tokenize(query)
  if (!tokens.length) return { item, score: 0, matchedOn: [] }

  let score = 0
  const matchedOn = new Set<string>()

  for (const token of tokens) {
    const nameScore = matchScore(item.name, token, 100, 70, 55) || matchScore(item.tag, token, 100, 70, 55) || matchScore(item.id, token, 100, 70, 55)
    const titleScore = matchScore(item.zhName, token, 90, 70, 55) || matchScore(item.title, token, 90, 70, 55)
    const descriptionScore = matchScore(item.description, token, 0, 0, 40)
    const categoryScore = matchScore(item.category, token, 0, 0, 10)
    const keywordScore = item.keywords.some(keyword => keyword.toLowerCase().includes(token)) ? 30 : 0

    score += Math.max(nameScore, titleScore) + descriptionScore + categoryScore + keywordScore
    if (nameScore) matchedOn.add('name')
    if (titleScore) matchedOn.add('title')
    if (descriptionScore) matchedOn.add('description')
    if (keywordScore) matchedOn.add('keywords')
    if (categoryScore) matchedOn.add('category')
  }

  return { item, score, matchedOn: [...matchedOn] }
}

export function searchComponents(index: ComponentIndexItem[], query: string, category: string | undefined, limit: number): SearchHit<ComponentIndexItem>[] {
  return index
    .filter(item => !category || item.category === category)
    .map(item => scoreComponent(item, query))
    .filter(hit => hit.score > 0)
    .sort((left, right) => right.score - left.score || left.item.name.localeCompare(right.item.name))
    .slice(0, limit)
}

export function searchIcons(icons: IconMeta[], query: string, limit: number, offset: number): { total: number; icons: IconMeta[] } {
  const tokens = tokenize(query)
  if (!tokens.length) {
    return { total: icons.length, icons: icons.slice(offset, offset + limit) }
  }

  const scored = icons
    .map(icon => {
      let score = 0
      for (const token of tokens) {
        score += matchScore(icon.name, token, 100, 80, 60)
        score += matchScore(icon.label, token, 100, 80, 60)
        score += matchScore(icon.fontClass, token, 100, 80, 60)
      }
      return { icon, score }
    })
    .filter(hit => hit.score > 0)
    .sort((left, right) => right.score - left.score || left.icon.name.localeCompare(right.icon.name))

  return { total: scored.length, icons: scored.slice(offset, offset + limit).map(hit => hit.icon) }
}
```

- [ ] **Step 5: 实现数据仓库**

`mcp/src/data/loader.ts`：

```ts
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import type { ComponentIndexItem, ComponentMeta, ComponentPart, GuideIndexItem, GuideMeta, IconMeta, LibraryManifest } from '../types'
import { resolveComponent } from './resolve'
import { searchComponents, searchIcons, type SearchHit } from './search'

export interface ComponentScope {
  item: ComponentIndexItem
  meta: ComponentMeta
  part: ComponentPart
  isSubComponent: boolean
}

function candidateDataDirs(): URL[] {
  return [new URL('../generated/', import.meta.url), new URL('./generated/', import.meta.url), new URL('../src/generated/', import.meta.url)]
}

function defaultDataDir(): URL {
  for (const candidate of candidateDataDirs()) {
    if (existsSync(fileURLToPath(candidate))) return candidate
  }
  return candidateDataDirs()[0]!
}

async function readJson<T>(dir: URL, name: string): Promise<T> {
  return JSON.parse(await readFile(new URL(name, dir), 'utf-8')) as T
}

export class DataRepository {
  private manifest!: LibraryManifest
  private index: ComponentIndexItem[] = []
  private icons: IconMeta[] = []
  private guidesIndex: GuideIndexItem[] = []
  private componentCache = new Map<string, ComponentMeta>()
  private guideCache = new Map<string, GuideMeta>()

  private constructor(private readonly dataDir: URL) {}

  static async open(dataDir?: URL): Promise<DataRepository> {
    const repo = new DataRepository(dataDir ?? defaultDataDir())
    await repo.load()
    return repo
  }

  private async load(): Promise<void> {
    this.manifest = await readJson(this.dataDir, 'manifest.json')
    this.index = await readJson(this.dataDir, 'components.index.json')
    this.icons = await readJson(this.dataDir, 'icons.json')
    this.guidesIndex = await readJson(this.dataDir, 'guides.index.json')
  }

  get libraryVersion(): string {
    return this.manifest.libraryVersion
  }

  getManifest(): LibraryManifest {
    return this.manifest
  }

  getIndex(): ComponentIndexItem[] {
    return this.index
  }

  getGuidesIndex(): GuideIndexItem[] {
    return this.guidesIndex
  }

  getIcons(): IconMeta[] {
    return this.icons
  }

  listComponents(category?: string, kind?: string): ComponentIndexItem[] {
    return this.index.filter(item => !item.parentId && (!category || item.category === category) && (!kind || item.kind === kind))
  }

  resolve(input: string): { item?: ComponentIndexItem; suggestions: string[] } {
    return resolveComponent(this.index, input)
  }

  searchComponents(query: string, category?: string, limit = 8): SearchHit<ComponentIndexItem>[] {
    return searchComponents(this.index.filter(item => !item.parentId || item.parentId), query, category, limit)
  }

  searchIcons(query: string, limit = 20, offset = 0): { total: number; icons: IconMeta[] } {
    return searchIcons(this.icons, query, limit, offset)
  }

  private async loadComponent(id: string): Promise<ComponentMeta> {
    const cached = this.componentCache.get(id)
    if (cached) return cached
    const meta = await readJson<ComponentMeta>(new URL('components/', this.dataDir), `${id}.json`)
    this.componentCache.set(id, meta)
    return meta
  }

  async getComponentScope(input: string): Promise<ComponentScope | undefined> {
    const resolved = this.resolve(input)
    if (!resolved.item) return undefined
    const meta = await this.loadComponent(resolved.item.parentId ?? resolved.item.id)
    const part = meta.parts.find(item => item.name === resolved.item!.name) ?? meta.parts[0]!
    return { item: resolved.item, meta, part, isSubComponent: Boolean(resolved.item.parentId) }
  }

  async getGuide(topic: string): Promise<GuideMeta | undefined> {
    const cached = this.guideCache.get(topic)
    if (cached) return cached
    if (!this.guidesIndex.some(item => item.topic === topic)) return undefined
    const guide = await readJson<GuideMeta>(new URL('guides/', this.dataDir), `${topic}.json`)
    this.guideCache.set(topic, guide)
    return guide
  }
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/search.spec.ts && npm run typecheck`

Expected: PASS。若 `resolve('button')` 命中子组件而非 `MeButton`，检查索引顺序：主组件必须先于子组件写入，且 `buildAliasMap` 不覆盖已有键。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/data/loader.ts mcp/src/data/resolve.ts mcp/src/data/search.ts mcp/tests/search.spec.ts
git commit -m "feat(mcp): 实现运行时数据仓库与检索"
```

---

### Task 8: Server 骨架、InMemory 测试工具与 list_components

**Files:**
- Create: `mcp/src/server.ts`
- Create: `mcp/src/tools/result.ts`
- Create: `mcp/src/tools/listComponents.ts`
- Create: `mcp/src/tools/index.ts`
- Create: `mcp/tests/helpers.ts`
- Test: `mcp/tests/tools-list.spec.ts`

**Interfaces:**
- Consumes: `DataRepository`、`@modelcontextprotocol/sdk` v1。
- Produces:
  - `createServer(repo: DataRepository): McpServer`
  - `registerTools(server, repo): void`
  - `jsonResult(payload): CallToolResult`
  - `errorResult(code, message, extra?): CallToolResult`

- [ ] **Step 1: 写失败的工具测试**

`mcp/tests/helpers.ts`：

```ts
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { DataRepository } from '../src/data/loader'
import { createServer } from '../src/server'

export interface TestContext {
  client: Client
  server: McpServer
  repo: DataRepository
  close: () => Promise<void>
}

export async function createTestContext(): Promise<TestContext> {
  const repo = await DataRepository.open()
  const server = createServer(repo)
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair()
  const client = new Client({ name: 'test-client', version: '1.0.0' })
  await Promise.all([client.connect(clientTransport), server.connect(serverTransport)])
  return {
    client,
    server,
    repo,
    close: async () => {
      await client.close()
      await server.close()
    }
  }
}

export async function callTool(client: Client, name: string, args: Record<string, unknown>): Promise<{ isError: boolean; data: any }> {
  const result = await client.callTool({ name, arguments: args })
  const first = result.content?.[0]
  const text = first && first.type === 'text' ? first.text : '{}'
  return { isError: Boolean(result.isError), data: JSON.parse(text) }
}
```

`mcp/tests/tools-list.spec.ts`：

```ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { callTool, createTestContext, type TestContext } from './helpers'

let context: TestContext

beforeAll(async () => {
  context = await createTestContext()
})

afterAll(async () => {
  await context.close()
})

describe('list_components', () => {
  it('返回组件与指南目录', async () => {
    const { isError, data } = await callTool(context.client, 'list_components', {})
    expect(isError).toBe(false)
    expect(data.library).toMatch(/^mine-h5-ui@/)
    expect(data.total).toBeGreaterThanOrEqual(60)
    expect(data.categories).toContain('基础组件')
    expect(data.components.find((item: any) => item.name === 'MeButton')?.tag).toBe('me-button')
    expect(data.guides.some((item: any) => item.topic === 'install')).toBe(true)
  })

  it('支持按分类过滤', async () => {
    const { data } = await callTool(context.client, 'list_components', { category: '表单组件' })
    expect(data.components.every((item: any) => item.category === '表单组件')).toBe(true)
    expect(data.components.some((item: any) => item.name === 'MeInput')).toBe(true)
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/tools-list.spec.ts`

Expected: FAIL，`../src/server` 不存在。

- [ ] **Step 3: 实现返回辅助**

`mcp/src/tools/result.ts`：

```ts
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'

export function jsonResult(payload: unknown): CallToolResult {
  return { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] }
}

export function errorResult(code: string, message: string, extra: Record<string, unknown> = {}): CallToolResult {
  return {
    isError: true,
    content: [{ type: 'text', text: JSON.stringify({ code, message, ...extra }, null, 2) }]
  }
}
```

- [ ] **Step 4: 实现 list_components**

`mcp/src/tools/listComponents.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerListComponents(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'list_components',
    {
      title: '列出 mine-h5-ui 组件',
      description: '列出 mine-h5-ui 组件库的全部组件与指南目录，可按分类或组件类型过滤。当你不确定有哪些组件可用时，先调用此工具。',
      inputSchema: {
        category: z.string().optional().describe('组件分类，如 基础组件、表单组件、反馈组件、导航组件、展示组件、业务组件'),
        kind: z.enum(['component', 'api']).optional().describe('组件类型：component 为模板组件，api 为命令式 API 组件')
      }
    },
    async ({ category, kind }) => {
      const items = repo.listComponents(category, kind)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        total: items.length,
        categories: [...new Set(repo.getIndex().filter(item => !item.parentId).map(item => item.category))],
        components: items.map(item => ({
          name: item.name,
          tag: item.tag,
          title: item.title,
          category: item.category,
          kind: item.kind,
          description: item.description
        })),
        guides: repo.getGuidesIndex(),
        next: items[0] ? { tool: 'get_component_api', args: { component: items[0].name } } : undefined
      })
    }
  )
}
```

- [ ] **Step 5: 实现工具注册与 server 骨架**

`mcp/src/tools/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'
import { registerListComponents } from './listComponents'

export function registerTools(server: McpServer, repo: DataRepository): void {
  registerListComponents(server, repo)
}
```

`mcp/src/server.ts`：

```ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from './data/loader'
import { registerTools } from './tools'
import { readPackageInfo } from './version'

export function createServer(repo: DataRepository): McpServer {
  const pkg = readPackageInfo()
  const server = new McpServer({ name: pkg.name, version: pkg.version })
  registerTools(server, repo)
  return server
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/tools-list.spec.ts && npm run typecheck`

Expected: PASS。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/server.ts mcp/src/tools mcp/tests/helpers.ts mcp/tests/tools-list.spec.ts
git commit -m "feat(mcp): 搭建 Server 骨架与组件列表工具"
```

---

### Task 9: search_components 与 get_component_api

**Files:**
- Create: `mcp/src/tools/searchComponents.ts`
- Create: `mcp/src/tools/getComponentApi.ts`
- Modify: `mcp/src/tools/index.ts`
- Test: `mcp/tests/tools-api.spec.ts`

**Interfaces:**
- Consumes: `DataRepository`、`jsonResult`、`errorResult`。
- Produces: 工具 `search_components` 与 `get_component_api`。

- [ ] **Step 1: 写失败的工具测试**

`mcp/tests/tools-api.spec.ts`：

```ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { callTool, createTestContext, type TestContext } from './helpers'

let context: TestContext

beforeAll(async () => {
  context = await createTestContext()
})

afterAll(async () => {
  await context.close()
})

describe('search_components', () => {
  it('按中文检索并返回下一步提示', async () => {
    const { data } = await callTool(context.client, 'search_components', { query: '按钮' })
    expect(data.results[0].name).toBe('MeButton')
    expect(data.results[0].next.tool).toBe('get_component_api')
  })

  it('无结果时返回空数组而非报错', async () => {
    const { isError, data } = await callTool(context.client, 'search_components', { query: 'zzzz-not-exist' })
    expect(isError).toBe(false)
    expect(data.total).toBe(0)
    expect(data.results).toEqual([])
  })
})

describe('get_component_api', () => {
  it('返回按钮的完整 API', async () => {
    const { data } = await callTool(context.client, 'get_component_api', { component: 'MeButton' })
    const part = data.parts.find((item: any) => item.name === 'MeButton')
    const type = part.props.find((prop: any) => prop.name === 'type')
    expect(type.values).toEqual(['default', 'primary', 'success', 'info', 'warning', 'danger'])
    expect(type.default).toBe("'default'")
    expect(part.events.some((event: any) => event.name === 'click')).toBe(true)
    expect(data.component.import).toContain('MeButton')
  })

  it('复合组件返回全部分区，子组件只返回自身', async () => {
    const parent = await callTool(context.client, 'get_component_api', { component: 'MeCheckbox' })
    expect(parent.data.parts.map((part: any) => part.name)).toEqual(['MeCheckbox', 'MeCheckboxGroup'])
    const child = await callTool(context.client, 'get_component_api', { component: 'MeCheckboxGroup' })
    expect(child.data.parts).toHaveLength(1)
    expect(child.data.parts[0].name).toBe('MeCheckboxGroup')
  })

  it('支持 include 过滤', async () => {
    const { data } = await callTool(context.client, 'get_component_api', { component: 'MeButton', include: ['props'] })
    expect(data.parts[0].props.length).toBeGreaterThan(0)
    expect(data.parts[0].events).toBeUndefined()
  })

  it('未知组件返回错误码与建议', async () => {
    const { isError, data } = await callTool(context.client, 'get_component_api', { component: 'MeBotton' })
    expect(isError).toBe(true)
    expect(data.code).toBe('COMPONENT_NOT_FOUND')
    expect(data.suggestions).toContain('MeButton')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/tools-api.spec.ts`

Expected: FAIL，工具未注册。

- [ ] **Step 3: 实现 search_components**

`mcp/src/tools/searchComponents.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerSearchComponents(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'search_components',
    {
      title: '检索 mine-h5-ui 组件',
      description: '按中文名、英文名、标签、Props 或示例关键字检索组件。编写页面或选择组件前，用此工具确定应使用哪些组件。',
      inputSchema: {
        query: z.string().min(1).describe('检索词，支持中文或英文，例如 按钮、表单、toast、上传'),
        category: z.string().optional().describe('限定分类，如 表单组件'),
        limit: z.number().int().min(1).max(20).default(8).describe('返回数量，默认 8')
      }
    },
    async ({ query, category, limit }) => {
      const hits = repo.searchComponents(query, category, limit)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        query,
        total: hits.length,
        results: hits.map(hit => ({
          name: hit.item.name,
          tag: hit.item.tag,
          title: hit.item.title,
          category: hit.item.category,
          kind: hit.item.kind,
          score: hit.score,
          matchedOn: hit.matchedOn,
          next: { tool: 'get_component_api', args: { component: hit.item.name } }
        }))
      })
    }
  )
}
```

- [ ] **Step 4: 实现 get_component_api**

`mcp/src/tools/getComponentApi.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { ComponentPart, DataRepository } from '../data/loader'
import { errorResult, jsonResult } from './result'

const INCLUDE = ['props', 'events', 'slots', 'methods', 'types'] as const
type Include = (typeof INCLUDE)[number]

function filterPart(part: ComponentPart, include: Include[]): Record<string, unknown> {
  const value: Record<string, unknown> = { name: part.name }
  if (include.includes('props')) value.props = part.props
  if (include.includes('events')) value.events = part.events
  if (include.includes('slots')) value.slots = part.slots
  if (include.includes('methods')) value.methods = part.methods
  if (include.includes('types')) value.types = part.types
  if (part.extraTables.length) value.extraTables = part.extraTables
  return value
}

export function registerGetComponentApi(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_api',
    {
      title: '获取 mine-h5-ui 组件 API',
      description: '获取组件的 Props、Events、Slots、Methods 与类型定义，包含类型、可选值、默认值、必填性与版本。生成或修改组件代码前必须调用，不要凭记忆猜测 API。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、me-button、button、按钮 等写法'),
        include: z.array(z.enum(INCLUDE)).optional().describe('需要返回的 API 分区，默认全部'),
        include_examples: z.boolean().optional().describe('是否同时返回示例标题与代码，默认 false')
      }
    },
    async ({ component, include, include_examples }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      const parts = scope.isSubComponent ? [scope.part] : scope.meta.parts
      const selected = include?.length ? include : [...INCLUDE]
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: {
          id: scope.meta.id,
          name: scope.meta.name,
          tag: scope.meta.tag,
          title: scope.meta.title,
          zhName: scope.meta.zhName,
          category: scope.meta.category,
          kind: scope.meta.kind,
          description: scope.meta.description,
          import: scope.meta.importCode,
          style: scope.meta.stylePath,
          docUrl: scope.meta.docUrl
        },
        parts: parts.map(part => filterPart(part, selected)),
        note: scope.isSubComponent ? `${scope.item.name} 是复合组件 ${scope.meta.name} 的子组件，仅为该子组件的 API。` : undefined,
        examples: include_examples ? scope.meta.examples : undefined,
        next: { tool: 'get_component_examples', args: { component: scope.item.name } }
      })
    }
  )
}
```

- [ ] **Step 5: 注册新工具**

`mcp/src/tools/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'
import { registerGetComponentApi } from './getComponentApi'
import { registerListComponents } from './listComponents'
import { registerSearchComponents } from './searchComponents'

export function registerTools(server: McpServer, repo: DataRepository): void {
  registerListComponents(server, repo)
  registerSearchComponents(server, repo)
  registerGetComponentApi(server, repo)
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/tools-api.spec.ts && npm run typecheck`

Expected: PASS。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/tools/searchComponents.ts mcp/src/tools/getComponentApi.ts mcp/src/tools/index.ts mcp/tests/tools-api.spec.ts
git commit -m "feat(mcp): 实现组件检索与 API 查询工具"
```

---

### Task 10: get_component_examples 与 get_component_doc

**Files:**
- Create: `mcp/src/tools/getComponentExamples.ts`
- Create: `mcp/src/tools/getComponentDoc.ts`
- Modify: `mcp/src/tools/index.ts`
- Test: `mcp/tests/tools-content.spec.ts`

**Interfaces:**
- Consumes: `DataRepository`、`parseMarkdown`、`findHeading`、`extractSectionText`。
- Produces: 工具 `get_component_examples` 与 `get_component_doc`。

- [ ] **Step 1: 写失败的工具测试**

`mcp/tests/tools-content.spec.ts`：

```ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { callTool, createTestContext, type TestContext } from './helpers'

let context: TestContext

beforeAll(async () => {
  context = await createTestContext()
})

afterAll(async () => {
  await context.close()
})

describe('get_component_examples', () => {
  it('返回按钮示例', async () => {
    const { data } = await callTool(context.client, 'get_component_examples', { component: 'MeButton', limit: 2 })
    expect(data.examples).toHaveLength(2)
    expect(data.examples[0].title).toBe('类型按钮')
    expect(data.examples[0].blocks[0].language).toBe('html')
  })

  it('按场景过滤表单示例', async () => {
    const { data } = await callTool(context.client, 'get_component_examples', { component: 'MeForm', scenario: '校验' })
    expect(data.matched).toBe(true)
    expect(data.examples.some((example: any) => example.code.includes('rules') || example.description.includes('校验'))).toBe(true)
  })

  it('子组件示例标注来源', async () => {
    const { data } = await callTool(context.client, 'get_component_examples', { component: 'MeCheckboxGroup' })
    expect(data.note).toContain('MeCheckbox')
  })
})

describe('get_component_doc', () => {
  it('返回完整文档', async () => {
    const { data } = await callTool(context.client, 'get_component_doc', { component: 'MeButton' })
    expect(data.markdown).toContain('# Button 按钮')
    expect(data.markdown).toContain('## API')
  })

  it('返回指定章节', async () => {
    const { data } = await callTool(context.client, 'get_component_doc', { component: 'MeButton', section: 'API' })
    expect(data.markdown.startsWith('## API')).toBe(true)
    expect(data.markdown).not.toContain('## 代码演示')
  })

  it('未知章节返回错误', async () => {
    const { isError, data } = await callTool(context.client, 'get_component_doc', { component: 'MeButton', section: '不存在的章节' })
    expect(isError).toBe(true)
    expect(data.code).toBe('SECTION_NOT_FOUND')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/tools-content.spec.ts`

Expected: FAIL，工具未注册。

- [ ] **Step 3: 实现示例工具**

`mcp/src/tools/getComponentExamples.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { errorResult, jsonResult } from './result'

function clip(code: string): { code: string; truncated?: boolean } {
  return code.length > 4000 ? { code: `${code.slice(0, 4000)}\n/* ... truncated ... */`, truncated: true } : { code }
}

export function registerGetComponentExamples(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_examples',
    {
      title: '获取 mine-h5-ui 组件示例',
      description: '获取组件官方文档中的代码示例，可按场景关键字过滤。生成页面或不确定写法时使用，优先复用官方示例而不是自行编写。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、button、按钮 等写法'),
        scenario: z.string().optional().describe('场景关键字，如 校验、禁用、自定义颜色'),
        limit: z.number().int().min(1).max(10).default(3).describe('返回示例数量，默认 3')
      }
    },
    async ({ component, scenario, limit }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      const all = scope.meta.examples
      const tokens = (scenario ?? '').trim().toLowerCase().split(/\s+/).filter(Boolean)
      const matchedExamples = tokens.length
        ? all.filter(example => {
            const text = [example.title, example.description, ...example.blocks.map(block => block.code)].join(' ').toLowerCase()
            return tokens.every(token => text.includes(token))
          })
        : all
      const matched = matchedExamples.length > 0
      const examples = (matched ? matchedExamples : all).slice(0, limit).map(example => ({
        title: example.title,
        description: example.description,
        blocks: example.blocks.map(block => ({ language: block.language, ...clip(block.code) }))
      }))

      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: { name: scope.item.name, title: scope.meta.title, import: scope.meta.importCode, style: scope.meta.stylePath },
        scenario: scenario ?? null,
        matched,
        total: matched ? matchedExamples.length : all.length,
        examples,
        note: scope.isSubComponent ? `示例来自父文档 ${scope.meta.name}。` : undefined,
        next: { tool: 'get_component_doc', args: { component: scope.item.name, section: 'API' } }
      })
    }
  )
}
```

- [ ] **Step 4: 实现文档工具**

`mcp/src/tools/getComponentDoc.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { extractSectionText, findHeading, flattenHeadings, parseMarkdown } from '../extract/markdown'
import { errorResult, jsonResult } from './result'

const MAX_DOC_LENGTH = 60000

export function registerGetComponentDoc(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_doc',
    {
      title: '获取 mine-h5-ui 组件文档',
      description: '获取组件的原始 Markdown 文档，或其中某个章节。需要完整说明、注意事项或示例上下文时使用。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、button、按钮 等写法'),
        section: z.string().optional().describe('章节标题或其前缀，例如 API、代码演示、Slots')
      }
    },
    async ({ component, section }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      let markdown = scope.meta.markdown
      if (section) {
        const parsed = parseMarkdown(markdown)
        const node = findHeading(parsed.headings, item => item.title.trim().startsWith(section.trim()))
        if (!node) {
          return errorResult('SECTION_NOT_FOUND', `组件 ${scope.item.name} 中未找到章节 '${section}'`, {
            available: flattenHeadings(parsed.headings).map(item => item.title)
          })
        }
        markdown = extractSectionText(markdown, node)
      }

      const truncated = markdown.length > MAX_DOC_LENGTH
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: { name: scope.item.name, title: scope.meta.title, docUrl: scope.meta.docUrl },
        section: section ?? null,
        markdown: truncated ? markdown.slice(0, MAX_DOC_LENGTH) : markdown,
        truncated,
        note: scope.isSubComponent ? `文档来自父组件 ${scope.meta.name}。` : undefined
      })
    }
  )
}
```

- [ ] **Step 5: 注册新工具**

`mcp/src/tools/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'
import { registerGetComponentApi } from './getComponentApi'
import { registerGetComponentDoc } from './getComponentDoc'
import { registerGetComponentExamples } from './getComponentExamples'
import { registerListComponents } from './listComponents'
import { registerSearchComponents } from './searchComponents'

export function registerTools(server: McpServer, repo: DataRepository): void {
  registerListComponents(server, repo)
  registerSearchComponents(server, repo)
  registerGetComponentApi(server, repo)
  registerGetComponentExamples(server, repo)
  registerGetComponentDoc(server, repo)
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/tools-content.spec.ts && npm run typecheck`

Expected: PASS。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/tools/getComponentExamples.ts mcp/src/tools/getComponentDoc.ts mcp/src/tools/index.ts mcp/tests/tools-content.spec.ts
git commit -m "feat(mcp): 实现示例与文档查询工具"
```

---

### Task 11: search_icons 与 get_guide

**Files:**
- Create: `mcp/src/tools/searchIcons.ts`
- Create: `mcp/src/tools/getGuide.ts`
- Modify: `mcp/src/tools/index.ts`
- Test: `mcp/tests/tools-icons-guide.spec.ts`

**Interfaces:**
- Consumes: `DataRepository`。
- Produces: 工具 `search_icons` 与 `get_guide`。

- [ ] **Step 1: 写失败的工具测试**

`mcp/tests/tools-icons-guide.spec.ts`：

```ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { callTool, createTestContext, type TestContext } from './helpers'

let context: TestContext

beforeAll(async () => {
  context = await createTestContext()
})

afterAll(async () => {
  await context.close()
})

describe('search_icons', () => {
  it('按英文名检索并返回用法', async () => {
    const { data } = await callTool(context.client, 'search_icons', { query: 'close', limit: 5 })
    expect(data.total).toBeGreaterThan(0)
    const icon = data.icons.find((item: any) => item.name === 'icon-close')
    expect(icon?.usage).toBe('<me-icon name="icon-close" />')
  })

  it('空查询返回分页列表', async () => {
    const first = await callTool(context.client, 'search_icons', { limit: 3, offset: 0 })
    const second = await callTool(context.client, 'search_icons', { limit: 3, offset: 3 })
    expect(first.data.icons).toHaveLength(3)
    expect(first.data.total).toBeGreaterThanOrEqual(70)
    expect(first.data.icons[0].name).not.toBe(second.data.icons[0].name)
  })
})

describe('get_guide', () => {
  it('返回安装指南', async () => {
    const { data } = await callTool(context.client, 'get_guide', { topic: 'install' })
    expect(data.title).toBe('安装 install')
    expect(data.markdown).toContain('npm i mine-h5-ui')
  })

  it('返回组合式 API 指南', async () => {
    const { data } = await callTool(context.client, 'get_guide', { topic: 'composable' })
    expect(data.markdown).toContain('useValidator')
  })

  it('未知主题返回错误与可选值', async () => {
    const { isError, data } = await callTool(context.client, 'get_guide', { topic: 'not-exist' })
    expect(isError).toBe(true)
    expect(data.code).toBe('GUIDE_NOT_FOUND')
    expect(data.available).toContain('install')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/tools-icons-guide.spec.ts`

Expected: FAIL，工具未注册。

- [ ] **Step 3: 实现图标工具**

`mcp/src/tools/searchIcons.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerSearchIcons(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'search_icons',
    {
      title: '检索 mine-h5-ui 图标',
      description: '检索 mine-h5-ui 内置图标，返回可直接用于 <me-icon name="..."> 的名称。支持英文 class 名与 iconfont 中的中文名称。',
      inputSchema: {
        query: z.string().optional().describe('检索词，例如 close、关闭、loading；留空返回全部图标'),
        limit: z.number().int().min(1).max(100).default(20).describe('返回数量，默认 20'),
        offset: z.number().int().min(0).default(0).describe('分页偏移，默认 0')
      }
    },
    async ({ query, limit, offset }) => {
      const result = repo.searchIcons(query ?? '', limit, offset)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        query: query ?? null,
        total: result.total,
        offset,
        limit,
        icons: result.icons.map(icon => ({ ...icon, usage: `<me-icon name="${icon.name}" />` }))
      })
    }
  )
}
```

- [ ] **Step 4: 实现指南工具**

`mcp/src/tools/getGuide.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { errorResult, jsonResult } from './result'

const MAX_GUIDE_LENGTH = 60000

export function registerGetGuide(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_guide',
    {
      title: '获取 mine-h5-ui 指南',
      description: '获取安装、快速开始、主题、全局样式变量、开发指南、更新日志、样式类、API 方法、正则校验、组合式 API 等指南文档。',
      inputSchema: {
        topic: z.string().min(1).describe('指南主题：introduce、install、start、theme、var、develop、logs、style、api、regExp、composable')
      }
    },
    async ({ topic }) => {
      const guide = await repo.getGuide(topic)
      if (!guide) {
        return errorResult('GUIDE_NOT_FOUND', `未找到指南 '${topic}'`, { available: repo.getGuidesIndex().map(item => item.topic) })
      }
      const truncated = guide.markdown.length > MAX_GUIDE_LENGTH
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        topic: guide.topic,
        title: guide.title,
        category: guide.category,
        kind: guide.kind,
        markdown: truncated ? guide.markdown.slice(0, MAX_GUIDE_LENGTH) : guide.markdown,
        truncated
      })
    }
  )
}
```

- [ ] **Step 5: 注册新工具**

`mcp/src/tools/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'
import { registerGetComponentApi } from './getComponentApi'
import { registerGetComponentDoc } from './getComponentDoc'
import { registerGetComponentExamples } from './getComponentExamples'
import { registerGetGuide } from './getGuide'
import { registerListComponents } from './listComponents'
import { registerSearchComponents } from './searchComponents'
import { registerSearchIcons } from './searchIcons'

export function registerTools(server: McpServer, repo: DataRepository): void {
  registerListComponents(server, repo)
  registerSearchComponents(server, repo)
  registerGetComponentApi(server, repo)
  registerGetComponentExamples(server, repo)
  registerGetComponentDoc(server, repo)
  registerSearchIcons(server, repo)
  registerGetGuide(server, repo)
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/tools-icons-guide.spec.ts && npm run typecheck`

Expected: PASS。若指南标题与断言不符，以 `guides.index.json` 中的实际标题为准修正断言。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/tools/searchIcons.ts mcp/src/tools/getGuide.ts mcp/src/tools/index.ts mcp/tests/tools-icons-guide.spec.ts
git commit -m "feat(mcp): 实现图标与指南查询工具"
```

---

### Task 12: Resources 与 Prompts

**Files:**
- Create: `mcp/src/resources/index.ts`
- Create: `mcp/src/prompts/index.ts`
- Modify: `mcp/src/server.ts`
- Test: `mcp/tests/resources-prompts.spec.ts`

**Interfaces:**
- Consumes: `DataRepository`、MCP SDK `ResourceTemplate`。
- Produces: `registerResources(server, repo): void`、`registerPrompts(server): void`。

- [ ] **Step 1: 写失败的资源与 Prompt 测试**

`mcp/tests/resources-prompts.spec.ts`：

```ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createTestContext, type TestContext } from './helpers'

let context: TestContext

beforeAll(async () => {
  context = await createTestContext()
})

afterAll(async () => {
  await context.close()
})

describe('resources', () => {
  it('列出索引与资源模板', async () => {
    const resources = await context.client.listResources()
    expect(resources.resources.some(resource => resource.uri === 'mineh5ui://index')).toBe(true)
    const templates = await context.client.listResourceTemplates()
    expect(templates.resourceTemplates.some(template => template.uriTemplate.includes('components'))).toBe(true)
  })

  it('读取组件资源', async () => {
    const result = await context.client.readResource({ uri: 'mineh5ui://components/button' })
    const first = result.contents[0]
    expect(first && 'text' in first ? first.text : '').toContain('MeButton')
    const doc = await context.client.readResource({ uri: 'mineh5ui://components/button/doc' })
    const docText = doc.contents[0]
    expect(docText && 'text' in docText ? docText.text : '').toContain('## API')
  })

  it('读取指南与图标资源', async () => {
    const guide = await context.client.readResource({ uri: 'mineh5ui://guides/install' })
    const guideText = guide.contents[0]
    expect(guideText && 'text' in guideText ? guideText.text : '').toContain('npm i mine-h5-ui')
    const icons = await context.client.readResource({ uri: 'mineh5ui://icons' })
    const iconText = icons.contents[0]
    expect(iconText && 'text' in iconText ? iconText.text : '').toContain('icon-close')
  })
})

describe('prompts', () => {
  it('提供页面生成与组件用法模板', async () => {
    const prompts = await context.client.listPrompts()
    expect(prompts.prompts.map(prompt => prompt.name).sort()).toEqual(['generate-page', 'use-component'])
  })

  it('展开页面生成模板', async () => {
    const result = await context.client.getPrompt({ name: 'generate-page', arguments: { requirement: '登录页' } })
    const first = result.messages[0]
    expect(first?.content.type).toBe('text')
    expect(first && first.content.type === 'text' ? first.content.text : '').toContain('search_components')
  })
})
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run tests/resources-prompts.spec.ts`

Expected: FAIL，资源和 Prompt 未注册。

- [ ] **Step 3: 实现 Resources**

`mcp/src/resources/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'

function text(uri: URL, value: string): { contents: { uri: string; text: string; mimeType: string }[] } {
  return { contents: [{ uri: uri.href, text: value, mimeType: 'application/json' }] }
}

export function registerResources(server: McpServer, repo: DataRepository): void {
  server.registerResource(
    'index',
    'mineh5ui://index',
    { title: 'mine-h5-ui 总览', description: '组件分类、指南目录、图标数量与组件库版本', mimeType: 'application/json' },
    async uri => {
      const components = repo.getIndex().filter(item => !item.parentId)
      return text(
        uri,
        JSON.stringify(
          {
            library: `mine-h5-ui@${repo.libraryVersion}`,
            manifest: repo.getManifest(),
            categories: [...new Set(components.map(item => item.category))],
            components: components.map(item => ({ name: item.name, tag: item.tag, title: item.title, category: item.category })),
            guides: repo.getGuidesIndex()
          },
          null,
          2
        )
      )
    }
  )

  server.registerResource(
    'component',
    new ResourceTemplate('mineh5ui://components/{id}', {
      list: async () => ({
        resources: repo
          .getIndex()
          .filter(item => !item.parentId)
          .map(item => ({ uri: `mineh5ui://components/${item.id}`, name: item.name, title: item.title, mimeType: 'application/json' }))
      })
    }),
    { title: '组件元数据', description: '单个组件的 API、示例与导入方式', mimeType: 'application/json' },
    async (uri, variables) => {
      const id = Array.isArray(variables.id) ? variables.id[0] : variables.id
      const scope = await repo.getComponentScope(id ?? '')
      if (!scope) throw new Error(`component not found: ${id}`)
      return text(
        uri,
        JSON.stringify(
          {
            library: `mine-h5-ui@${repo.libraryVersion}`,
            component: { ...scope.item, import: scope.meta.importCode, style: scope.meta.stylePath },
            parts: scope.meta.parts,
            examples: scope.meta.examples
          },
          null,
          2
        )
      )
    }
  )

  server.registerResource(
    'component-doc',
    new ResourceTemplate('mineh5ui://components/{id}/doc', { list: undefined }),
    { title: '组件文档', description: '组件原始 Markdown 文档', mimeType: 'text/markdown' },
    async (uri, variables) => {
      const id = Array.isArray(variables.id) ? variables.id[0] : variables.id
      const scope = await repo.getComponentScope(id ?? '')
      if (!scope) throw new Error(`component not found: ${id}`)
      return { contents: [{ uri: uri.href, text: scope.meta.markdown, mimeType: 'text/markdown' }] }
    }
  )

  server.registerResource(
    'guide',
    new ResourceTemplate('mineh5ui://guides/{topic}', {
      list: async () => ({
        resources: repo.getGuidesIndex().map(item => ({ uri: `mineh5ui://guides/${item.topic}`, name: item.topic, title: item.title, mimeType: 'text/markdown' }))
      })
    }),
    { title: '指南文档', description: '安装、主题、API、组合式 API 等指南', mimeType: 'text/markdown' },
    async (uri, variables) => {
      const topic = Array.isArray(variables.topic) ? variables.topic[0] : variables.topic
      const guide = await repo.getGuide(topic ?? '')
      if (!guide) throw new Error(`guide not found: ${topic}`)
      return { contents: [{ uri: uri.href, text: guide.markdown, mimeType: 'text/markdown' }] }
    }
  )

  server.registerResource(
    'icons',
    'mineh5ui://icons',
    { title: '图标清单', description: '全部内置图标名称、中文标签与 unicode', mimeType: 'application/json' },
    async uri => text(uri, JSON.stringify({ library: `mine-h5-ui@${repo.libraryVersion}`, total: repo.getIcons().length, icons: repo.getIcons() }, null, 2))
  )
}
```

- [ ] **Step 4: 实现 Prompts**

`mcp/src/prompts/index.ts`：

```ts
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

const PAGE_PROMPT = `你正在使用 mine-h5-ui（Vue 3 H5 组件库）编写页面。

必须按以下顺序使用工具：
1. 调用 search_components 选择组件，不要凭记忆猜测组件名。
2. 对每个要使用的组件调用 get_component_api，确认 Props、Events、Slots 与默认值。
3. 需要示例时调用 get_component_examples，优先复用官方写法。
4. 需要图标时调用 search_icons，只能使用返回的 name。
5. 首次生成页面时调用 get_guide('start') 确认引入方式。

输出要求：
- 输出单个可运行的 Vue 单文件组件，包含 <script setup lang="ts">、<template> 与 <style scoped>。
- 只能使用工具返回的 Props、事件、插槽与图标名，禁止编造。
- 给出版本对应的组件引入语句与样式引入语句。
- 不要省略任何必要的样式引入。

用户需求：`

const COMPONENT_PROMPT = `你要展示 mine-h5-ui 组件的最小可运行用法。

步骤：
1. 调用 get_component_api 获取组件 API。
2. 调用 get_component_examples 获取官方示例。
3. 基于真实 API 生成最小示例，并附上组件与样式引入语句。

组件：`

export function registerPrompts(server: McpServer): void {
  server.registerPrompt(
    'generate-page',
    {
      title: '生成 mine-h5-ui 页面',
      description: '按需求检索组件并生成可运行的 Vue 3 H5 页面',
      argsSchema: {
        requirement: z.string().describe('页面需求，例如 登录页、商品列表、个人中心'),
        style: z.string().optional().describe('可选的视觉风格或布局要求')
      }
    },
    ({ requirement, style }) => ({
      messages: [
        {
          role: 'user',
          content: { type: 'text', text: `${PAGE_PROMPT}${requirement}\n${style ? `视觉要求：${style}\n` : ''}` }
        }
      ]
    })
  )

  server.registerPrompt(
    'use-component',
    {
      title: '展示组件用法',
      description: '获取某个 mine-h5-ui 组件的真实 API 并生成最小用法',
      argsSchema: {
        component: z.string().describe('组件名，例如 MeButton'),
        requirement: z.string().optional().describe('可选的使用场景')
      }
    },
    ({ component, requirement }) => ({
      messages: [
        {
          role: 'user',
          content: { type: 'text', text: `${COMPONENT_PROMPT}${component}\n${requirement ? `使用场景：${requirement}\n` : ''}` }
        }
      ]
    })
  )
}
```

- [ ] **Step 5: 在 server 中注册**

`mcp/src/server.ts`：

```ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from './data/loader'
import { registerPrompts } from './prompts'
import { registerResources } from './resources'
import { registerTools } from './tools'
import { readPackageInfo } from './version'

export function createServer(repo: DataRepository): McpServer {
  const pkg = readPackageInfo()
  const server = new McpServer({ name: pkg.name, version: pkg.version })
  registerTools(server, repo)
  registerResources(server, repo)
  registerPrompts(server)
  return server
}
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run tests/resources-prompts.spec.ts && npm run typecheck`

Expected: PASS。若 `readResource` 返回字符串而非对象，按 SDK v1 实际返回结构调整取值，但断言内容不变。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/resources mcp/src/prompts mcp/src/server.ts mcp/tests/resources-prompts.spec.ts
git commit -m "feat(mcp): 注册资源模板与提示词"
```

---

### Task 13: stdio 入口、构建打包与仓库集成

**Files:**
- Create: `mcp/src/index.ts`
- Create: `mcp/tests/bin.spec.ts`
- Create: `mcp/README.md`
- Modify: `package.json`
- Create: `.mcp.json`
- Test: `mcp/tests/bin.spec.ts`

**Interfaces:**
- Consumes: `createServer`、`DataRepository`、`StdioServerTransport`。
- Produces: 可执行文件 `dist/index.js`，支持 `npx mine-h5-ui-mcp`。

- [ ] **Step 1: 实现 stdio 入口**

`mcp/src/index.ts`：

```ts
#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { DataRepository } from './data/loader'
import { createServer } from './server'
import { readPackageInfo } from './version'

async function main(): Promise<void> {
  const repo = await DataRepository.open()
  const server = createServer(repo)
  const transport = new StdioServerTransport()
  await server.connect(transport)
  const pkg = readPackageInfo()
  console.error(`[mine-h5-ui-mcp] v${pkg.version} (data: mine-h5-ui@${repo.libraryVersion})`)
}

main().catch(error => {
  console.error('[mine-h5-ui-mcp] fatal:', error)
  process.exit(1)
})
```

注意：`console.error` 是唯一允许的日志输出；禁止新增 `console.log`。

- [ ] **Step 2: 写失败的打包冒烟测试**

`mcp/tests/bin.spec.ts`：

```ts
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const distEntry = fileURLToPath(new URL('../dist/index.js', import.meta.url))

function runSession(messages: unknown[]): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [distEntry], { stdio: ['pipe', 'pipe', 'pipe'] })
    const output: any[] = []
    let buffer = ''
    const timer = setTimeout(() => {
      child.kill()
      reject(new Error('timeout'))
    }, 15000)

    child.stdout.on('data', chunk => {
      buffer += chunk.toString()
      let index = buffer.indexOf('\n')
      while (index >= 0) {
        const line = buffer.slice(0, index).trim()
        buffer = buffer.slice(index + 1)
        if (line) output.push(JSON.parse(line))
        index = buffer.indexOf('\n')
      }
    })

    child.on('error', reject)
    child.on('exit', code => {
      clearTimeout(timer)
      if (code !== 0 && code !== null) reject(new Error(`exit ${code}`))
      else resolve(output)
    })

    for (const message of messages) child.stdin.write(`${JSON.stringify(message)}\n`)
    setTimeout(() => child.stdin.end(), 500)
  })
}

describe('dist/index.js', () => {
  it('构建产物可通过 stdio 完成初始化并列出工具', async () => {
    expect(existsSync(distEntry)).toBe(true)
    const messages = [
      { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'smoke', version: '1.0.0' } } },
      { jsonrpc: '2.0', method: 'notifications/initialized' },
      { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }
    ]
    const output = await runSession(messages)
    const initialized = output.find(item => item.id === 1)
    expect(initialized?.result?.serverInfo?.name).toBe('mine-h5-ui-mcp')
    const tools = output.find(item => item.id === 2)
    expect(tools?.result?.tools?.map((tool: any) => tool.name).sort()).toEqual([
      'get_component_api',
      'get_component_doc',
      'get_component_examples',
      'get_guide',
      'list_components',
      'search_components',
      'search_icons'
    ])
  })
})
```

- [ ] **Step 3: 运行测试确认失败**

Run: `npm --prefix mcp run build && npx vitest run tests/bin.spec.ts`

Expected: 构建成功但测试 FAIL（入口尚未实现或未构建）。若构建因入口缺失失败，先完成 Step 1 再运行。

- [ ] **Step 4: 构建并验证产物**

Run:

```bash
cd mcp
npm run build
ls dist/index.js dist/generated/manifest.json
node dist/index.js </dev/null
```

Expected: `dist/index.js` 与 `dist/generated/manifest.json` 存在；进程启动后立即退出（stdin 关闭），stderr 打印版本行，stdout 无输出。

- [ ] **Step 5: 编写 README 与仓库集成**

`mcp/README.md`：

```markdown
# mine-h5-ui-mcp

mine-h5-ui 组件库的 MCP 服务，为 AI 编码助手提供组件 API、示例、文档、图标与指南查询。

## 使用

```bash
claude mcp add mine-h5-ui -- npx -y mine-h5-ui-mcp
```

通用配置：

```json
{
  "mcpServers": {
    "mine-h5-ui": {
      "command": "npx",
      "args": ["-y", "mine-h5-ui-mcp"]
    }
  }
}
```

## 工具

| 工具 | 说明 |
| ---- | ---- |
| list_components | 列出组件与指南目录 |
| search_components | 按关键字检索组件 |
| get_component_api | 获取 Props、Events、Slots、Methods、类型 |
| get_component_examples | 获取官方代码示例 |
| get_component_doc | 获取原始 Markdown 文档 |
| search_icons | 检索内置图标 |
| get_guide | 获取安装、主题、API 等指南 |

## 开发

```bash
npm install
npm run extract
npm run check
npm test
npm run build
```

数据由 `../packages` 与 `../examples/docs` 在构建期生成，不提交版本库。
```

根 `package.json` 的 `scripts` 增加：

```json
{
  "mcp:extract": "npm --prefix mcp run extract",
  "mcp:check": "npm --prefix mcp run check",
  "mcp:build": "npm --prefix mcp run build",
  "mcp:test": "npm --prefix mcp run test"
}
```

根 `.mcp.json`：

```json
{
  "mcpServers": {
    "mine-h5-ui": {
      "command": "node",
      "args": ["./mcp/dist/index.js"]
    }
  }
}
```

- [ ] **Step 6: 运行完整测试与打包检查**

Run:

```bash
npm --prefix mcp test
npm --prefix mcp run check
cd mcp && npm pack --dry-run
```

Expected: 全部测试 PASS；`npm pack --dry-run` 的包内容包含 `dist/index.js`、`dist/generated/`、`README.md`，不包含 `src/`、`tests/`、`node_modules/`。

- [ ] **Step 7: 提交**

```bash
git add mcp/src/index.ts mcp/tests/bin.spec.ts mcp/README.md package.json .mcp.json
git commit -m "feat(mcp): 提供 stdio 入口并完成仓库集成"
```

---

### Task 14: CI、最终校验与文档回写

**Files:**
- Create: `.github/workflows/mcp.yml`
- Modify: `mcp/方案.md`（仅当实现与方案存在有意差异时）
- Modify: `CLAUDE.md`（补充 mcp 相关命令）
- Test: 全量命令

**Interfaces:**
- Consumes: 前 13 个任务的全部产物。
- Produces: CI 工作流与最终验收结果。

- [ ] **Step 1: 添加 CI 工作流**

`.github/workflows/mcp.yml`：

```yaml
name: MCP Check

on:
  push:
    branches: [main]
  pull_request:
    paths:
      - 'mcp/**'
      - 'packages/**'
      - 'examples/docs/**'
      - 'examples/config/routes.json'
      - 'package.json'
      - '.github/workflows/mcp.yml'

jobs:
  mcp:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24.18.x'
      - run: npm --prefix mcp ci
      - run: npm --prefix mcp run check
      - run: npm --prefix mcp test
      - run: npm --prefix mcp run typecheck
```

- [ ] **Step 2: 回写 CLAUDE.md 常用命令**

在 `CLAUDE.md` 的“常用命令”代码块中追加：

```bash
npm run mcp:extract         # 重新提取 MCP 元数据快照
npm run mcp:check           # 校验 MCP 数据完整性与版本
npm run mcp:build           # 构建 mine-h5-ui-mcp 包
npm run mcp:test            # 运行 MCP 单元与契约测试
```

- [ ] **Step 3: 全量验证**

Run:

```bash
npm run mcp:check
npm run mcp:test
npm run mcp:build
npm run mcp:extract
git status --short
```

Expected:

- `mcp:check` 输出 `[check] ok`。
- `mcp:test` 全部 PASS，包含 `dist/index.js` 冒烟测试。
- `mcp:build` 生成 `dist/generated/`。
- `git status` 不显示 `mcp/src/generated/`、`mcp/dist/`、`mcp/node_modules/`。

- [ ] **Step 4: 真实客户端验证**

在 Claude Code 中执行：

```bash
claude mcp add mine-h5-ui -- node ./mcp/dist/index.js
```

随后依次验证：

1. “mine-h5-ui 有哪些表单组件？”应调用 `list_components` 或 `search_components`。
2. “MeButton 支持哪些 type？”应返回六种类型与默认值 `'default'`。
3. “找一个关闭图标”应返回 `icon-close` 一类的名称。
4. “用 mine-h5-ui 写一个登录页”应依次调用检索、API、示例与指南工具，输出代码中不出现编造的 Props。

- [ ] **Step 5: 文档回写检查**

对照 `mcp/方案.md` 检查实现差异，至少确认并记录：

- 构建工具由 `tsc` 调整为 `tsup`（为兼容无扩展名导入与打包）。
- `ComponentKind` 只保留 `component` 与 `api`；`utility` 文档通过 `get_guide` 暴露。
- `list_components` 额外返回 `guides` 目录。

若存在其他差异，更新 `mcp/方案.md` 对应章节，保持文档与实现一致。

- [ ] **Step 6: 提交**

```bash
git add .github/workflows/mcp.yml CLAUDE.md mcp/方案.md
git commit -m "chore(mcp): 接入 CI 并同步文档"
```

---

## 自检结果

**Spec 覆盖：**

- 方案 §5 元数据管线 → Task 3-6。
- 方案 §6.1 七个工具 → Task 8-11。
- 方案 §6.2 Resources → Task 12。
- 方案 §6.3 Prompts → Task 12。
- 方案 §7 搜索与名称解析 → Task 7。
- 方案 §8 工程结构 → Task 1、6、13。
- 方案 §9 构建与发布 → Task 1、13、14。
- 方案 §10 接入方式 → Task 13、14。
- 方案 §11 测试策略 → 每个任务的测试步骤 + Task 13 打包冒烟 + Task 14 全量验证。
- 方案 §12 风险 → Review Focus 与各任务断言覆盖。

**占位符扫描：** 无 TBD、TODO 或“稍后实现”。

**类型一致性：**

- `ComponentKind = 'component' | 'api'` 在类型、schema、工具参数三处一致。
- `ComponentScope` 在 loader 定义、API/示例/文档工具中使用一致。
- `ExtractResult` 在提取、写入、测试中使用一致。
- 错误码 `COMPONENT_NOT_FOUND`、`GUIDE_NOT_FOUND`、`SECTION_NOT_FOUND` 在工具与测试中一致。

**Review Focus 对应测试：**

- 复合组件归属 → `tests/docs.spec.ts`、`tests/tools-api.spec.ts`。
- 文档结构异常 → `tests/markdown.spec.ts`、`tests/docs.spec.ts`、`scripts/check-data.ts`。
- 名称解析歧义 → `tests/search.spec.ts`。
- stdout 污染 → `tests/bin.spec.ts`、Task 13 手工验证。
- 返回体积 → `tests/tools-content.spec.ts`、`tests/tools-icons-guide.spec.ts`。
- 版本漂移 → `scripts/check-data.ts`、Task 14 CI。
