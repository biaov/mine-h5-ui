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

### Rem 适配

- `mine-h5-ui` 中的样式单位默认使用 `px` 作为单位，如果要使用 `rem` 单位，请引入样式替换为：

```js
// 所有组件样式
import 'mine-h5-ui/rem/index.css'

// 单个组件样式
import 'mine-h5-ui/rem/MeButton.css'
```
