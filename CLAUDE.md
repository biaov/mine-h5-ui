# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
npm start                   # 启动开发服务器 (Vite dev)
npm run build               # 完整构建: 文档站点 + 主题CSS + rem主题 + npm包
npm run build:docs          # 仅构建文档站点
npm run build:package       # 仅构建 npm 包 (ES module)
npm run lint                # ESLint 检查并自动修复
npm run prettier            # Prettier 格式化
npm run test:unit           # 运行所有 Vitest 单元测试
npm run test:unit:single    # 运行单个单元测试 (需先修改 package.json 中的文件路径)
npm run test:ui             # 运行 Selenium Web UI 自动化测试
npm run preview             # 预览构建后的文档站点
npm run pre-publish         # 发布前处理 (精简 package.json，复制 README/LICENSE 到 dist)
npm run tag                 # 打版本标签
```

**运行单个单元测试**：修改 `package.json` 中 `test:unit:single` 命令的目标文件路径，然后执行 `npm run test:unit:single`。

## 项目架构

这是一个基于 **Vue 3 + TypeScript + Vite** 的 H5 移动端 UI 组件库，包含 60+ 个组件。

### 三大部分

| 目录 | 别名 | 说明 |
|------|------|------|
| `packages/` | `~/` | 组件库源码，每个组件一个目录 |
| `examples/` | `@/` | 桌面端文档站点 (Vite 多页面应用) |
| `mobile/` | `^/` | 移动端文档预览站点 |

`dist/packages/` 构建产物使用别名 `#/`。

### 组件结构模式

每个组件目录遵循统一结构（以 `MeButton` 为例）：

```
MeButton/
├── index.ts       # 入口：import 组件 .vue + addInstall(app) 注册
├── hooks.ts       # 组合式逻辑 (事件处理、状态管理等)
├── types.ts       # Props / Emits / 枚举类型定义
├── index.vue      # 组件模板
└── (index.less)   # 组件样式，位于 packages/styles/MeButton.less
```

- **`addInstall(component)`** (`packages/utils/index.ts`) — 给组件附加 `install(app)` 方法，使其可通过 `app.use()` 全局注册
- **`addInstallAPI(component)`** — 给 composable/API 附加 install 方法，挂载到 `app.config.globalProperties.$componentName`

### 组件注册与导出

- `packages/components.ts` — 所有组件的统一导出 + API 导出，按分类组织（基础/表单/反馈/导航/展示/业务）
- `packages/defaults.ts` — `install()` 函数遍历所有组件并注册到 Vue app
- `packages/index.ts` — 库入口：`export * from './components'` + `export default { install }`

### 组合式 API (Composables)

`packages/MeComposable/` 包含可复用的组合式函数：
`useBind`, `useColorTransform`, `useCssVar`, `useFormState`, `useId`, `useImgInfo`, `useLocked`, `useMoveHandle`, `useSameTarget`, `useScroll`, `useStorage`, `useUtils`, `useValidator`, `useVisible`

### 文档站点路由

文档页面通过 Markdown 自动生成路由：
- `examples/config/routes.json` 定义导航结构
- `examples/config/nav.config.ts` 解析 JSON 为路由配置
- `examples/router/docs.ts` 动态 import `examples/docs/*.md` 文件，使用 `unplugin-vue-markdown` 将 Markdown 转为 Vue 组件
- `shiki` 提供代码高亮，`markdown-it-container` 处理自定义容器（`TimeLine`, `CopyCode`）

### 构建产物

1. **npm 包** (`scripts/package.vite.ts`) — Vite library mode，ES 格式，preserveModules，输出到 `dist/packages/es/`
2. **主题 CSS** (`scripts/theme.vite.ts`) — 每个组件独立 CSS 文件，输出到 `dist/packages/styles/`
3. **Rem 主题** (`npm run build:theme:rem`) — 同上但通过 `postcss-pxtorem` 转换为 rem 单位
4. **文档站点** (`vite build`) — 多页面构建 (index.html + mobile.html)，输出到 `dist/docs/`

### 样式系统

- `packages/styles/` — 每个组件的 Less 样式文件，`common/` 目录放公共变量/mixins
- 所有 Less 文件通过 `additionalData` 自动注入 `@/styles/vars.less`
- TailwindCSS 4 用于文档站点样式 (`@tailwindcss/vite`)

### 测试

- **单元测试**: `tests/unit/*.spec.ts`，使用 Vitest + jsdom + @vue/test-utils
- **UI 测试**: `tests/ui/`，使用 Selenium WebDriver 对文档站点做自动化测试
- pre-push hook 自动运行单元测试

### 代码规范

- ESLint 9 flat config (`eslint.config.js`)，集成 `typescript-eslint` + `eslint-plugin-vue` + `eslint-config-prettier`
- Prettier: 单引号、无分号、尾逗号 none、200 字符宽度
- Git: pre-push 运行测试，prepare-commit-msg 自动添加 `Co-authored-by: biaov`
