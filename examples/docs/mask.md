# Mask 遮罩层

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MeMask } from "mine-h5-ui";

Vue.use(MeMask);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置遮罩层的显示和隐藏。

```HTML
<me-mask v-model="false"></me-mask>
```

### 设置内容

- 通过 slot 来设置内容。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-mask v-model="visible">
      <me-loading type="circle2" color="#f56c6c" size="100px">
        <div class="u-text">加载中...</div>
      </me-loading>
    </me-mask>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.m-demo {
  .me-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    .u-text {
      padding-top: 10px;
      text-align: center;
      color: @color-default;
    }
  }
}
</style>
```

## API

### 参数

| 参数    | 说明             | 类型    | 可选值 | 默认值 |
| ------- | ---------------- | ------- | ------ | ------ |
| v-model | 遮罩层的显示状态 | Boolean | --     | --     |

### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |
