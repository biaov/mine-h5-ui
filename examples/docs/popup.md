# Popup 弹出层

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MePopup } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MePopup.css'

createApp(App).use(MePopup).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置弹出层的状态。

::: CopyCode

```html
<me-popup v-model:visible="false" />
```

:::

### 弹出位置

- 通过 `position` 属性来设置弹出框位置，支持 `center`、`top`、`right`、`bottom`、`left` 五种关键字，默认为 center。

::: CopyCode

```html
<me-popup v-model:visible="false" position="top" />
<me-popup v-model:visible="false" position="right" />
<me-popup v-model:visible="false" position="bottom" />
<me-popup v-model:visible="false" position="left" />
```

:::

### 关闭图标

- 通过 `closeable` 属性来设置弹出框的关闭图标的显示，默认为 false。

::: CopyCode

```html
<me-popup v-model:visible="false" :closeable="true" />
```

:::

### 圆角弹窗

- 通过 `radius` 属性来设置弹出框的倒角，默认为 0。

::: CopyCode

```html
<me-popup v-model:visible="false" position="bottom" radius="6px" />
```

:::

## API

### 参数

| 参数                     | 说明           | 类型    | 可选值                               | 默认值 | 版本   |
| ------------------------ | -------------- | ------- | ------------------------------------ | ------ | ------ |
| visible(v-model:visible) | 弹出层显示状态 | boolean | true / false                         | --     | v2.0.0 |
| position                 | 弹窗位置       | string  | center / top / right / bottom / left | center | v2.0.0 |
| closeable                | 关闭图标的显示 | boolean | true / false                         | false  | v2.0.0 |
| radius                   | 弹窗倒角       | string  | --                                   | 0      | v2.0.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |

### 方法

| 方法名 | 说明                   | 回调参数 | 版本   |
| ------ | ---------------------- | -------- | ------ |
| cancel | 关闭模态框时触发的事件 | --       | v2.3.5 |
