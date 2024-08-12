# ShowLoading 加载提示框 `2.10.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeShowLoading } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeShowLoading.css'

createApp(App).use(MeShowLoading).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

::: CopyCode

```html
<script setup>
  import { MeShowLoading, MeHideLoading } from 'mine-h5-ui'

  /**
   * 显示加载框
   */
  const onClick = () => {
    MeShowLoading()
    setTimeout(() => {
      MeHideLoading()
    }, 3000)
  }
</script>
<template>
  <button @click="onClick">显示加载框</button>
</template>
```

:::

### 自定义文本

- 通过传入参数来显示加载框的文本

::: CopyCode

```ts
import { MeShowLoading } from 'mine-h5-ui'

MeShowLoading('加载中...')
```

:::

## API

### 参数

| 参数    | 说明               | 类型   | 可选值 | 默认值 | 版本    |
| ------- | ------------------ | ------ | ------ | ------ | ------- |
| message | 需要提示的信息内容 | string | --     | --     | v2.10.0 |
