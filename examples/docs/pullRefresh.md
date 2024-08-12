# PullRefresh 下拉刷新

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MePullRefresh } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MePullRefresh.css'

createApp(App).use(MePullRefresh).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置组件的加载状态。

::: CopyCode

```vue
<script lang="ts" setup>
import { ref } from 'vue'

/**
 * 加载状态
 */
const loading = ref(false)

/**
 * 刷新次数
 */
const count = ref(0)

/**
 * 刷新
 */
const onRefresh = () => {
  setTimeout(() => {
    count.value++
    loading.value = false
  }, 3000)
}
</script>

<template>
  <me-pull-refresh v-model="loading" @refresh="onRefresh">
    刷新次数
    <template v-text="count"></template>
  </me-pull-refresh>
</template>
```

:::

### 自定义提示文本

- 通过属性 `load-text` 来设置提示文本，默认为 `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]`。

::: CopyCode

```vue
<script lang="ts" setup>
import { ref } from 'vue'

/**
 * 自定义加载文本
 */
const loadText = Object.freeze(['开始下拉...', '释放刷新...', '还在请求后台...', '成功了'])

/**
 * 加载状态
 */
const loading = ref(false)

/**
 * 刷新次数
 */
const count = ref(0)

/**
 * 刷新
 */
const onRefresh = () => {
  setTimeout(() => {
    count.value++
    loading.vale = false
  }, 3000)
}
</script>

<template>
  <me-pull-refresh v-model="loading" :load-text="loadText" :load-icon="false" @refresh="onRefresh">
    刷新次数
    <template v-text="count"></template>
  </me-pull-refresh>
</template>
```

:::

## API

### 参数

| 参数                | 说明                 | 类型    | 可选值       | 默认值                                                        | 版本   |
| ------------------- | -------------------- | ------- | ------------ | ------------------------------------------------------------- | ------ |
| modelValue(v-model) | 双向绑定组件加载状态 | boolean | --           | --                                                            | v2.0.0 |
| load-text           | 加载文本             | Array   | --           | `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]` | v2.0.0 |
| load-icon           | 加载图标显示状态     | boolean | true / false | true                                                          | v2.0.0 |

### 方法

| 方法名  | 说明                 | 回调参数 | 版本   |
| ------- | -------------------- | -------- | ------ |
| refresh | 释放下拉时触发的事件 | --       | v2.3.5 |
