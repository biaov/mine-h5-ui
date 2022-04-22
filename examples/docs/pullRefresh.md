# PullRefresh 下拉刷新

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MePullRefresh } from "mine-h5-ui";

Vue.use(MePullRefresh);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置组件的加载状态。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-pull-refresh v-model="loading" @on-refresh="onRefresh">刷新次数{{count}}</me-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: 0, // 加载状态
      count: 0, // 刷新次数
    };
  },
  methods: {
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.count++;
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
}
</style>
```

### 自定义提示文本

- 通过属性 `load-text` 来设置提示文本，默认为 `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]`。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-pull-refresh v-model="loading" :load-text="loadText" :load-icon="false" @on-refresh="onRefresh">刷新次数{{count}}</me-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: 0, // 加载状态
      count: 0, // 刷新次数
      // 自定义加载文本
      loadText: ["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]
    };
  },
  methods: {
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.count++;
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
}
</style>
```

## API

### 参数

| 参数      | 说明                 | 类型    | 可选值       | 默认值                                                        | 版本 |
| --------- | -------------------- | ------- | ------------ | ------------------------------------------------------------- | ---- |
| v-model   | 双向绑定组件加载状态 | Boolean | --           | --                                                            | --   |
| load-text | 加载文本             | Array   | --           | `["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"]` | --   |
| load-icon | 加载图标显示状态     | Boolean | true / false | true                                                          | --   |

### 方法

| 方法名     | 说明                 | 回调参数 | 版本 |
| ---------- | -------------------- | -------- | ---- |
| on-refresh | 释放下拉时触发的事件 | --       | --   |
