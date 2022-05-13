# PullRefresh 下拉刷新

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MePullRefresh } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MePullRefresh.css'

const app = createApp(App)
app.use(MePullRefresh)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置组件的加载状态。

::: CopyCode

```HTML
<template>
  <me-pull-refresh v-model="loading" @refresh="onRefresh">刷新次数<template v-text="count"></template></me-pull-refresh>
</template>
<script lang="ts" setup>
let loading = $ref(false) // 加载状态
let count = $ref(0) // 刷新次数
// 刷新
const onRefresh = () => {
  setTimeout(() => {
    count++
    loading = false
  }, 3000)
}
</script>
```

:::

### 自定义提示文本

- 通过属性 `load-text` 来设置提示文本，默认为 `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]`。

::: CopyCode

```HTML
<template>
  <me-pull-refresh v-model="loading" :load-text="loadText" :load-icon="false" @refresh="onRefresh">刷新次数<template v-text="count"></template></me-pull-refresh>
</template>
<script lang="ts" setup>
const loadText = Object.freeze(['开始下拉...', '释放刷新...', '还在请求后台...', '成功了']) // 自定义加载文本
let loading = $ref(false) // 加载状态
let count = $ref(0) // 刷新次数
// 刷新
const onRefresh = () => {
  setTimeout(() => {
    count++
    loading = false
  }, 3000)
}
</script>
```

:::

## API

### 参数

| 参数                | 说明                 | 类型    | 可选值       | 默认值                                                        | 版本 |
| ------------------- | -------------------- | ------- | ------------ | ------------------------------------------------------------- | ---- |
| modelValue(v-model) | 双向绑定组件加载状态 | boolean | --           | --                                                            | --   |
| load-text           | 加载文本             | Array   | --           | `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]` | --   |
| load-icon           | 加载图标显示状态     | boolean | true / false | true                                                          | --   |

### 方法

| 方法名  | 说明                 | 回调参数 | 版本  |
| ------- | -------------------- | -------- | ----- |
| refresh | 释放下拉时触发的事件 | --       | 2.3.5 |
