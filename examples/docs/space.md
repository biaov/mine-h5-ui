# Space 间距

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeSpace } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeSpace.css'

const app = createApp(App)
app.use(MeSpace)
app.mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `size` 来设置组件的间距大小，默认为 `10px`。

::: CopyCode

```HTML
<me-space size="10px">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</me-space>
```

:::

### 间距方向

- 通过属性 `direction` 来设置组件的间距方向，默认为 `horizontal`。

::: CopyCode

```HTML
<me-space direction="vertical">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</me-space>
```

:::

## API

### 参数

| 参数      | 说明     | 类型   | 可选值                | 默认值     | 版本  |
| --------- | -------- | ------ | --------------------- | ---------- | ----- |
| size      | 间距大小 | string | --                    | 10px       | 2.3.8 |
| direction | 间距方向 | string | horizontal / vertical | horizontal | 2.3.8 |
