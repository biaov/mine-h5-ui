# JigsawValidate 拼图校验

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeJigsawValidate } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeJigsawValidate.css'

const app = createApp(App)
app.use(MeJigsawValidate)
app.mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `url` 来设置组件的图片地址。

::: CopyCode

```HTML
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60"></me-jigsaw-validate>
```

:::

### 自定义图片大小

- 通过属性 `width` 来设置图片的宽度，默认为 `100%`。
- 通过属性 `height` 来设置图片的高度，默认为 `300px`。

::: CopyCode

```HTML
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" width="300px" height="260px"></me-jigsaw-validate>
```

:::

### 是否开启随机位置

- 通过属性 `random` 来设置组件的是否开启随机位置，默认为 `true`。

::: CopyCode

```HTML
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :random="false"></me-jigsaw-validate>
```

:::

### 自定义滑块位置

- 通过属性 `slideStyle` 来设置组件的滑块样式，默认为 `slideStyle`。
- slideStyle:

```JS

{
  height: '40px', // 滑块的高度
  background: '#f6f6f6', // 滑块的背景色
  dotBackground: '#409eff', // 拖动点的背景色
  tips: '#494949' // 提示文字的颜色
}
```

::: CopyCode

```vue
<template>
  <me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :slideStyle="slideStyle"></me-jigsaw-validate>
</template>
<script setup>
const slideStyle = {
  height: '30px',
  background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
  dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
  tips: '#fff'
}
</script>
```

:::

### 提示文字

- 通过属性 `tips` 来设置组件的是否开启随机位置，默认为 `按住左边按钮向右拖动完成上方图像验证`。

::: CopyCode

```HTML
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" tips="这是一段提示文字"></me-jigsaw-validate>
```

:::

### 容错值

- 通过属性 `range` 来设置组件的容错值，默认为 `5`。

::: CopyCode

```HTML
<me-jigsaw-validate url="https://dummyimage.com/340x300/f60" :range="20"></me-jigsaw-validate>
```

:::

## API

### 参数

| 参数       | 说明     | 类型    | 可选值       | 默认值                               | 版本   |
| ---------- | -------- | ------- | ------------ | ------------------------------------ | ------ |
| url        | 图片地址 | string  | --           | --                                   | 2.3.10 |
| width      | 图片宽度 | string  | --           | 100%                                 | 2.3.10 |
| height     | 图片高度 | string  | --           | 300px                                | 2.3.10 |
| random     | 随机位置 | boolean | true / false | true                                 | 2.3.10 |
| slideStyle | 滑块样式 | Object  | --           | [slideStyle](#slideStyle)            | 2.3.10 |
| tips       | 提示语   | string  | --           | 按住左边按钮向右拖动完成上方图像验证 | 2.3.10 |
| range      | 容错值   | number  | --           | 5                                    | 2.3.10 |

<h3 id="slideStyle">slideStyle</h3>

| 参数          | 说明         | 类型   | 可选值 | 默认值  | 版本   |
| ------------- | ------------ | ------ | ------ | ------- | ------ |
| height        | 滑块高度     | string | --     | 40px    | 2.3.10 |
| background    | 滑块背景色   | string | --     | #f6f6f6 | 2.3.10 |
| dotBackground | 拖动点背景色 | string | --     | #409eff | 2.3.10 |
| tips          | 提示语颜色   | string | --     | #494949 | 2.3.10 |

### 方法

| 方法名 | 说明                   | 回调参数   | 版本   |
| ------ | ---------------------- | ---------- | ------ |
| change | 拖动点拖动时触发的事件 | e: boolean | 2.3.10 |
