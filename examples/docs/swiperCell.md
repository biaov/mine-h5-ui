# SwiperCell 滑动单元格

---

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeSwiperCell } from "mine-h5-ui";

Vue.use(MeSwiperCell);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过设置 `Slots` 来实现向左拖拽功能。
- 在你的元素上设置 `slot="content"` 来表示你要显示的部分。
- 在你的元素上设置 `slot="hidden"` 来表示你要隐藏的部分。
- 注意：你的隐藏区域要设置宽度，即你的 `slot="hidden"` 元素的宽度，不然可能用不了。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <!-- 滑动单元格 -->
    <me-swiper-cell>
      <h3 class="u-tit" slot="content">{{item.liText}}</h3>
      <div class="m-btns" slot="hidden">
        <me-button type="danger" icon="icon-delete1" @on-click="onDelete">删除</me-button>
      </div>
    </me-swiper-cell>
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
    // 删除按钮
    onDelete() {
      const that = this;
      that.$MeMessageBox.confirm({
        tips: "警告",
        message: "你确定要删除此项吗？",
        onOk() {
          that.$MeToast("删除成功");
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
  .me-swiper-cell {
    // 标题
    .u-tit {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      background: @bg-color;
      color: @font-color;
      font-size: @font-size;
    }
    // 按钮
    .m-btns {
      display: flex;
      justify-content: space-between;
      width: 100px;
      height: 40px;
      line-height: 40px;
      background: @color-danger;
      text-align: center;
      color: @color-default;
      font-size: @font-size;
    }
  }
}
</style>
```

## API

### 参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| --   | --   | --   | --     | --     |

### 方法

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| --     | --   | --       |

### Slots

| 具名插槽 | 说明               | scopedSlots |
| -------- | ------------------ | ----------- |
| content  | 需要显示的内容区域 | --          |
| hidden   | 需要隐藏的内容区域 | --          |
