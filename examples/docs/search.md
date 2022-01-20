# Search 搜索

---

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeSearch } from "mine-h5-ui";

Vue.use(MeSearch);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置搜索框的值。

:::demo

```HTML
<me-search v-model="value"></me-search>
```

:::

### 占位符内容

- 通过 `placeholder` 属性来设置搜索框的占位符内容，默认为**请搜索**。

:::demo

```HTML
<me-search v-model="value" placeholder="请输入搜索内容"></me-search>
```

:::

### 自定义右侧按钮内容

- 通过 `btnText` 属性来设置搜索框右侧按钮内容。

:::demo

```HTML
<template>
  <!-- 演示 -->
  <div class="m-demo">
    <me-search v-model="value" btnText="取消" @on-click="btnCancel"></me-search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "" // 当前搜索框值
    };
  },
  methods: {
    // 点击取消按钮
    btnCancel(){
      this.$MeToast("点击了取消按钮");
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {

}
</style>
```

:::

### 对齐方式

- 通过 `align` 属性来设置搜索框的内容对齐方式，默认为 left。

:::demo

```HTML
<me-search v-model="value" align="center"></me-search>
```

:::

### 设置倒角

- 通过 `radius` 属性来设置搜索框的倒角，支持 CSS 的 border-radius 值，默认为 4px。

:::demo

```HTML
<me-search v-model="value" radius="20px"></me-search>
```

:::

### 自定义样式

- 通过 `background` 和 `color` 属性来设置搜索框的样式，支持 CSS 的 background 和 color 值，background 默认值为 #f6f6f6，color 默认值为 #494949。

:::demo

```HTML
<me-search v-model="value" background="linear-gradient(-45deg, #4bb0ff, #6149f6)" color="#fff"></me-search>
```

:::

### 禁用搜索框

- 通过 `disabled` 属性来设置搜索框的禁用状态，默认为 false。

:::demo

```HTML
<me-search v-model="value" :disabled="true"></me-search>
```

:::

## API

### 参数

| 参数        | 说明               | 类型    | 可选值                                    | 默认值  |
| ----------- | ------------------ | ------- | ----------------------------------------- | ------- |
| v-model     | 双向绑定弹出层状态 | Boolean | true / false                              | --      |
| placeholder | 搜索框占位符       | String  | --                                        | 请搜索  |
| btnText     | 搜索框右侧内容     | String  | --                                        | --      |
| align       | 搜索框内容对齐方式 | String  | left / center / right / justify / inherit | left    |
| radius      | 搜索框倒角         | String  | --                                        | 4px     |
| background  | 搜索框背景颜色     | String  | --                                        | #f6f6f6 |
| color       | 搜索框字体颜色     | String  | --                                        | #494949 |
| disabled    | 搜索框禁用状态     | Boolean | true / false                              | false   |

### 方法

| 方法名    | 说明                                      | 回调参数    |
| --------- | ----------------------------------------- | ----------- |
| on-focus  | 输入框聚焦时触发的事件                    | event:Event |
| on-search | 输入框点击软键盘搜索/回车按钮时触发的事件 | event:Event |
| on-input  | 输入框输入时触发的事件                    | event:Event |
| on-change | 输入框内容发生改变时触发的事件            | event:Event |
| on-blur   | 输入框移除焦点时触发的事件                | event:Event |
