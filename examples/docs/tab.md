# Tab 标签页

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeTab, MeTabItem } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeTab.css";
import "mine-h5-ui/lib/theme-default/MeTabItem.css";

const app = createApp(App);
app.use(MeTab);
app.use(MeTabItem);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置活动项。
- 通过设置 `MeTabItem` 的 `title` 属性来设置标签内容。

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-tab v-model="active" @on-change="onChange">
      <me-tab-item v-for="item in listData" :key="item.id" :name="item.id" :label="item.title" v-text="item.content"></me-tab-item>
    </me-tab>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // 列表数据
    const listData = ref([
      {
        id: 1,
        active: 0,
        label: "基础用法",
        children: [
          {
            id: 1,
            label: "标签一",
            content: "内容一"
          },
          {
            id: 2,
            label: "标签二",
            content: "内容二"
          },
          {
            id: 3,
            label: "标签三",
            content: "内容三"
          },
          {
            id: 4,
            label: "标签四",
            content: "内容四"
          }
        ]
      },
      {
        id: 2,
        active: 0,
        label: "自定义样式",
        color: "#f60",
        activeColor: "#f66",
        lineColor: "#409eff",
        children: [
          {
            id: 1,
            label: "标签一",
            content: "内容一"
          },
          {
            id: 2,
            label: "标签二",
            content: "内容二"
          },
          {
            id: 3,
            label: "标签三",
            content: "内容三"
          },
          {
            id: 4,
            label: "标签四",
            content: "内容四"
          }
        ]
      }
    ]);
    // 当标签栏改变时
    const onChange = index => {
      console.log(`活动项${index}`);
    };
    return { listData, onChange };
  }
});
</script>
<style scoped lang="less">
.m-demo {
}
</style>
```

:::

## API

### 参数

#### MeTab

| 参数                | 说明                              | 类型            | 可选值 | 默认值  |
| ------------------- | --------------------------------- | --------------- | ------ | ------- |
| modelValue(v-model) | 双向绑定弹出层状态,子组件 name 值 | string / number | --     | --      |
| color               | 未激活的颜色                      | string          | --     | #949494 |
| active-color        | 当前激活的颜色                    | string          | --     | #494949 |
| line-color          | 下划线的颜色                      | string          | --     | #f56c6c |

##### Slots

- ⚠ 注意：此插槽只接 `MeTabItem` 组件。

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

#### MeTabItem

| 参数  | 说明     | 类型            | 可选值 | 默认值 |
| ----- | -------- | --------------- | ------ | ------ |
| label | 标签内容 | string          | --     | --     |
| name  | 标签名称 | string / number | --     | --     |

### 方法

#### MeTab

| 方法名    | 说明                     | 回调参数     |
| --------- | ------------------------ | ------------ |
| on-change | 点击列表改变时触发的事件 | index:number |

#### MeTabItem

| 方法名   | 说明                   | 回调参数         |
| -------- | ---------------------- | ---------------- |
| on-click | 点击列表项时触发的事件 | event:MouseEvent |
