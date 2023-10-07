# Loading 加载

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeLoading } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeLoading.css'

const app = createApp(App)
app.use(MeLoading)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

::: CopyCode

```html
<me-loading />
```

:::

### 图标大小

- 通过属性 `size` 来设置加载框图标的大小，默认为 24px。

::: CopyCode

```html
<me-loading size="24px" />
```

:::

### 图标颜色

- 通过属性 `color` 来设置加载框图标的颜色，默认为 #c8c9cc。

::: CopyCode

```html
<me-loading color="#c8c9cc" />
```

:::

### 自定义图标

- 通过插槽 `icon` 来设置加载框图标的名称。

::: CopyCode

```vue
<script setup>
import svgIcon from '**/*.svg'

const imgStyle = { width: '40px', height: '40rpx' }
</script>
<template>
  <me-loading>
    <template #icon>
      <img :src="svgIcon" :style="imgStyle" />
    </template>
  </me-loading>
</template>
```

:::

### 自定义文本

- 通过属性 slot 来设置加载框的文本内容。
- 如果你需要换行，直接使用块级内容即可。

::: CopyCode

```html
<me-loading>加载中...</me-loading>
```

:::

### 点状加载

- 通过属性 `dot` 来设置组件的点状加载。

::: CopyCode

```html
<me-loading dot />
```

:::

## API

### 参数

| 参数  | 说明                                 | 类型   | 可选值       | 默认值  | 版本   |
| ----- | ------------------------------------ | ------ | ------------ | ------- | ------ |
| size  | 加载框图标的大小                     | string | --           | 24px    | v2.0.0 |
| color | 加载框图标的颜色                     | string | --           | #c8c9cc | v2.0.0 |
| dot   | 点状加载，为 true 时，icon slot 无效 | string | true / false | false   | v2.6.0 |

### Slots

| 具名插槽 | 说明       | scopedSlots | 版本   |
| -------- | ---------- | ----------- | ------ |
| default  | 默认名称   | --          | v2.0.0 |
| icon     | 自定义图标 | --          | v2.6.0 |
