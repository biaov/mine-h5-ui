# ActionSheet 动作面板

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeActionSheet } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeActionSheet.css";

const app = createApp(App);
app.use(MeActionSheet);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model:visible` 来设置动作面板的显示和隐藏。
- 通过 `list` 属性来设置需要展示的值，list 为一个对象数组，必传。
- 对象必须包含 id 值和 value 值，可以使用 `index` 和 `label` 属性来设置其它的名称，默认分别为 id 和 value。

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-action-sheet v-model:visible="visible" :list="listData" index="id" label="value"></me-action-sheet>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const visible = ref(false); // 动作面板的显示状态
    // 列表数据
    const listData = ref([
      {
        id: 1,
        value: "微信",
        label: "Wechat"
      },
      {
        id: 2,
        value: "支付宝",
        label: "Alipay"
      }
    ]);
    return { visible, listData };
  }
});
</script>
```

:::

## API

### 参数

| 参数                     | 说明                 | 类型    | 可选值 | 默认值 |
| ------------------------ | -------------------- | ------- | ------ | ------ |
| visible(v-model:visible) | 双向绑定组件显示状态 | boolean | --     | --     |
| list                     | 对象数组数据         | Array   | --     | --     |
| index                    | key 值索引属性名     | string  | --     | id     |
| label                    | 数据展示属性名       | string  | --     | value  |

### 方法

| 方法名    | 说明                     | 回调参数            |
| --------- | ------------------------ | ------------------- |
| on-change | 点击数据列表时触发的事件 | object:选中的对象值 |
| on-cancel | 点击取消按钮时触发的事件 | event:MouseEvent    |
