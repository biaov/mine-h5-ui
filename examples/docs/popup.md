# Popup 弹出层

---

`MINE-H5-UI` 常用的弹出层。

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MePopup } from "mine-h5-ui";

Vue.use(MePopup);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置弹出层的状态。

```HTML
<me-popup v-model="false"></me-popup>
```

### 弹出位置

- 通过 `position` 属性来设置弹出框位置，支持 `center`、`top`、`right`、`bottom`、`left` 五种关键字，默认为 center。

```HTML
<me-popup v-model="false" position="top"></me-popup>
<me-popup v-model="false" position="right"></me-popup>
<me-popup v-model="false" position="bottom"></me-popup>
<me-popup v-model="false" position="left"></me-popup>
```

### 关闭图标

- 通过 `closeable` 属性来设置弹出框的关闭图标的显示，默认为 false。

```HTML
<me-popup v-model="false" :closeable="true"></me-popup>
```

### 圆角弹窗

- 通过 `radius` 属性来设置弹出框的倒角，默认为 0。

```HTML
<me-popup v-model="false" position="bottom" radius="6px"></me-popup>
```

## API

### 参数

| 参数      | 说明               | 类型    | 可选值                               | 默认值 | 版本 |
| --------- | ------------------ | ------- | ------------------------------------ | ------ | ---- |
| v-model   | 双向绑定弹出层状态 | Boolean | true / false                         | --     | --   |
| position  | 弹窗位置           | String  | center / top / right / bottom / left | center | --   |
| closeable | 关闭图标的显示     | Boolean | true / false                         | false  | --   |
| radius    | 弹窗倒角           | String  | --                                   | 0      | --   |

### 方法

| 方法名    | 说明                   | 回调参数 | 版本 |
| --------- | ---------------------- | -------- | ---- |
| on-cancel | 关闭模态框时触发的事件 | --       | --   |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |
