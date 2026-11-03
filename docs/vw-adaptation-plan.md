# mine-h5-ui 移动端适配方案：由 rem 迁移到 vw

> 文档状态：已实施（2026-11-03，随 v2.19.0 发布）
> 编写日期：2026-11-03
> 影响范围：构建脚本、发布产物、使用文档
> 破坏性变更：移除 `dist/packages/rem/` 产物

---

## 1. 结论摘要

| 项目         | 决策                                                        |
| ------------ | ----------------------------------------------------------- |
| 适配单位     | **vw**                                                      |
| 转换插件     | `postcss-px-to-viewport-8-plugin`（替换 `postcss-pxtorem`） |
| 设计基准宽度 | **375px**                                                   |
| 新构建命令   | `npm run build:theme:vw`                                    |
| 新产物目录   | `dist/packages/vw/`                                         |
| rem 产物     | **已删除**（不保留兼容产物）                                |
| px 产物      | 保持不变（`dist/packages/styles/` 仍是默认产物）            |
| 构建环境     | 用 Vite `--mode vw` 替代仅 Windows 可用的 `set rem=1`       |
| 组件 API     | 不做变更                                                    |
| 运行时依赖   | 无（不需要 flexible.js 之类的脚本）                         |

---

## 2. 现状分析

### 2.1 现有构建链路

- `package.json:19` — `build` 依次执行 `build:docs` → `build:theme` → `build:theme:rem` → `build:package`
- `package.json:22` — `"build:theme:rem": "set rem=1 && vite build --config scripts/theme.vite.ts"`
- `scripts/theme.vite.ts:23-31` — 读取 `process.env.rem`，为真时把产物写到 `dist/packages/rem`，并注入 `postcss-pxtorem({ replace: true, propList: ['*'] })`
- `packages/styles/` — 全部组件样式，组件样式以 `.less` 编写，统一从 `packages/styles/index.less` 汇总

### 2.2 现有 rem 方案的问题（实测结论）

1. **换算基准是错误的默认值。**
   `postcss-pxtorem` 未配置 `rootValue`，使用默认值 `16`。实测产物：

   ```css
   /* dist/packages/styles/MeButton.css */
   height: 44px;

   /* dist/packages/rem/MeButton.css */
   height: 2.75rem; /* 44 / 16 */
   ```

   这意味着使用方必须自己提供 `html { font-size: 视口宽度 / 375 * 16 }` 的 flexible 脚本，才能得到 375 设计稿的等比效果。

2. **仓库没有提供配套的 flexible 运行时。**
   搜索 `examples/`、`mobile/`、`packages/` 均未发现设置根字号或引入 `lib-flexible` 的代码，`examples/docs/start.md:62-72` 也只是让用户改 import 路径，没有说明根字号规则。**当前 rem 产物在没有额外约定时基本不可用。**

3. **“伪无穷大”值被错误转换。**
   `packages/styles/common/vars.less:52` 的 `--me-border-radius-super: 999999px`，在 rem 产物中变成 `62499.9rem`；`MeSplitter.less:12-13` 的 `-99999px` 同理。这类值只是“足够大”的 hack，转换后语义变脏。

4. **构建脚本不可跨平台。**
   `set rem=1 &&` 是 Windows `cmd` 语法，在 macOS / Linux / CI 上会直接失败，和 `engines.node >= 24.3` 的跨平台定位不匹配。

5. **rem 方案本身依赖运行时与根字号。**
   在 SSR、微前端、多个子应用共存时，`html` 根字号容易被其他脚本覆盖；vw 是纯 CSS，无此问题。

### 2.3 源码现状统计

| 项目                           | 实测结果                                                             |
| ------------------------------ | -------------------------------------------------------------------- |
| `packages/styles` 中的 px 数量 | 约 **457 处**                                                        |
| 设计基准                       | **375px**（按钮高 44px、正文 14px、左右 padding 15px、图标 40px 等） |
| `@media` 查询                  | **0 处**，暂不存在媒体查询内的 px 转换问题                           |
| 非 px 单位                     | `%`、`em`、`vw`、`vh` 少量，PostCSS 不会处理                         |
| `.vue` / `.ts` 内联 px         | 字面量 **45 处**，模板拼接 `${...}px` **67 处**（详见 5.4.4）        |
| 特殊值                         | `999999px`（胶囊圆角）、`-99999px`（离屏定位）                       |

---

## 3. 目标与非目标

### 3.1 目标

1. 输出一份**纯 CSS、无运行时**的 vw 产物，使用方一行 import 即可按 375 设计稿等比缩放。
2. 保留现有 px 产物，桌面端文档站、非移动端场景不受影响。
3. 构建命令跨平台，Windows / macOS / Linux 行为一致。
4. 产物结构、使用方式与现有 `rem/` 保持同类，迁移成本最低。
5. 明确并记录源码中无法被 PostCSS 覆盖的边界（内联 px、CSS 变量覆盖等）。

### 3.2 非目标（本期不做）

1. 不内置“桌面端最大宽度限制”（见 8.1，留作可选升级路径）。
2. 不改造 `.vue` 内联的设计尺寸（见 5.4.4，列为 Phase 2）。
3. 不改变任何组件的 Props / Emits / 默认值。
4. 不做 CSS 容器查询（`cqw`）等实验性方案。
5. 不调整设计稿本身，所有实现仍以 375 为基准。

---

## 4. 方案选型

### 4.1 候选方案

| 方案                                                             | 做法                                                 | 运行时       | 大屏限制     | 优点                                         | 缺点                                                                                              |
| ---------------------------------------------------------------- | ---------------------------------------------------- | ------------ | ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **A. vw + `postcss-px-to-viewport-8-plugin`（推荐）**            | 375 基准，`px → vw`                                  | 无           | 不内置       | 纯 CSS、产物简单、接入零配置、社区认知度最高 | 插件 2024-03 后无更新；大屏会等比放大                                                             |
| B. vw + `postcss-mobile-forever`                                 | 支持 `maxDisplayWidth` / `minDisplayWidth` / mq-mode | 无           | 内置         | 功能最全、2025-03 仍在维护                   | 需要指定 `appSelector`，会把根容器规则注入到**每个组件的 CSS** 中，不适合“按组件分发 CSS”的组件库 |
| C. 保留 rem，补一行 `html { font-size: calc(100vw / 375 * 16) }` | 修 `rootValue` 或补根字号                            | 无           | 不内置       | 改动最小                                     | 仍是 rem，需约定根字号；与“过时”的诉求不符                                                        |
| D. 只发 px，使用方自行转换                                       | 文档给出 postcss 配置                                | 取决于使用方 | 取决于使用方 | 维护成本最低                                 | 直接引 CSS 的使用方无法适配，已确认不采用                                                         |

### 4.2 推荐

**方案 A**：`postcss-px-to-viewport-8-plugin`。

理由：

1. 组件库按组件输出独立 CSS，方案 B 的 `appSelector` 会污染每个产物文件，且要求使用方根节点选择器固定，不适合本库。
2. 本库面向移动端 H5，vw 的“按视口等比缩放”正是期望行为；大屏限制属于使用方业务问题，不应由组件库强加。
3. 方案 A 与当前 `postcss-pxtorem` 的结构完全对称，改造量最小，回滚最容易。
4. `postcss-px-to-viewport-8-plugin` 是原 `postcss-px-to-viewport` 的 PostCSS 8 兼容分支，内置 TypeScript 类型（`lib/index.d.ts`），无需额外 `@types` 包。

> 说明：如果后续确实需要“最大宽度 + 居中”，再评估切换到方案 B，或在业务侧用媒体查询处理，不影响本次产物结构。

---

## 5. 详细设计

### 5.1 产物结构

```text
dist/packages/
├── es/          # npm 包（ES module），不变
├── styles/      # px 产物，不变（默认）
└── vw/          # 新增：vw 产物
    ├── index.css
    ├── MeButton.css
    ├── MeCalendar.css
    └── ...
```

> `rem/` 目录删除。注意：Vite 只清空自身 `outDir`，本地旧的 `dist/packages/rem/` 不会被自动删除，发布前需手动清理一次（见 9.5）。

### 5.2 构建命令改造

**`package.json`**

```diff
- "build": "npm run build:docs && npm run build:theme && npm run build:theme:rem && npm run build:package",
+ "build": "npm run build:docs && npm run build:theme && npm run build:theme:vw && npm run build:package",

  "build:theme": "vite build --config scripts/theme.vite.ts",
- "build:theme:rem": "set rem=1 && vite build --config scripts/theme.vite.ts",
+ "build:theme:vw": "vite build --config scripts/theme.vite.ts --mode vw",
```

要点：

- 用 Vite 原生 `--mode vw` 传递构建模式，去掉 `process.env.rem` 与 Windows 专用 `set`，三端一致。
- `--mode` 不会改变 `build` 的生产属性，仅影响 `defineConfig` 工厂函数收到的 `mode` 值。
- 保留 `build:theme` 作为默认 px 产物入口，原有命令语义不变。

### 5.3 `scripts/theme.vite.ts` 改造

```ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import pxToViewport from 'postcss-px-to-viewport-8-plugin'
import autoprefixer from 'autoprefixer'
import type { AcceptedPlugin } from 'postcss'

/**
 * 入口文件
 */
const input = resolve(import.meta.dirname, '../packages/styles')

const ignoreDirs = ['fonts', 'common']
const entry = readdirSync(input)
  .filter(name => !ignoreDirs.includes(name))
  .map(name => resolve(input, name))

/**
 * 配置信息
 */
export default defineConfig(({ mode }) => {
  /**
   * 是否为 vw 产物
   */
  const isVw = mode === 'vw'

  /**
   * 输出文件
   */
  let outDir = resolve(import.meta.dirname, '../dist/packages/styles')

  const cssPlugins: AcceptedPlugin[] = []

  if (isVw) {
    outDir = resolve(import.meta.dirname, '../dist/packages/vw')
    cssPlugins.push(
      pxToViewport({
        // 设计稿宽度
        viewportWidth: 375,
        // 保留 5 位小数
        unitPrecision: 5,
        // 所有属性都转换
        propList: ['*'],
        // 转换后的单位
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        // 1px 及以下不转换，保证 1px 边框清晰
        minPixelValue: 1,
        // 媒体查询内的 px 不转换
        mediaQuery: false,
        // 直接替换，不保留 px 回退
        replace: true
      })
    )
  }

  return {
    publicDir: false,
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['last 2 versions']
          }),
          ...cssPlugins
        ]
      }
    },
    build: {
      outDir,
      lib: { entry },
      cssCodeSplit: true
    }
  }
})
```

> `postcss-px-to-viewport-8-plugin` 自带 `lib/index.d.ts`，`tsconfig.json` 已开启 `esModuleInterop`，默认导入可直接使用。

### 5.4 配置项说明与源码边界

#### 5.4.1 关键配置项

| 配置项             | 值      | 理由                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------ |
| `viewportWidth`    | `375`   | 源码实际设计基准                                                               |
| `unitPrecision`    | `5`     | 与 rem 产物精度一致，避免累计误差                                              |
| `propList`         | `['*']` | 与现有 `postcss-pxtorem` 的 `['*']` 对齐                                       |
| `viewportUnit`     | `'vw'`  | 目标单位                                                                       |
| `fontViewportUnit` | `'vw'`  | 字号也随视口缩放                                                               |
| `minPixelValue`    | `1`     | **1px 及以下保持 px**，避免细线在窄屏消失、宽屏变粗                            |
| `mediaQuery`       | `true`  | 必须开启：该插件在 `false` 时会连带跳过 `@keyframes`，导致动画位移不随视口缩放 |
| `replace`          | `true`  | 不输出 px 回退，产物更小                                                       |

换算公式：`vw = px ÷ 375 × 100`。常用值：

| 设计值 | vw 值      |
| ------ | ---------- |
| 12px   | 3.2vw      |
| 14px   | 3.73333vw  |
| 15px   | 4vw        |
| 16px   | 4.26667vw  |
| 20px   | 5.33333vw  |
| 24px   | 6.4vw      |
| 30px   | 8vw        |
| 40px   | 10.66667vw |
| 44px   | 11.73333vw |

#### 5.4.2 1px 边框策略

`minPixelValue: 1` 表示 **≤ 1px 的数值不转换**。本库样式中共有 **46 处 `1px`**（多为 `1px solid` 边框），会全部保持物理 1px。这是刻意选择：

- 1px 转为 `0.26667vw` 后，在 320px 宽设备上只有 0.85px，部分安卓 WebView 会渲染成 0 或闪烁；
- 保持 1px 在 DPR ≥ 2 的移动设备上观感更稳定。

如果未来希望边框也等比缩放，把 `minPixelValue` 改为 `0` 即可，但需要重新做视觉回归。

#### 5.4.3 特殊值处理（必须改，否则产物会出现脏值）

| 位置                                    | 现值                                 | 建议改为   | 说明                              |
| --------------------------------------- | ------------------------------------ | ---------- | --------------------------------- |
| `packages/styles/common/vars.less:52`   | `--me-border-radius-super: 999999px` | `100vmax`  | 胶囊圆角，`vmax` 足够大且语义清晰 |
| `packages/styles/MeSplitter.less:12-13` | `top: -99999px; left: -99999px`      | `-100vmax` | 离屏定位，`vmax` 必然移出视口     |

这两处改为非 px 单位后，**px 产物与 vw 产物都受益**，也不再需要 `px-to-viewport-ignore` 注释。

#### 5.4.4 内联 px（PostCSS 覆盖不到的部分）

`packages/styles` 之外，组件运行时还会写内联样式，共约 **112 处**（45 处字面量 + 67 处模板拼接）。必须分类对待：

**A. 运行时测量值 —— 必须保持 px，禁止转换**

例如：

- `MeDrag/index.vue` 的 `top/left/width/height`（来自指针坐标）
- `MeColorPicker/dropdown.vue` 的 `dropdownRect.width/height`、`arrowX/arrowY`
- `MeCaptcha/index.vue` 的 `imgRect.w/h/y`、`moveX`
- `MeAddressPicker/index.vue`、`MeDatetimePicker/index.vue` 的 `translateY(${distance}px)`
- `MeCollapseItem/index.vue` 的 `height:${curHeight}px`
- `MeNoticeBar/index.vue` 的滚动偏移 `left:${left}px`

这些值是 `getBoundingClientRect()` / 指针事件产生的**物理 CSS 像素**，与设计稿 px 不是同一概念，绝对不能被 vw 化。

**B. 设计尺寸字面量 —— 本期保持 px，列为 Phase 2**

例如：

- `MeButton/index.vue:43` `size="16px"`
- `MeCalendar/index.vue:30-43` `size="14px" / "18px"`
- `MeCell/index.vue:34` `size="20px"`
- `MeCheckbox/index.vue:20` `iconSize: '20px'`
- `MeSearch/index.vue:16,34,49` `radius: '4px'`、`size="15px" / "16px"`
- `MeCoupon/index.vue:15,17`、`MeSkeleton/index.vue:19`、`MeSpace/index.vue:11`
- `MeDivider`、`MeDrag`、`MeMspaint`、`MeProgressBar`、`MeImg`、`MeLoading`、`MePopup` 等的默认尺寸 Props

**影响**：这些内联尺寸不会随 vw 缩放。以 414px 宽设备为例，整体放大 1.104 倍，而 `16px` 图标仍是 16px，相对会略小。

**本期处理策略（推荐）**：

1. 接受该差异，并在文档中说明“vw 产物只转换样式表，动态内联尺寸保持 px”。
2. 对于用户可通过 Props 传入尺寸的组件（`MeImg`、`MeDivider`、`MeDrag`、`MeProgressBar` 等），文档建议用户传 vw 值（如 `width="26.67vw"`）。
3. 不在本次做组件内部改写，避免影响 API 与单元测试。

**Phase 2（可选，另立任务）**：

- 将“设计尺寸类”内联值改为 `em` 或 CSS 变量驱动，例如图标默认 `1em`，由父级字号继承缩放；
- 或者提供统一的 `usePx` 工具，根据当前视口把设计 px 转为物理 px——但这会引入运行时，与“纯 CSS”目标冲突，优先级低。

#### 5.4.5 CSS 变量覆盖

`packages/styles/common/vars.less` 中的 `--me-*` 变量会被转换，例如：

```css
:root {
  --me-h-btn: 11.73333vw;
  --me-text-md: 3.73333vw;
}
```

使用方若用 px 覆盖这些变量（如 `--me-h-btn: 44px`），该元素将不再随视口缩放。文档中需注明：**vw 模式下覆盖变量请使用 vw 或 `calc()`**。

#### 5.4.6 媒体查询

当前组件样式 **没有 `@media`**。保持 `mediaQuery: false`，未来新增媒体查询时断点不会被误转为 vw。若未来需要响应式断点内部也缩放，再单独开启并做回归。

### 5.5 文档变更

| 文件                           | 变更                                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `examples/docs/start.md:62-72` | “Rem 适配”改为“VW 适配”，import 路径改为 `mine-h5-ui/vw/index.css`、`mine-h5-ui/vw/MeButton.css`；删除 rem 说明 |
| `README.md:168`                | 删除 `@types/postcss-pxtorem` 条目                                                                              |
| `README.md:184`                | `postcss-pxtorem` 条目替换为 `postcss-px-to-viewport-8-plugin`                                                  |
| `CLAUDE.md:9`                  | “rem 主题”改为“vw 主题”                                                                                         |
| `CLAUDE.md:78`                 | “Rem 主题（`npm run build:theme:rem`）… `postcss-pxtorem`”改为 vw 描述                                          |
| `RELEASE.md`                   | 打包说明无需改（仍执行 `npm run build`），可补充发布前清理 `dist/packages/rem`                                  |

### 5.6 依赖变更

```bash
# 新增
npm i -D postcss-px-to-viewport-8-plugin

# 移除
npm uninstall postcss-pxtorem @types/postcss-pxtorem
```

- 新插件自带类型（`lib/index.d.ts`），不需要 `@types` 包。
- `postcss` 作为 Vite 的传递依赖已存在，无需显式安装。

### 5.7 版本与发布策略

移除 `rem/` 产物属于**破坏性变更**：使用 `import 'mine-h5-ui/rem/index.css'` 的项目升级后会直接报模块不存在。

已确认随 **`2.19.0`** 发布，并在 Release Notes 与更新日志中提供迁移说明（见第 6 节）。由于未发布为 3.0.0，需要在 Release Notes 中显著标注该破坏性变更。

发布前必须：

1. 手动删除本地 `dist/packages/rem/`，确认不会再被发布。
2. 确认 `dist/packages/vw/` 已生成且被 `npm pack` 包含（当前无 `files` 字段，`dist/packages` 整体发布，无需额外配置）。

---

## 6. 使用方迁移指南（文档内容草案）

### 6.1 新接入（vw）

```js
// 所有组件样式
import 'mine-h5-ui/vw/index.css'

// 单个组件样式
import 'mine-h5-ui/vw/MeButton.css'
```

无需引入 `flexible.js`，也无需设置 `html { font-size }`。

### 6.2 从 rem 迁移

```diff
- import 'mine-h5-ui/rem/index.css'
+ import 'mine-h5-ui/vw/index.css'
```

同时：

1. 删除项目中为 rem 方案引入的 flexible / 根字号脚本；
2. 检查是否用 px 覆盖过 `--me-*` 变量，改为 vw 或 `calc()`；
3. 检查是否向 `MeImg`、`MeDivider`、`MeDrag` 等组件传过 px 尺寸，按需改为 vw。

### 6.3 viewport meta

移动端页面保持标准写法即可：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
```

---

## 7. 验证计划

### 7.1 构建验证

```bash
npm run build:theme      # px 产物
npm run build:theme:vw   # vw 产物

# vw 产物中应只剩 1px（以及 0 值），不应出现其他 px
grep -roE '[0-9.]+px' dist/packages/vw | sort | uniq -c

# 不应再出现 rem 单位
grep -roE '[0-9.]+rem' dist/packages/vw | head

# 抽样：变量应已转为 vw（44 / 375 * 100 = 11.73333）
grep -o -- '--me-h-btn:[^;]*' dist/packages/vw/index.css | head

# 全量构建
npm run build
```

预期：

- `grep px` 仅命中 `1px`、`0px`、`1px` 以下的值，以及由 1px 参与 `calc()` 后由压缩器派生的 `2px`；
- `grep rem` 无输出；
- `--me-h-btn` 约为 `11.7333vw`（压缩器会省略末尾精度）。

### 7.2 视觉回归

用 `dist/packages/vw/index.css` 搭一个最小页面，在 Chrome DevTools 设备模式下检查：

| 宽度  | 检查点                                 |
| ----- | -------------------------------------- |
| 320px | 按钮、输入框、弹窗不溢出；1px 边框可见 |
| 375px | 与设计稿 1:1（44px 按钮、14px 正文）   |
| 414px | 整体等比放大，比例协调                 |
| 768px | 记录放大效果，确认是否接受（见 8.1）   |

重点组件：`MeButton`、`MeInput`、`MePopup`、`MeCell`、`MeTabBar`、`MeCalendar`、`MeDrag`、`MeCaptcha`。

### 7.3 回归测试

```bash
npm run test:unit    # 组件逻辑与样式无关，预期不受影响
npm run build:docs   # 文档站走 vite.config.ts，不加载 vw 插件，预期不受影响
npm run lint
```

> 说明：`vite.config.ts` 的 `css.postcss` 未配置 vw 插件，因此 `npm start` / 文档站仍然展示 px 效果；这正好可以用于对比验证。

### 7.4 可选：CI 守卫

在 CI 或 `pre-push` 增加一条断言，防止未来有人把大值 px 写回：

```bash
# 除 1px 外，vw 产物不应出现 px
! grep -roE '[0-9.]+px' dist/packages/vw | grep -vE '(^|:)1px$'
```

---

## 8. 风险与应对

### 8.1 大屏 / 平板等比放大

**现象**：vw 以视口宽度为基准，768px 宽时所有尺寸是 375 基准的 2.05 倍。

**应对**：

- 本库定位 H5 移动端，默认接受该行为；
- 如业务需要限制最大宽度，推荐在业务侧处理，或后续切换到 `postcss-mobile-forever` 的 max-vw / mq-mode；
- 不在本次产物中内置 `appSelector` 相关规则，避免污染每个组件的 CSS。

### 8.2 内联设计尺寸不缩放

见 5.4.4。本期接受，文档说明；Phase 2 再评估 `em` 化。

### 8.3 1px 边框不缩放

刻意行为，见 5.4.2。若产品要求边框也等比，改 `minPixelValue: 0` 并做完整回归。

### 8.4 使用方覆盖 CSS 变量

用 px 覆盖 `--me-*` 会导致局部不缩放。通过文档提示使用 vw / `calc()` 缓解。

### 8.5 插件维护状态

`postcss-px-to-viewport-8-plugin` 最近发布于 2024-03，功能稳定但更新不活跃。风险可控：

- 插件逻辑简单，纯 PostCSS AST 转换；
- 若未来停更，可平滑迁移到 `postcss-mobile-forever`，产物结构不变（仍是 `vw/`）。

### 8.6 移除 rem 的升级破坏

通过 3.0.0 + 迁移指南 + Release Notes 明确告知；不使用静默删除。

---

## 9. 实施清单

### Phase 1：构建链路（约 0.5 天）

1. 安装 `postcss-px-to-viewport-8-plugin`，移除 `postcss-pxtorem`、`@types/postcss-pxtorem`。
2. 改造 `scripts/theme.vite.ts`（见 5.3）。
3. 修改 `package.json` 的 `build` 与 `build:theme:vw`（见 5.2）。
4. 执行 `npm run build:theme:vw`，确认 `dist/packages/vw/` 生成。

### Phase 2：源码特殊值（约 0.5 天）

5. `common/vars.less:52` → `100vmax`。
6. `MeSplitter.less:12-13` → `-100vmax`。
7. 重新构建 px 与 vw 两套产物，确认 px 产物无异常。

### Phase 3：文档与类型（约 0.5 天）

8. 更新 `examples/docs/start.md` 的适配章节。
9. 更新 `README.md` 依赖说明、`CLAUDE.md` 构建说明。
10. 在 `RELEASE.md` 或 Release Notes 中加入迁移指南。

### Phase 4：验证（约 0.5 天）

11. 执行 7.1 的 grep 断言。
12. 执行 7.2 的 320 / 375 / 414 视觉检查。
13. 执行 `npm run test:unit`、`npm run build:docs`、`npm run lint`。

### Phase 5：发布（按发布窗口）

14. 删除本地 `dist/packages/rem/`。
15. 版本号提升到 3.0.0（或按 5.7 的备选方案）。
16. `npm run build` → `npm run pre-publish` → 发布 npm。
17. 发布 Release Notes 与迁移说明。

---

## 10. 回滚方案

若 vw 产物出现无法快速修复的问题：

1. 恢复 `scripts/theme.vite.ts` 中 rem 分支与 `postcss-pxtorem` 配置；
2. 恢复 `package.json` 的 `build:theme:rem`；
3. px 产物始终未改动，可随时退回 `mine-h5-ui/styles/index.css`。

> 由于本次是“替换”而非“并存”，回滚需要发布一个修复版本；发布前需完成充分验证。

### 10.1 实施记录（2026-11-03）

- 依赖：移除 `postcss-pxtorem`、`@types/postcss-pxtorem`，新增 `postcss-px-to-viewport-8-plugin`
- 构建：`scripts/theme.vite.ts` 改为由 `--mode vw` 驱动的工厂配置，vw 产物输出到 `dist/packages/vw`
- 源码：`--me-border-radius-super` 改为 `100vmax`，`MeSplitter` 离屏定位改为 `-100vmax`
- 文档：更新 `examples/docs/start.md`、`README.md`、`CLAUDE.md`、`examples/docs/logs.md`、`log.md`、`RELEASE.md`
- 版本：`2.19.0`
- **实施中的修正**：原方案配置 `mediaQuery: false`，实测该插件的 `validateParams` 会连带跳过 `@keyframes` 内的所有 px，导致动画位移不缩放；已改为 `mediaQuery: true`。

---

## 11. 已确认事项

1. **版本号**：`2.19.0`，不发布 3.0.0。
2. **大屏策略**：接受 vw 等比放大，不引入 max-width。
3. **内联设计尺寸**：本期保持 px，列为后续 Phase 2。
4. **1px 边框**：保持固定 1px。
5. **设计基准**：按 375px 实施。

---

## 附录 A：关键文件索引

| 文件                               | 作用               |
| ---------------------------------- | ------------------ |
| `package.json:19,22`               | 构建脚本入口       |
| `scripts/theme.vite.ts`            | 主题 CSS 构建配置  |
| `packages/styles/index.less`       | 全量样式入口       |
| `packages/styles/common/vars.less` | CSS 变量与特殊值   |
| `examples/docs/start.md:62-72`     | 使用文档的适配章节 |
| `README.md:168,184`                | 依赖说明           |
| `CLAUDE.md:9,78`                   | 项目构建说明       |

## 附录 B：换算公式

```text
vw = px ÷ 375 × 100

示例：
44px → 44 ÷ 375 × 100 = 11.73333vw
14px → 14 ÷ 375 × 100 = 3.73333vw
```
