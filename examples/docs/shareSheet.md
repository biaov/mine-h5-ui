# ShareSheet 分享面板

----

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeShareSheet } from "mine-h5-ui";

Vue.use(MeShareSheet);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

* 通过 `v-model` 来设置分享面板的显示和隐藏。
* 通过属性 `tips` 来设置分享面板的提示文本。

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

| 参数    | 说明                 | 类型    | 可选值 | 默认值         |
|---------|----------------------|---------|--------|----------------|
| v-model | 双向绑定组件显示状态 | Boolean | --     | --             |
| list    | 对象数组数据         | Array   | --     | --             |
| tips    | 提示文本             | String  | --     | 立即分享给好友 |

### 方法

| 方法名    | 说明                     | 回调参数            |
|-----------|--------------------------|---------------------|
| on-change | 点击分享列表时触发的事件 | object:选中的对象值 |
| on-cancel | 点击取消按钮时触发的事件 | --                  |
