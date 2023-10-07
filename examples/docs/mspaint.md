# Mspaint 画图

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeMspaint } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeMspaint.css'

const app = createApp(App)
app.use(MeMspaint)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 组件初始化一个画图区域。

::: CopyCode

```html
<me-mspaint></me-mspaint>
```

:::

### 自定义样式

- 通过 `width` 属性来设置组件的宽度，默认为 `250px`。
- 通过 `height` 属性来设置组件的高度，默认为 `250px`。
- 通过 `background` 属性来设置组件的背景色，默认为 `#fff`。
- 通过 `borderStyle` 属性来设置组件的边框样式，默认为 `false`。
- 通过 `strokeStyle` 属性来设置组件的线条颜色，默认为 `#f56c6c`。
- 通过 `lineWidth` 属性来设置组件的线条大小，默认为 `1`。

::: CopyCode

```html
<me-mspaint width="260px" height="200px" background="#000" border-style="5px dashed #f60" stroke-style="#fff" line-width="3"></me-mspaint>
```

:::

## API

### 参数

| 参数                | 说明               | 类型              | 可选值 | 默认值  | 版本   |
| ------------------- | ------------------ | ----------------- | ------ | ------- | ------ |
| modelValue(v-model) | 双向绑定弹出层状态 | HTMLCanvasElement | --     | --      | v2.3.9 |
| width               | 宽度               | string            | --     | 200px   | v2.3.9 |
| height              | 高度               | string            | --     | 200px   | v2.3.9 |
| background          | 背景色             | string            | --     | #fff    | v2.3.9 |
| border-style        | 边框样式           | boolean / string  | --     | false   | v2.3.9 |
| stroke-style        | 线条颜色           | string            | --     | #f56c6c | v2.3.9 |
| line-width          | 线条粗细           | number            | --     | 1       | v2.3.9 |

### 方法

| 方法名            | 说明                     | 回调参数                | 版本   |
| ----------------- | ------------------------ | ----------------------- | ------ |
| update:modelValue | 页面渲染完之后触发的事件 | node: HTMLCanvasElement | v2.3.9 |
