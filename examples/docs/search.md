# Search 搜索

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeSearch } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeSearch.css'

createApp(App).use(MeSearch).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置搜索框的值。

::: CopyCode

```html
<me-search v-model="value" />
```

:::

### 占位符内容

- 通过 `placeholder` 属性来设置搜索框的占位符内容，默认为**请搜索**。

::: CopyCode

```html
<me-search v-model="value" placeholder="请输入搜索内容" />
```

:::

### 自定义右侧按钮内容

- 通过 `btnText` 属性来设置搜索框右侧按钮内容。

::: CopyCode

```vue
<template>
  <me-search v-model="iptValue" btnText="取消" @click="btnCancel" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { MeToast } from 'mine-h5-ui'

/**
 * 当前搜索框值
 */
const iptValue = ref('')

/**
 * 点击取消按钮
 */
const btnCancel = () => {
  MeToast('点击了取消按钮')
}
</script>
```

:::

### 对齐方式

- 通过 `align` 属性来设置搜索框的内容对齐方式，默认为 left。

::: CopyCode

```html
<me-search v-model="value" align="center" />
```

:::

### 设置倒角

- 通过 `radius` 属性来设置搜索框的倒角，支持 CSS 的 border-radius 值，默认为 4px。

::: CopyCode

```html
<me-search v-model="value" radius="20px" />
```

:::

### 自定义样式

- 通过 `background` 和 `color` 属性来设置搜索框的样式，支持 CSS 的 background 和 color 值，background 默认值为 #f6f6f6，color 默认值为 #494949。

::: CopyCode

```html
<me-search v-model="value" background="linear-gradient(-45deg, #4bb0ff, #6149f6)" color="#fff" />
```

:::

### 禁用搜索框

- 通过 `disabled` 属性来设置搜索框的禁用状态，默认为 false。

::: CopyCode

```html
<me-search v-model="value" :disabled="true" />
```

:::

## API

### 参数

| 参数                | 说明               | 类型    | 可选值                                    | 默认值  | 版本   |
| ------------------- | ------------------ | ------- | ----------------------------------------- | ------- | ------ |
| modelValue(v-model) | 双向绑定弹出层状态 | boolean | true / false                              | --      | v2.0.0 |
| placeholder         | 搜索框占位符       | string  | --                                        | 请搜索  | v2.0.0 |
| btnText             | 搜索框右侧内容     | string  | --                                        | --      | v2.0.0 |
| align               | 搜索框内容对齐方式 | string  | left / center / right / justify / inherit | left    | v2.0.0 |
| radius              | 搜索框倒角         | string  | --                                        | 4px     | v2.0.0 |
| background          | 搜索框背景颜色     | string  | --                                        | #f6f6f6 | v2.0.0 |
| color               | 搜索框字体颜色     | string  | --                                        | #494949 | v2.0.0 |
| disabled            | 搜索框禁用状态     | boolean | true / false                              | false   | v2.0.0 |

### 方法

| 方法名 | 说明                                      | 回调参数     | 版本   |
| ------ | ----------------------------------------- | ------------ | ------ |
| focus  | 输入框聚焦时触发的事件                    | event: Event | v2.3.5 |
| search | 输入框点击软键盘搜索/回车按钮时触发的事件 | event: Event | v2.3.5 |
| input  | 输入框输入时触发的事件                    | event: Event | v2.3.5 |
| change | 输入框内容发生改变时触发的事件            | event: Event | v2.3.5 |
| blur   | 输入框移除焦点时触发的事件                | event: Event | v2.3.5 |

### 样式变量

| 名称               | 默认值 | 描述 | 版本    |
| ------------------ | ------ | ---- | ------- |
| --me-search-height | 40px   | 高度 | v2.17.0 |
