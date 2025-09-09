# Stepper 步进器 `v2.16.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeStepper } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeStepper.css'

createApp(App).use(MeStepper).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来进行双向绑定

::: CopyCode

```html
<me-stepper v-model="modelValue" />
```

:::

### 自定义大小

- 通过属性 `inputWidth` 来控制输入框的宽度，默认值为 `60px`
- 通过属性 `height` 来控制组件的高度，默认值为 `36px`
- 通过属性 `fontSize` 来控制字体大小，默认值为 `14px`

::: CopyCode

```html
<me-stepper input-width="80px" height="40px" font-size="16px" />
```

:::

### 自定义颜色

- 通过属性 `color` 来控制文字的颜色，默认值为 `#494949`
- 通过属性 `borderColor` 来控制边框的颜色，默认值为 `#dcdfe6`
- 通过属性 `disabledColor` 来控制禁止颜色，默认值为 `#c8c9cc`

::: CopyCode

```html
<me-stepper color="#409eff" border-color="#409eff" disabled-color="#a4d1ff" />
```

:::

### 小数位

- 通过属性 `step` 来控制组件的步长，默认值为 `1`。

::: CopyCode

```html
<me-stepper :step="0.1" />
```

:::

### 禁用

- 通过属性 `disabled` 来控制禁用状态，默认值为 `false`。

::: CopyCode

```html
<me-stepper disabled />
```

:::

## API

### 参数

| 参数          | 说明             | 类型    | 可选值       | 默认值  | 版本    |
| ------------- | ---------------- | ------- | ------------ | ------- | ------- |
| v-model       | 输入内容         | string  | number       | 1       | v2.16.0 |
| max           | 输入的最大值     | number  | --           | 999     | v2.16.0 |
| min           | 输入的最小值     | number  | --           | 1       | v2.16.0 |
| step          | 步长             | number  | --           | 1       | v2.16.0 |
| maxlength     | 输入框的最大长度 | number  | --           | 3       | v2.16.0 |
| height        | 组件的高度       | string  | number       | 36px    | v2.16.0 |
| inputWidth    | 输入框的宽度     | string  | number       | 60px    | v2.16.0 |
| fontSize      | 字体大小         | string  | number       | 14px    | v2.16.0 |
| color         | 文字颜色         | string  | --           | #494949 | v2.16.0 |
| borderColor   | 边框颜色         | string  | --           | #dcdfe6 | v2.16.0 |
| disabledColor | 禁用颜色         | string  | --           | #c8c9cc | v2.16.0 |
| disabled      | 禁用状态         | boolean | true / false | false   | v2.16.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
