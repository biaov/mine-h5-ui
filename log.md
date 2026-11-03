`2026-11-03`

- 🔥 新增 `vw` 适配产物，设计基准 `375px`，无需运行时
- ⚙️ 使用 `postcss-px-to-viewport-8-plugin` 替换 `postcss-pxtorem`
- ⚙️ 新增 `build:theme:vw` 构建命令，移除 `build:theme:rem`
- ⚙️ 移除 `rem` 适配产物，请改用 `mine-h5-ui/vw/*`
- ⚙️ 构建脚本改用 `--mode vw`，不再依赖 Windows 的 `set` 命令
- ⚙️ 优化胶囊圆角与离屏定位的 hack 值
- ⚙️ 更新日志支持「查看更多」折叠
- ⚙️ 修复文档构建警告，移除 `mockjs` 依赖
- 🐞 修复 `MeColorPicker`、`MeFloatButton` 类型声明错误
