# Popup 弹出层

---

`MINE-H5-UI` 常用的弹出层。

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MePopup } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MePopup.css";

const app = createApp(App);
app.use(MePopup);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置弹出层的状态。

::: CopyCode

```HTML
<me-popup v-model:visible="false"></me-popup>
```

:::

### 弹出位置

- 通过 `position` 属性来设置弹出框位置，支持 `center`、`top`、`right`、`bottom`、`left` 五种关键字，默认为 center。

::: CopyCode

```HTML
<me-popup v-model:visible="false" position="top"></me-popup>
<me-popup v-model:visible="false" position="right"></me-popup>
<me-popup v-model:visible="false" position="bottom"></me-popup>
<me-popup v-model:visible="false" position="left"></me-popup>
```

:::

### 关闭图标

- 通过 `closeable` 属性来设置弹出框的关闭图标的显示，默认为 false。

::: CopyCode

```HTML
<me-popup v-model:visible="false" :closeable="true"></me-popup>
```

:::

### 圆角弹窗

- 通过 `radius` 属性来设置弹出框的倒角，默认为 0。

::: CopyCode

```HTML
<me-popup v-model:visible="false" position="bottom" radius="6px"></me-popup>
```

:::

## API

### 参数

| 参数      | 说明           | 类型    | 可选值                               | 默认值 | 版本 |
| --------- | -------------- | ------- | ------------------------------------ | ------ | ---- |
| visible   | 弹出层显示状态 | boolean | true / false                         | --     | --   |
| position  | 弹窗位置       | string  | center / top / right / bottom / left | center | --   |
| closeable | 关闭图标的显示 | boolean | true / false                         | false  | --   |
| radius    | 弹窗倒角       | string  | --                                   | 0      | --   |

### 方法

| 方法名    | 说明                   | 回调参数 | 版本 |
| --------- | ---------------------- | -------- | ---- |
| on-cancel | 关闭模态框时触发的事件 | --       | --   |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |
