# Password 密码输入框/短信输入框

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MePassword } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MePassword.css'

const app = createApp(App)
app.use(MePassword)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置输入框的值，一般配合数字键盘输入。

::: CopyCode

```Vue
<template>
  <me-password v-model="iptValue" @focus="onFocus" @blur="onBlur"></me-password>
  <me-keyboard v-model="keyboardValue" @click="handleNum" @delete="onDelete" @complate="onComplate"></me-keyboard>
</template>
<script lang="ts" setup>
let iptValue = $ref('') // 当前输入框值
let keyboardValue = $ref(false) // 数字键盘显示状态
// 密码输入框聚焦
const onFocus = () => {
  keyboardValue = true
}
// 密码输入框失焦
const onBlur = () => {
  keyboardValue = false
}
// 点击密码输入框数字按钮
const handleNum = e => {
  iptValue += String(e)
}
// 点击密码输入框删除按钮
const onDelete = () => {
  // 判断是否为空
  iptValue && (iptValue = iptValue.split('').slice(0, -1).join(''))
}
// 点击密码输入框完成按钮
const onComplate = () => {
  keyboardValue = false
}
</script>
```

:::

### 选择主题样式

- 通过 `skin-type` 属性来设置输入框的主题样式，默认值为 white。

::: CopyCode

```Vue
<template>
  <me-password v-model="iptValue" @focus="onFocus" @blur="onBlur" skin-type="dark"></me-password>
  <me-keyboard v-model="keyboardValue" @click="handleNum" @delete="onDelete" @complate="onComplate"></me-keyboard>
</template>
<script lang="ts" setup>
let iptValue = $ref('') // 当前输入框值
let keyboardValue = $ref(false) // 数字键盘显示状态
// 密码输入框聚焦
const onFocus = () => {
  keyboardValue = true
}
// 密码输入框失焦
const onBlur = () => {
  keyboardValue = false
}
// 点击密码输入框数字按钮
const handleNum = e => {
  iptValue += String(e)
}
// 点击密码输入框删除按钮
const onDelete = () => {
  // 判断是否为空
  iptValue && (iptValue = iptValue.split('').slice(0, -1).join(''))
}
// 点击密码输入框完成按钮
const onComplate = () => {
  keyboardValue = false
}
</script>
```

:::

### 自定义输入框数量

- 通过 `num` 属性来设置输入框的数量，默认值为 6。

::: CopyCode

```Vue
<template>
  <me-password v-model="iptValue" @focus="onFocus" @blur="onBlur" :num="4"></me-password>
  <me-keyboard v-model="keyboardValue" @click="handleNum" @delete="onDelete" @complate="onComplate"></me-keyboard>
</template>
<script lang="ts" setup>
let iptValue = $ref('') // 当前输入框值
let keyboardValue = $ref(false) // 数字键盘显示状态
// 密码输入框聚焦
const onFocus = () => {
  keyboardValue = true
}
// 密码输入框失焦
const onBlur = () => {
  keyboardValue = false
}
// 点击密码输入框数字按钮
const handleNum = e => {
  iptValue += String(e)
}
// 点击密码输入框删除按钮
const onDelete = () => {
  // 判断是否为空
  iptValue && (iptValue = iptValue.split('').slice(0, -1).join(''))
}
// 点击密码输入框完成按钮
const onComplate = () => {
  keyboardValue = false
}
</script>
```

:::

### 选择输入框模式

- 通过 `type` 属性来设置输入框的模式，默认值为 password。

::: CopyCode

```HTML
<template>
  <me-password v-model="iptValue" @focus="onFocus" @blur="onBlur" type="number"></me-password>
  <me-keyboard v-model="keyboardValue" @click="handleNum" @delete="onDelete" @complate="onComplate"></me-keyboard>
</template>
<script lang="ts" setup>
let iptValue = $ref('') // 当前输入框值
let keyboardValue = $ref(false) // 数字键盘显示状态
// 密码输入框聚焦
const onFocus = () => {
  keyboardValue = true
}
// 密码输入框失焦
const onBlur = () => {
  keyboardValue = false
}
// 点击密码输入框数字按钮
const handleNum = e => {
  iptValue += String(e)
}
// 点击密码输入框删除按钮
const onDelete = () => {
  // 判断是否为空
  iptValue && (iptValue = iptValue.split('').slice(0, -1).join(''))
}
// 点击密码输入框完成按钮
const onComplate = () => {
  keyboardValue = false
}
</script>
```

:::

## API

### 参数

| 参数      | 说明               | 类型   | 可选值            | 默认值   | 版本 |
| --------- | ------------------ | ------ | ----------------- | -------- | ---- |
| v-model   | 双向绑定输入框的值 | string | --                | --       | --   |
| type      | 输入框模式         | string | password / number | password | --   |
| num       | 自定义输入框数量   | number | --                | 6        | --   |
| skin-type | 主题样式           | string | white / dark      | white    | --   |

### 方法

| 方法名 | 说明                       | 回调参数      | 版本  |
| ------ | -------------------------- | ------------- | ----- |
| focus  | 输入框聚焦时触发的事件     | e: MouseEvent | 2.3.5 |
| blur   | 输入框失去焦点时触发的事件 | e: MouseEvent | 2.3.5 |
