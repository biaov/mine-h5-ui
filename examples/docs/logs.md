# 更新日志

---

## 介绍

`mine-h5-ui` 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

### 发布节奏

- 修订号：不定期发布，包含新特性和问题修复。
- 次版本号：不定期发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新，预计作者技术发生重大提升或重构时发布。

:::TimeLine

## v2.17.0 - 最新版本

`2025-12-02`

- 🔥 新增组件 [MeTextarea 文本域](/v2/doc/textarea)
- 🔥 新增组件 [MePagination 分页器](/v2/doc/pagination)
- 🔥 新增 [useFormState](/v2/doc/composable) 表单状态管理
- 🐞 修复 `MeStepper` 组件兼容性问题
- 🐞 修复重置样式的影响
- ⚙️ `useLocked` 新增业务处理方法
- ⚙️ 更新 `vitest` 由 `3.x` -> `4.x`
- ⚙️ 版本更新
- ⚙️ 完善全局样式变量文档
- ⚙️ 调整文档整体布局和样式
- 🐞 修复文档路径问题

## v2.16.0

`2025-09-09`

- 🔥 组件 `MeSwiper` 支持满屏
- 🔥 新增[步进器组件 MeStepper](/v2/doc/stepper)
- ⚙️ 优化组件 `MeSpace` 去掉冗余 div 层级
- ⚙️ 组件 `MeInput` 新增属性 `maxlength`
- ⚙️ 更新 Debounce 和 Throttle 函数的参数为可选
- ⚙️ 更新依赖版本

## v2.15.0

`2025-05-16`

- 🔥 新增组件 [仿真翻页 MeTurnPage](/v2/doc/turnPage)
- 🔥 新增组件 [图片验证器 MeCaptcha](/v2/doc/captcha)
- 🔥 新增组件 [图片分割器 MeSplitter](/v2/doc/splitter)
- 🔥 新增 [useImgInfo](/v2/doc/composable) 获取图片信息
- ⚙️ 更新依赖 `eslint-plugin-vue` 由 `9.x` -> `10.x`
- ⚙️ 更新依赖 `vite-plugin-pwa` 由 `0.x` -> `1.x`
- ⚙️ 更新依赖版本
- ⚙️ less 变量更换为 css 变量
- ⚙️ 更新 `JSON.parse(JSON.stringify())` 替换为 `structuredClone()`
- ⚙️ 废弃组件 `拼图校验 MeJigsawValidate` 改为 `图片验证器 MeCaptcha`
- ⚙️ 调整使用文档 Mobile 展示宽度为 `375px`
- ⚙️ 调整使用文档 Docs 最大宽度为 `1920px`
- ⚙️ 移除 API `FormatThousand` 推荐使用原生代码 `toLocaleString()`
- 🐞 修复组件 `MeSpace` 不能更新 slots 问题

## v2.14.2

`2025-03-05`

- ⚙️ 优化 tailwindcss 的使用
- ⚙️ 更新依赖版本
- 🐞 修复日历组件 (MeCalendar) 星期对应问题

## v2.14.0

`2025-02-25`

- 🔥 新增组件 [MeCalendar](/v2/doc/calendar)
- 🔥 新增依赖 `@tailwindcss/vite`
- ⚙️ 更新依赖版本
- ⚙️ 更新图标
- ⚙️ 优化代码
- ⚙️ 更新依赖 `globals` 由 `15.x` -> `16.x`
- ⚙️ 更新依赖 `vite-node` 由 `2.x` -> `3.x`
- ⚙️ 更新依赖 `vitest` 由 `2.x` -> `3.x`
- ⚙️ 更新依赖 `vite` 由 `5.x` -> `6.x`
- ⚙️ 更新依赖 `shiki` 由 `1.x` -> `3.x`
- ⚙️ 更新依赖 `tailwindcss` 由 `3.x` -> `4.x`
- ⚙️ 移除文档路由切换动画，增加切换效率
- ⚙️ 移除 tailwind.config.js 文件

## v2.13.0

`2025-01-10`

- 🔥 新增 Web UI 自动化测试
- 🔥 新增组件总览文档 & 支持搜索
- 🔥 新增依赖 `selenium-webdriver` 用于自动化测试
- 🔥 新增依赖 `vite-node` 用于执行 ts 文件
- 🔥 新增组件 `MeIndexBar` 字母点击跳转功能
- 🔥 新增 tailwind.config.ts 文件用于 优化 VSCode 开发 tailwind 语法提示流程
- ⚙️ 更新依赖版本
- ⚙️ 优化文档左侧底部显示过低问题
- ⚙️ 优化部分组件里面的 touchmove 事件
- ⚙️ 简化文档使用组件标签
- 🐞 修复 `MeSwiperCell` 组件不能拖拽问题
- 🐞 修复组件 `MeSwiperCell` 更改为 `MeSwipeCell` 命名问题
- 🐞 修复组件 `MeIndexBar` 字母遮盖和滚动问题
- 🐞 修复组件 `MeCountDown` 显示问题
- 🐞 修复组件 `MePreview` 预览图片问题
- 🐞 修复组件 `MeGuide` 文档位置对齐响应式

## v2.12.0

`2024-12-18`

- 🔥 新增[颜色选择器 MeColorPicker](/v2/doc/datetimePicker) 组件
- 🔥 新增[文案滑动动画 MeTextAnimation](/v2/doc/textAnimation) 组件
- 🔥 新增 [Style 样式类](/v2/doc/style) `me-bg-opacity`
- 🔥 新增 [useColorTransform](/v2/doc/composable) 颜色转换
- 🔥 新增 [useMoveHandle](/v2/doc/composable) 移动操作处理
- 🔥 新增 [useSameTarget](/v2/doc/composable) 相同的目标节点点击事件
- 🔥 新增 [useCssVar](/v2/doc/composable) 对象转 CSS 变量
- 🔥 新增依赖 `vi-canvas-mock` 用于处理单元测试 canvas 问题
- ⚙️ 更新依赖版本
- ⚙️ 优化 `useLocked` 方法 this 指向问题
- ⚙️ 优化 api 导出
- ⚙️ 拆分 MeComposable 里面的方法
- 🐞 修复移动端刷新回退到主页的操作
- 🐞 修复组件 MeSpace 插槽内不能循环的问题
- 🐞 修复部分组件的单元测试 title
- 🐞 修复 eslint 部分规则冲突问题

## v2.11.0

`2024-09-19`

- 🔥 新增组合式 API [useLocked](/v2/doc/composable)
- 🔥 新增组合式 API [useId](/v2/doc/composable)
- ⚙️ 更新文档
- ⚙️ 更新依赖
- ⚙️ 更新 `jsdom` 版本 24.x -> 25.x
- ⚙️ 更新 `vue` 版本 3.4.x -> 3.5.x

## v2.10.0

`2024-08-12`

- 🔥 新增 [showLoading](/v2/showLoading) 加载提示组件
- 🔥 新增 `git push` 时执行单元测试
- 🔥 新增依赖 @eslint/js, globals, typescript-eslint
- ⚙️ 更新依赖版本
- ⚙️ 更新文档
- ⚙️ 更新 vite-plugin-dts 由 `3.x` 升级到 `4.x`
- ⚙️ 更新 @types/node 由 `20.x` 升级到 `22.x`
- ⚙️ 更新 eslint 由 `8.x` 升级到 `9.x`
- ⚙️ 更新 `eslint9.x` 的新配置
- ⚙️ 移除依赖 @typescript-eslint/parser, @typescript-eslint/eslint-plugin, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import
- 🐞 修复代码格式错误
- 🐞 修复 button 文档链接问题

## v2.9.4

`2024-07-11`

- ⚙️ 更新依赖 `vitest` 由 `1.x` 升级到 `2.x`
- ⚙️ 更新依赖版本
- 🐞 修复 `MeUpload` 组件 fileList 双向绑定问题

## v2.9.3

`2024-07-11`

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
