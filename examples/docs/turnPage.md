# TurnPage 仿真翻页 `v2.15.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeTurnPage } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTurnPage.css'

createApp(App).use(MeTurnPage).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `time` 来设置组件的倒计时间，单位为毫秒 (ms)。

::: CopyCode

```html
<me-count-down :time="2*60*60*1000" />
```

:::

## API

### 参数

| 参数 | 说明                       | 类型   | 可选值 | 默认值 | 版本    |
| ---- | -------------------------- | ------ | ------ | ------ | ------- |
| time | 倒计时的时间，单位毫秒(ms) | number | --     | --     | v2.15.0 |

### 方法

| 方法名 | 说明                   | 回调参数 | 版本    |
| ------ | ---------------------- | -------- | ------- |
| end    | 倒计时结束时触发的事件 | --       | v2.15.0 |
