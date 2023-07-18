# 快速开始

---

## 前提

- 由于 `MINE-H5-UI` 是基于 VUE 的 UI 组件库，因此你需要先安装 Vue。

## 引入组件

### 方式一.全局引入组件

- 如果你是为了开发效率，推荐使用这种方式。

:::CopyCode

```JavaScript
import Vue from 'vue'
import MINEH5UI from 'mine-h5-ui'
import 'mine-h5-ui/styles/index.css'

Vue.use(MINEH5UI)
```

:::

### 方式二.手动按需引入组件

- 如果你是为了项目性能，推荐使用这种方式。

:::CopyCode

```JavaScript
import Vue from 'vue'
import { MeButton } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeButton.css'

Vue.use(MeButton)
```

:::

#### 特别提醒

- 如果你觉得每次手动按需引用样式繁琐，那么你仍然可以全部导入样式。

:::CopyCode

```JavaScript
import 'mine-h5-ui/styles/index.css'
```

:::

## 进阶用法

### Rem 适配

- `MINE-H5-UI` 中的样式单位默认使用 `px` 作为单位，如果要使用 `rem` 单位，推荐使用以下两个工具：
  - [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 `postcss` 插件，用于将单位转化为 `rem`。
  - [amfe-flexible](https://github.com/amfe/lib-flexible) 用于设置 `rem` 基准值。
- 如果你不要使用以上插件，但是想要 `MINE-H5-UI` 中的样式单位使用 `rem` 作为单位，那么在自定义主题中使用以下命令去生成单位为 `rem` 的样式：

```Basic
npm run build:theme-rem
```

```Basic
npm i -S postcss-pxtorem amfe-flexible
```
