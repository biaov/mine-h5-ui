# Mask 遮罩层

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeMask } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeMask.css'

const app = createApp(App)
app.use(MeMask)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `visible` 来设置遮罩层的显示和隐藏。

::: CopyCode

```html
<me-mask visible="false"></me-mask>
```

:::

### 设置内容

- 通过 slot 来设置内容。

::: CopyCode

```html
<template>
  <me-mask v-model:visible="visible" mask-close>
    <me-loading type="circle2" color="#f56c6c" size="100px">
      <div class="text">加载中...</div>
    </me-loading>
  </me-mask>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const visible = ref(false) // 模态框显示状态
</script>
<style scoped lang="less">
  .me-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    .text {
      padding-top: 10px;
      text-align: center;
      color: @color-default;
    }
  }
</style>
```

:::

## API

### 参数

| 参数       | 说明               | 类型    | 可选值       | 默认值 | 版本   |
| ---------- | ------------------ | ------- | ------------ | ------ | ------ |
| visible    | 遮罩层的显示状态   | boolean | true / false | false  | v2.0.0 |
| mask-close | 点击遮罩层是否关闭 | boolean | true / false | false  | v2.0.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   | --  |
| -------- | -------- | ----------- | ------ | --- |
| default  | 默认名称 | --          | v2.0.0 |
