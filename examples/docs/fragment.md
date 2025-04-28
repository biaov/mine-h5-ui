# Fragment 图片碎片化

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeFragment } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeFragment.css'

createApp(App).use(MeFragment).mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `url` 来设置组件的图片地址。

::: CopyCode

```html
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" />
```

:::

### 自定义图片大小

- 通过属性 `width` 来设置图片的宽度，默认为 `100%`。
- 通过属性 `height` 来设置图片的高度，默认为 `300px`。

::: CopyCode

```html
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" width="300px" height="260px" />
```

:::

### 是否开启随机位置

- 通过属性 `random` 来设置组件的是否开启随机位置，默认为 `true`。

::: CopyCode

```html
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :random="false" />
```

:::

### 自定义滑块位置

- 通过属性 `slideStyle` 来设置组件的滑块样式，默认为 `slideStyle`。
- slideStyle:

```js
export default {
  /**
   * 滑块的高度
   */
  height: '40px',
  /**
   * 滑块的背景色
   */
  background: '#f6f6f6',
  /**
   * 拖动点的背景色
   */
  dotBackground: '#409eff',
  /**
   * 提示文字的颜色
   */
  tips: '#494949'
}
```

::: CopyCode

```vue
<script setup>
const slideStyle = {
  height: '30px',
  background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
  dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
  tips: '#fff'
}
</script>

<template>
  <me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :slideStyle="slideStyle" />
</template>
```

:::

### 提示文字

- 通过属性 `tips` 来设置组件的是否开启随机位置，默认为 `按住左边按钮向右拖动完成上方图像验证`。

::: CopyCode

```html
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" tips="这是一段提示文字" />
```

:::

### 容错值

- 通过属性 `range` 来设置组件的容错值，默认为 `5`。

::: CopyCode

```html
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :range="20" />
```

:::

## API

### 参数

| 参数       | 说明     | 类型    | 可选值       | 默认值                               | 版本    |
| ---------- | -------- | ------- | ------------ | ------------------------------------ | ------- |
| url        | 图片地址 | string  | --           | --                                   | v2.3.10 |
| width      | 图片宽度 | string  | --           | 100%                                 | v2.3.10 |
| height     | 图片高度 | string  | --           | 300px                                | v2.3.10 |
| random     | 随机位置 | boolean | true / false | true                                 | v2.3.10 |
| slideStyle | 滑块样式 | Object  | --           | [slideStyle](#slidestyle)            | v2.3.10 |
| tips       | 提示语   | string  | --           | 按住左边按钮向右拖动完成上方图像验证 | v2.3.10 |
| range      | 容错值   | number  | --           | 5                                    | v2.3.10 |

### slideStyle

| 参数          | 说明         | 类型   | 可选值 | 默认值  | 版本    |
| ------------- | ------------ | ------ | ------ | ------- | ------- |
| height        | 滑块高度     | string | --     | 40px    | v2.3.10 |
| background    | 滑块背景色   | string | --     | #f6f6f6 | v2.3.10 |
| dotBackground | 拖动点背景色 | string | --     | #409eff | v2.3.10 |
| tips          | 提示语颜色   | string | --     | #494949 | v2.3.10 |

### 方法

| 方法名 | 说明                   | 回调参数       | 版本    |
| ------ | ---------------------- | -------------- | ------- |
| change | 拖动点拖动时触发的事件 | event: boolean | v2.3.10 |
