# 更新日志

---

## 介绍

`mine-h5-ui` 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

### 发布节奏

- 修订号：不定期发布，包含新特性和问题修复。
- 次版本号：不定期发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新，预计作者技术发生重大提升或重构时发布。

:::TimeLine

## v2.7.2-Latest release

`2023-00-00`

- 优化代码
  - 优化文档

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
