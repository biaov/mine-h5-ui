# NavBar 导航栏

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeNavBar } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeNavBar.css'

createApp(App).use(MeNavBar).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `title` 属性来设置标题内容，默认为空字符串。
- 通过 `left-text` 属性来设置左侧按钮的内容，默认为空字符串。
- 通过 `right-text` 属性来设置右侧按钮的内容，默认为空字符串。

::: CopyCode

```html
<me-nav-bar title="标题" left-text="返回" right-text="按钮" />
```

:::

### 插槽使用

- 通过 slots 使用插槽。
- 注意：当使用插槽时，请不要使用 `right-text` 属性，因为 `right-text` 属性的权重高于 Slots。

::: CopyCode

```html
<me-nav-bar title="标题" :left-arrow="false">
  <me-icon name="icon-search1" size="20px" color="#409eff" />
</me-nav-bar>
```

:::

### 自定义样式

- 通过 `styles` 属性来设置自定义样式，默认值是一个 Object，[查看详情](#Styles)。

::: CopyCode

```vue
<template>
  <me-nav-bar title="标题" left-text="返回" right-text="自定义" v-bind="{ styles }" />
</template>
<script lang="ts" setup>
/**
 * 自定义样式
 */
const styles = Object.freeze({
  /**
   * 边框颜色
   */
  borderColor: '#ccc',
  /**
   * 背景颜色
   */
  background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)',
  /**
   * 标题颜色
   */
  titleColor: '#f56c6c',
  /**
   * 左侧按钮颜色
   */
  leftColor: '#aedbff',
  /**
   * 右侧按钮颜色
   */
  rightColor: '#fff'
})
</script>
```

:::

## API

### 参数

| 参数       | 说明                      | 类型    | 可选值       | 默认值 | 版本   |
| ---------- | ------------------------- | ------- | ------------ | ------ | ------ |
| title      | 标题                      | string  | --           | --     | v2.0.0 |
| left-arrow | 左侧按钮箭头显示状态      | boolean | true / false | true   | v2.0.0 |
| left-text  | 左侧按钮文本              | Array   | --           | --     | v2.0.0 |
| right-text | 右侧按钮文本              | string  | --           | --     | v2.0.0 |
| styles     | 组件样式，[详情](#styles) | Object  | --           | --     | v2.0.0 |

#### Styles

| 参数         | 说明         | 类型   | 可选值 | 默认值  | 版本   |
| ------------ | ------------ | ------ | ------ | ------- | ------ |
| border-color | 下边框颜色   | string | --     | #dcdfe6 | v2.0.0 |
| background   | 组件背景颜色 | string | --     | #fff    | v2.0.0 |
| title-color  | 标题字体颜色 | string | --     | #494949 | v2.0.0 |
| left-color   | 左侧字体颜色 | string | --     | #949494 | v2.0.0 |
| right-color  | 右侧字体颜色 | string | --     | #949494 | v2.0.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |

### 方法

| 方法名      | 说明                     | 回调参数          | 版本   |
| ----------- | ------------------------ | ----------------- | ------ |
| click-left  | 点击左侧按钮时触发的事件 | event: MouseEvent | v2.0.0 |
| click-right | 点击右侧按钮时触发的事件 | event: MouseEvent | v2.0.0 |
