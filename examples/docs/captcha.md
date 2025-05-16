# MeCaptcha 图片验证器 `v2.15.0`

---

## 原理

- API 请求获取组件的初始化显示信息
- 前端获取拖拽到指定位置的信息
- API 请求验证接口，传递指定位置的信息，后端验证是否通过，根据验证结果显示验证成功或验证失败信息
  - 验证通过后，显示验证成功的信息，并存储验证成功的信息关键字段，用于后续的表单提交
  - 验证失败后，显示验证失败的信息
    - 验证过期
    - 位置错误
    - 已使用过等等

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeCaptcha } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeCaptcha.css'

createApp(App).use(MeCaptcha).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `visible` 来设置组件的显示，默认为 false
- 通过属性 `item` 来设置组件的显示

::: CopyCode

```html
<script setup lang="ts">
  const visible = ref(false)
  const item = {
    bgElem: {
      url: '', // 背景图
      size: [] // [宽度, 高度]
    },
    elem: {
      initPos: [], // [x, y]
      url: '', // 元素图
      size: [] // [宽度, 高度]
    }
  }
</script>
<template>
  <me-captcha v-model:visible="visible" :item="item" />
</template>
```

:::

## API

### 参数

| 参数               | 说明     | 类型                  | 可选值                          | 默认值 | 版本    |
| ------------------ | -------- | --------------------- | ------------------------------- | ------ | ------- |
| v-model:visible    | 显示状态 | true / false          | --                              | false  | v2.15.0 |
| v-model:statusCode | 状态码   | number                | 1: 成功 / 2: 校验错误 / 3: 过期 | --     | v2.15.0 |
| item               | 显示信息 | [ItemData](#itemdata) | --                              | --     | v2.15.0 |

#### ItemData

```ts
interface ItemData {
  bgElem: {
    url: string // 背景图
    size: number[] // [宽度, 高度]
  }
  elem: {
    initPos: number[] // [x, y]
    url: string // 元素图
    size: number[] // [宽度, 高度]
  }
}
```

### 方法

| 方法名  | 说明                     | 回调参数         | 版本    |
| ------- | ------------------------ | ---------------- | ------- |
| check   | 拖拽结束后的验证触发事件 | [x, y]: number[] | v2.15.0 |
| refresh | 点击刷新按钮触发事件     | --               | v2.15.0 |
