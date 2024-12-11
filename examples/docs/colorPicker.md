# ColorPicker 颜色选择器 `v2.12.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeColorPicker } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeColorPicker.css'

createApp(App).use(ColorPicker).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来进行双向绑定，可以为 undefined

```ts
interface ModelValue {
  /**
   * 色彩类型
   */
  type: 'hex' | 'rgb' | 'hsb'
  /**
   * 颜色值, 默认为: #409eff
   */
  value: string
  /**
   * 透明度, 0 - 100
   */
  alpha: number
}
```

::: CopyCode

```html
<me-color-picker v-model="modelValue" />
```

:::

### 大小

- 通过属性 `size` 来控制显示的大小, 默认为 default

::: CopyCode

```html
<me-color-picker size="default" />
```

:::

### 显示文案

- 通过属性 `showText` 来控制文案是否显示, 默认为 false

::: CopyCode

```html
<me-color-picker v-model="modelValue" show-text />
```

:::

### 自定义文案

- 通过属性 `filterText` 来过滤文案内容。

::: CopyCode

```vue
<template>
  <me-color-picker v-model="modelValue" show-text :filter-text="filterText" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface ModelValue {
  type: 'hex' | 'rgb' | 'hsb'
  value: string
  alpha: number
}

const modelValue = ref<ModelValue>()
const filterText = (record: ModelValue) => '自定义文案'
</script>
```

:::

### 自定义展示

- 通过插槽来展示自定义内容 slot。

::: CopyCode

```html
<me-color-picker v-model="modelValue">
  <div class="custom-content">自定义内容</div>
</me-color-picker>
```

:::

## API

### 参数

| 参数       | 说明         | 类型                          | 可选值                        | 默认值    | 版本    |
| ---------- | ------------ | ----------------------------- | ----------------------------- | --------- | ------- |
| v-model    | 颜色内容     | [ModelValue](#modelvalue)     | --                            | --        | v2.12.0 |
| size       | 大小         | string                        | `small` / `default` / `large` | `default` | v2.12.0 |
| showText   | 文案显示状态 | bolean                        | true / false                  | false     | v2.12.0 |
| filterText | 文案过滤方法 | (value: ModelValue) => string | --                            | --        | v2.12.0 |

#### ModelValue

```ts
interface ModelValue {
  /**
   * 色彩类型
   */
  type: 'hex' | 'rgb' | 'hsb'
  /**
   * 颜色值, 默认为: #409eff
   */
  value: string
  /**
   * 透明度, 0 - 100
   */
  alpha: number
}
```

#### Slots

| 具名插槽 | 说明     | scopedSlots | 版本    |
| -------- | -------- | ----------- | ------- |
| default  | 默认名称 | --          | v2.12.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
