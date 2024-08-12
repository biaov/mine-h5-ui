# Keyboard 数字键盘

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeKeyboard } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeKeyboard.css'

const app = createApp(App).use(MeKeyboard).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置键盘显示。

::: CopyCode

```html
<me-keyboard v-model:visible="isShow" />
```

:::

### 选择主题样式

- 通过 `skin-type` 属性来设置数字键盘的主题样式，默认为 gray。

::: CopyCode

```html
<me-keyboard v-model:visible="isShow" skin-type="gray" />
<me-keyboard v-model:visible="isShow" skin-type="dark" />
```

:::

### 自定义主题样式

- 通过 `skin-style` 属性来设置数字键盘的主题样式。

::: CopyCode

```vue
<template>
  <me-keyboard v-model:visible="isShow" :skin-style="skinStyle" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

/**
 * 数字键盘显示状态
 */
const isShow = ref(false)

/**
 * 自定义样式
 */
const skinStyle = Object.freeze({
  /**
   * 背景色
   */
  background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)',

  /**
   * 按钮背景色
   */
  textBg: 'rgba(255,255,255,0.1)',

  /**
   * 按钮颜色
   */
  color: '#fff'
})
</script>
```

:::

## API

### 参数

| 参数                     | 说明                                     | 类型    | 可选值       | 默认值 | 版本   |
| ------------------------ | ---------------------------------------- | ------- | ------------ | ------ | ------ |
| visible(v-model:visible) | 数字输入显示状态                         | boolean | true / false | --     | v2.0.0 |
| is-padding               | 键盘激活状态是否要设置 padding-bottom    | boolean | true / false | true   | v2.0.0 |
| skin-type                | 主题样式                                 | string  | gray / dark  | gray   | v2.0.0 |
| skin-style               | 自定义主题样式，详见下面 skin-style 属性 | Object  | --           | --     | v2.0.0 |

### skin-style 属性

| 参数    | 说明           | 类型   | 可选值 | 默认值 | 版本   |
| ------- | -------------- | ------ | ------ | ------ | ------ |
| bgc     | 数字键盘背景色 | string | --     | --     | v2.0.0 |
| textBgc | 按钮背景色     | string | --     | --     | v2.0.0 |
| color   | 按钮文字颜色   | string | --     | --     | v2.0.0 |

### 方法

| 方法名   | 说明                         | 回调参数          | 版本   |
| -------- | ---------------------------- | ----------------- | ------ |
| click    | 点击键盘数字时触发的事件     | num: number       | v2.3.5 |
| delete   | 点击键盘删除按钮时触发的事件 | event: MouseEvent | v2.3.5 |
| complate | 点击键盘完成按钮时触发的事件 | event: MouseEvent | v2.3.5 |
