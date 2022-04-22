# Keyboard 数字键盘

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MeKeyboard } from "mine-h5-ui";

Vue.use(MeKeyboard);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置键盘显示。

```HTML
<me-keyboard v-model="isShow"></me-keyboard>
```

### 选择主题样式

- 通过 `skin-type` 属性来设置数字键盘的主题样式，默认为 gray。

```HTML
<me-keyboard v-model="isShow" skin-type="gray"></me-keyboard>
<me-keyboard v-model="isShow" skin-type="dark"></me-keyboard>
```

### 自定义主题样式

- 通过 `skin-style` 属性来设置数字键盘的主题样式。

```HTML
<template>
  <me-keyboard v-model="isShow" :skin-style="skinStyle"></me-keyboard>
</template>
<script>
export default {
  data() {
    return {
      isShow: false, // 数字键盘显示状态
      // 自定义样式
      skinStyle: {
        background: "linear-gradient(-45deg, #4bb0ff, #6149f6)", // 背景色
        textBg: "rgba(255,255,255,0.1)", // 按钮背景色
        color: "#fff" // 按钮颜色
      }
    };
  }
};
</script>
```

## API

### 参数

| 参数       | 说明                                     | 类型    | 可选值       | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ------- | ------------ | ------ | ---- |
| v-model    | 双向绑定数字键盘状态                     | Boolean | true / false | --     | --   |
| is-padding | 键盘激活状态是否要设置 padding-bottom    | Boolean | true / false | true   | --   |
| skin-type  | 主题样式                                 | String  | gray / dark  | gray   | --   |
| skin-style | 自定义主题样式，详见下面 skin-style 属性 | Object  | --           | --     | --   |

### skin-style 属性

| 参数    | 说明           | 类型   | 可选值 | 默认值 | 版本 |
| ------- | -------------- | ------ | ------ | ------ | ---- |
| bgc     | 数字键盘背景色 | String | --     | --     | --   |
| textBgc | 按钮背景色     | String | --     | --     | --   |
| color   | 按钮文字颜色   | String | --     | --     | --   |

### 方法

| 方法名      | 说明                         | 回调参数 | 版本 |
| ----------- | ---------------------------- | -------- | ---- |
| on-click    | 点击键盘数字时触发的事件     | --       | --   |
| on-delete   | 点击键盘删除按钮时触发的事件 | --       | --   |
| on-complate | 点击键盘完成按钮时触发的事件 | --       | --   |
