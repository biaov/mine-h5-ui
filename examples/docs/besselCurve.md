# BesselCurve 贝塞尔曲线 `2.9.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeBesselCurve } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeBesselCurve.css'

createApp(App).use(MeBesselCurve).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置需要绘制的线，默认值为 `[]`。

::: CopyCode

```vue
<script setup>
import { ref } from 'vue'

const list = ref([
  {
    sx: 10,
    sy: 10,
    sw: 100,
    sh: 100,
    ex: 100,
    ey: 100,
    ew: 100,
    eh: 100,
    group: `1`
  }
])
</script>
<template>
  <me-bessel-curve :list="list" />
</template>
```

:::

### 对齐方向

- 通过属性 `direction` 来设置起始和结尾的方向，默认值为 `horizontal`。

::: CopyCode

```html
<me-bessel-curve :list="list" direction="vertical" />
```

:::

### 线的颜色和大小

- 通过属性 `color` 和 `stroke-width` 来设置线颜色和大小。

::: CopyCode

```html
<me-bessel-curve :list="list" color="#f56c6c" :stroke-width="2" />
```

:::

### 隐藏箭头

- 通过属性 `arrow` 来设置箭头的显示和隐藏，默认值为 `false`。

::: CopyCode

```html
<me-bessel-curve :list="list" :arrow="false" />
```

:::

## API

### 参数

| 参数         | 说明         | 类型                                                  | 可选值       | 默认值     | 版本   |
| ------------ | ------------ | ----------------------------------------------------- | ------------ | ---------- | ------ |
| list         | 线的坐标数据 | [ListItem[]](#listitem)                               | --           | []         | v2.9.0 |
| direction    | 对齐方式     | `horizontal` / `vertical` / `(horizontal/vertical)[]` | --           | horizontal | v2.9.0 |
| color        | 线的颜色     | string                                                | --           | #d9d9d9    | v2.9.0 |
| stroke-width | 线的大小     | number                                                | --           | 1          | v2.9.0 |
| arrow        | 是否需要箭头 | boolean                                               | true / false | false      | v2.9.0 |

#### ListItem

| 参数  | 说明           | 类型   | 可选值 | 默认值 | 版本   |
| ----- | -------------- | ------ | ------ | ------ | ------ |
| sx    | 开始点的横坐标 | number | --     | --     | v2.9.0 |
| sy    | 开始点的纵坐标 | number | --     | --     | v2.9.0 |
| sw    | 开始点的宽度   | number | --     | --     | v2.9.0 |
| sh    | 开始点的高度   | number | --     | --     | v2.9.0 |
| ex    | 结束点的横坐标 | number | --     | --     | v2.9.0 |
| ey    | 结束点的纵坐标 | number | --     | --     | v2.9.0 |
| ew    | 结束点的宽度   | number | --     | --     | v2.9.0 |
| eh    | 结束点的高度   | number | --     | --     | v2.9.0 |
| group | 线的唯一值     | string | --     | --     | v2.9.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
