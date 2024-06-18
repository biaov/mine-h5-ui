# 更新日志

---

## 介绍

`mine-h5-ui` 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

### 发布节奏

- 修订号：不定期发布，包含新特性和问题修复。
- 次版本号：不定期发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新，预计作者技术发生重大提升或重构时发布。

:::TimeLine

## v2.9.3 - 最新版本

`2024-06-18`

- ⚙️ `auto-cli.jsonc` 更换为 `auto-cli.yml`
- ⚙️ 更新 `.vscode/extensions.json` 的新增插件
- ⚙️ 更新依赖版本
- ⚙️ 组件里的 `v-model` 语法改为 `defineModel`
- 🐞 修复 `MeDatetimePicker` 组件不显示问题

## v2.9.2

`2024-05-17`

- 🔥 新增
  - 新增 `auto-cli.jsonc` 用于更新依赖版本
  - 新增 `tailwindcss` 用于生成 CSS 样式内容
- ⚙️ 更新
  - 优化文档链接方式
  - 移除 `.ncurc.json`
  - `examples` 和 `mobile` 文件夹样式改成 tailwindcss
  - 更新依赖版本
  - 代码主题由 `dark-plus` 改为 `github-light`
- 🐞 修复已知 BUG

## v2.9.0

`2024-04-19`

- 🔥 新增
  - 新增 [贝塞尔曲线](/v2/doc/besselCurve) 组件
  - 新增依赖 `` 用于原子化 CSS 和重置样式
  - 新增依赖 `jsdom` 用于单元测试模拟浏览器环境
- ⚙️ 更新
  - Node 版本更新至 `>=20.12`
  - 相对目录 `__dirname` 改为 `import.meta.dirname`
  - `gulp@4.x` 更新至 `gulp@5.x`
  - 插槽 `#default` 简化为 `#`
  - `.eslintrc.cjs` 改为 `config/eslint.config.ts` 以便于更友好的支持 TS
  - 更新依赖版本
  - 优化打包路径，移除 `scripts/path` 文件
  - 删除 `gulp` 打包 `css`, 改为 `vite` 打包，简化自动化工作流
  - `cross-env` 改为 `set`
  - 移除 `rollup-plugin-license`, `gulp`, `gulp-autoprefixer`, `gulp-clean`, `gulp-cssmin`, `gulp-less`, `gulp-postcss` 依赖
  - 优化使用文档
- 🐞 修复已知 BUG

## v2.8.2

`2024-03-12`

- ⚙️ 更新依赖版本
- 🔥 增加安装依赖时 Node 版本校验
- 🔥 增加 logo 动画
- 🔥 增加 npm provenance
- 🔥 增加 github actions publish.yml
- 🔥 增加 `@rollup/rollup-linux-x64-gnu` 依赖用于支持 linux 环境

## v2.8.1

`2024-03-05`

- 🔥 新增组件
  - [新增引导组件](/v2/doc/guide)
  - [新增悬浮按钮组件](/v2/doc/floatButton)
  - [新增骨架屏组件](/v2/doc/skeleton)
- 新增组合式 API
  - [新增 useScroll](/v2/doc/composable)
- 🔥 新增开发指南(/v2/doc/develop)
- ⚙️ 更新
  - 手风琴组件 MeAccordionItem 增加 `slot=label` 插槽
  - 更新组件的使用文档
  - 优化项目在使用组件或组合式 API 时由 getCurrentInstance 中获取改为直接从组件库获取的体验
  - 更新项目依赖版本
  - 组合式 API `useVisible` 增加初始化参数
  - 简化文档里的按需引入方式
  - 优化单元测试获取节点
  - 更新依赖 `vue-tsc` 由 `1.x` 升级为 `2.x`
- 🐞 修复已知 BUG
  - 修复 MeLoading 组件设置大小不生效问题
  - 修复移动端点击出现蓝色背景问题

## v2.7.3

`2024-02-20`

- 🔥 新增
  - 新增组合式 API `useStorage` 用于操作 `localStorage` 和 `sessionStorage`
- ⚙️ 更新
  - 更新依赖
    - 更新 `@typescript-eslint/eslint-plugin` 至 `v7.x`
    - 更新 `@typescript-eslint/parser` 至 `v7.x`
    - 更新 `gulp-postcss` 至 `v10.x`
    - 更新 `shiki` 至 `v10.x`
  - 完善文档
  - 🐞 修复已知 BUG

## v2.7.2

`2023-11-20`

- 优化
  - 调整 Markdown 文件 a 标签的样式右 `primary` 主题色改为 `success` 主题色
  - 调整项目支持 ESM 配置 `{ "type": "module" }`
- 更新
  - 更新依赖版本
    - 更新 `vite@5.x`
  - 更新 NodeJs Engines 版本至 `v20.x`

## v2.7.1

`2023-10-20`

- Markdown 主题更改
  - 主题由 `highlight.js` 改为 `shiki`，更好的样式支持
  - 插件 `vite-plugin-vue-markdown` 更新为 `unplugin-vue-markdown`
- 优化代码
  - 调整组合式 API useVisible 的返回值，由 `{ visible, setVisible }` 改为 `[visible, setVisible]`，以便于自定义命名
  - 优化项目代码注释
  - 新增 .vscode 推荐扩展，以便于更好的开发
  - 简化 docs 文档标签
- Bug Fixes
  - 处理已知 BUG
  - 更新依赖版本

## v2.7.0

`2023-10-07`

- 更新展示组件
  - [新增错误组件](/v2/doc/error)
- 优化代码
  - 移除 ts lint 检查，改为 eslint 检查
  - 移动端文档主页优化显示改为手风琴显示
  - 优化组件文档
- Bug Fixes
  - 处理按钮组件 focus 时的样式，取消 css outlint 属性样式
  - 更新依赖版本
  - 处理字体显示不全问题

## v2.6.1

`2023-09-15`

- 优化代码
  - 单元测试工具由 jest 改为 vitest
  - 优化测试流程, 移除关于 jest 的依赖
  - 移除 eslint 校验命令，目录 `examples` `mobile` `packages` `tests` 全部改为项目运行时校验
- Bug Fixes
  - 优化 vue 代码风格
  - 更新依赖版本

## v2.6.0

`2023-09-11`

- 优化 [MeLoading](/v2/doc/loading) 组件
  - 新增点状 `dot` 参数
  - 移除组件的类型
  - 修复组件的加载问题
- Bug Fixes
  - 优化文档代码风格
  - 更新依赖版本

## v2.5.2

`2023-07-27`

- 删除冗余文件
- Bug Fixes
  - 修复已知 BUG
  - 更新依赖版本

## v2.5.1

`2023-07-04`

- 优化代码
  - 优化 docs 文档 $ref 改为 ref
- Bug Fixes
  - 修复 drag 组件的类型
  - 更新依赖版本

## v2.5.0

`2023-06-30`

- 优化代码
  - 基于`vue@3.3.x`
    - 优化代码使用 `props` 类型引入
    - 优化代码使用 `defineEmits`
    - 优化代码使用 `defineOptions`
    - 优化代码使用 `defineSlots`
  - Rollup 打包改为 Vite 打包
    - 以便于 Vue 特性更快的支持
    - 移除依赖 `cross-env`, `rollup`, `rollup-plugin-vue`, `rollup-plugin-typescript2`, `@rollup/plugin-node-resolve`
    - 增加依赖 `vite-plugin-dts`
  - 优化代码注释
    - 部分声明变量的 `//` 改为 JSDoc 注释
- 样式
  - 调整样式目录
  - 简化样式路径
- 新增 404 页面
- Bug Fixes
  - 修复已知 BUG
  - 更新依赖版本

## v2.4.1

`2023-05-11`

- 优化代码
  - 优化组件 .d.ts 提示
  - 优化组件 `MeMessageBox`, `MeToast`, `MePreview` 的使用方式和使用文档
  - 优化打包流程
- Bug Fixes
  - 修复已知 BUG
  - 更新依赖版本

## v2.4.0

`2023-05-09`

- 新增组合式 API
  - [新增 useValidator（校验器）](/v2/doc/composable)
  - [新增 useBind（事件绑定）](/v2/doc/composable)
  - [新增 useUtils（工具函数）](/v2/doc/composable)
  - [新增 useVisible（显示隐藏）](/v2/doc/composable)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.11

`2023-05-08`

- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.10

`2023-01-11`

- 更新 Style 样式类
  - [新增 throttle（节流）样式类](/v2/doc/style)
- 更新业务组件
  - [新增拼图校验组件](/v2/doc/jigsawValidate)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.9

`2022-12-05`

- 更新基础组件
  - [新增画图组件](/v2/doc/mspaint)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.8

`2022-10-14`

- 更新基础组件
  - [新增间距组件](/v2/doc/space)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.7

`2022-09-15`

- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.6

`2022-05-31`

- 更新业务组件
  - [新增优惠券组件](/v2/doc/coupon)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.5

`2022-05-13`

- 更新封装方法
  - [更改样式命名](/v2/doc/style)
- 更新基础组件
  - [新增单元格组件](/v2/doc/cell)
- Bug Fixes
  - 修复已知 Bug
  - 更新依赖版本

## v2.3.4

`2022-05-05`

- 优化代码
  - 使用 [ts-script-setup](https://staging-cn.vuejs.org/guide/typescript/options-api.html)
- Bug Fixes
  - 修复已知 Bug
  - 更新依赖版本

## v2.3.3

`2022-04-22`

- 更新业务组件
  - [拖拽组件新增双指缩放](/v2/doc/drag)
- 优化使用文档
  - 新增版本对应
- Bug Fixes
  - 修复已知 Bug
  - 优化代码
  - 更新依赖版本

## v2.3.2

`2022-03-04`

- 更新业务组件
  - [新增拖拽组件](/v2/doc/drag)
- 更新样式类
  - 新增图片填充效果 - [mode="fill,contain,cover"](/v2/doc/style)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码

## v2.3.0

`2022-01-10`

- 更新技术
  - 升级 `package.json` 依赖包版本
  - 更新代码至新语法
- Bug Fixes
  - 更新图标
  - 修复已知 Bug
  - 优化代码

## v2.2.1

`2021-12-23`

- 更新业务组件
  - [新增步骤条组件](/v2/doc/step)
- Bug Fixes
  - 优化包管理文件
  - 修复已知 Bug
  - 优化代码

## v2.1.1

`2021-11-09`

- 更新业务组件
  - [新增截长图组件](/v2/doc/screenShot)
- 更新 API 方法
  - 新增生成随机数 API - [GenerateRandom](/v2/doc/api)
  - 新增延迟器 API - [Retarder](/v2/doc/api)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码

## v2.1.0

`2021-10-27`

- 更新业务组件
  - [新增虚拟列表组件](/v2/doc/virtualList)
- Bug Fixes
  - 修复已知 Bug
  - 优化代码

## v2.0.0

`2021-10-09`

- Feature
  - 基于 Vue3.x 重构 `mine-h5-ui`
- Bug Fixes
  - 修复已知 Bug
  - 优化代码

:::
