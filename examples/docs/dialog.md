# Dialog 对话框

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MeDialog } from "mine-h5-ui";

Vue.use(MeDialog);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置对话框的显示和隐藏。
- 通过属性 `tips` 来设置顶部的提示文本。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <div @click="handleClick">点击弹出自义定弹出框</div>
    <me-dialog v-model="visible" tips="提示">
      <div class="m-text">走在斑马线上的好处：<br />我就是一个行人，<br />赔的多一点！</div>
      <div class="m-btn">
        <button type="button" class="u-btn-cancel" @click="onCancel">取消</button>
        <button type="button" class="u-btn-confirm" @click="onConfirm">确定</button>
      </div>
    </me-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false // 对话框显示状态
    };
  },
  methods: {
    // 点击文本
    handleClick() {
      this.visible = true;
    },
    // 点击取消按钮
    onCancel() {
      const that = this;
      that.visible = false;
      that.$MeToast("你点击了取消按钮");
    },
    // 点击确定按钮
    onConfirm() {
      const that = this;
      that.visible = false;
      that.$MeToast("你点击了确定按钮");
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
  .me-dialog {
    .m-text {
      padding: 0 10px 16px;
      text-align: center;
      color: @font-color;
      font-size: @font-size;
    }
  }
}
</style>
```

## API

### 参数

| 参数    | 说明                 | 类型    | 可选值 | 默认值 | 版本 |
| ------- | -------------------- | ------- | ------ | ------ | ---- |
| v-model | 双向绑定组件显示状态 | Boolean | --     | --     | --   |
| tips    | 提示文本             | String  | --     | 提示   | --   |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |
