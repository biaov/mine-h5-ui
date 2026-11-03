# 快速开始

---

## 前提

- 由于 `mine-h5-ui` 是基于 VUE 的 UI 组件库，因此你需要先安装 Vue。

## 引入组件

### 方式一.全局引入组件

- 如果你是为了开发效率，推荐使用这种方式。

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import mineh5ui from 'mine-h5-ui'
import 'mine-h5-ui/styles/index.css'

createApp(App).use(mineh5ui).mount('#app')
```

:::

### 方式二.手动按需引入组件

- 如果你是为了项目性能，推荐使用这种方式。

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeButton } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeButton.css'

const app = createApp(App)
app.use(MeButton)
app.mount('#app')
```

:::

#### 特别提醒

- 如果你觉得每次手动按需引用样式繁琐，那么你仍然可以全部导入样式。

::: CopyCode

```js
// 所有组件样式
import 'mine-h5-ui/styles/index.css'
```

:::

## 进阶用法

### VW 适配

- `mine-h5-ui` 中的样式单位默认使用 `px`，设计稿基准为 `375px`。如果需要按视口宽度等比缩放，请将样式替换为 `vw` 版本：

```js
// 所有组件样式
import 'mine-h5-ui/vw/index.css'

// 单个组件样式
import 'mine-h5-ui/vw/MeButton.css'
```

- `vw` 版本无需引入 `flexible.js`，也无需设置 `html` 根字号。
- `1px` 边框及 `1px` 以下的数值仍保持 `px`，以保证细线清晰。
- 通过 Props 传入的尺寸（如 `MeImg` 的 `width`）不会自动转换，需要等比缩放时请传入 `vw` 值。
