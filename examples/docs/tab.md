# Tab 标签页

----

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeTab, MeTabItem } from "mine-h5-ui";

Vue.use(MeTab);
Vue.use(MeTabItem);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

* 通过 `v-model` 来设置活动项。
* 通过设置 `MeTabItem` 的 `title` 属性来设置标签内容。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-tab v-model="active" @on-change="onChange">
      <me-tab-item v-for="item in listData" :key="item.id" :title="item.title">{{item.content}}</me-tab-item>
    </me-tab>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0, // 活动索引
      // 列表数据
      listData: [
        {
          id: 1,
          title: "标签一",
          content: "内容一"
        },
        {
          id: 2,
          title: "标签二",
          content: "内容二"
        },
        {
          id: 3,
          title: "标签三",
          content: "内容三"
        },
        {
          id: 4,
          title: "标签四",
          content: "内容四"
        }
      ]
    };
  },
  methods: {
    // 当标签栏改变时
    onChange(index) {
      console.log("活动项" + index);
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

#### MeTab

| 参数         | 说明               | 类型   | 可选值 | 默认值  |
|--------------|--------------------|--------|--------|---------|
| v-model      | 双向绑定弹出层状态 | Number | --     | --      |
| color        | 未激活的颜色       | String | --     | #949494 |
| active-color | 当前激活的颜色     | String | --     | #494949 |
| line-color   | 下划线的颜色       | String | --     | #f56c6c |

##### Slots

* ⚠ 注意：此插槽只接 `MeTabItem` 组件。

| 具名插槽 | 说明     | scopedSlots |
|----------|----------|-------------|
| default  | 默认名称 | --          |

#### MeTabItem

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
|-------|----------|--------|--------|--------|
| title | 标签内容 | string | --     | --     |

### 方法

#### MeTab

| 方法名    | 说明                     | 回调参数     |
|-----------|--------------------------|--------------|
| on-change | 点击列表改变时触发的事件 | index:Number |

#### MeTabItem

| 方法名   | 说明                   | 回调参数 |
|----------|------------------------|----------|
| on-click | 点击列表项时触发的事件 | --       |
