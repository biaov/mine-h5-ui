# NavBar 导航栏

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeNavBar } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeNavBar.css";

const app = createApp(App);
app.use(MeNavBar);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `title` 属性来设置标题内容，默认为空字符串。
- 通过 `left-text` 属性来设置左侧按钮的内容，默认为空字符串。
- 通过 `right-text` 属性来设置右侧按钮的内容，默认为空字符串。

::: CopyCode

```HTML
<me-nav-bar title="标题" left-text="返回" right-text="按钮"></me-nav-bar>
```

:::

### 插槽使用

- 通过 slots 使用插槽。
- 注意：当使用插槽时，请不要使用 `right-text` 属性，因为 `right-text` 属性的权重高于 Slots。

::: CopyCode

```HTML
<me-nav-bar title="标题" :left-arrow="false">
  <me-icon name="icon-search1" size="20px" color="#409eff"></me-icon>
</me-nav-bar>
```

:::

### 自定义样式

- 通过 `styles` 属性来设置自定义样式，默认值是一个 Object，[查看详情](#Styles)。

::: CopyCode

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-nav-bar title="标题" left-text="返回" right-text="自定义" :styles="styles"></me-nav-bar>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 自定义样式
    const styles = Object.freeze({
      borderColor: "#ccc", // 边框颜色
      background: "linear-gradient(-45deg, #4bb0ff, #6149f6)", // 背景颜色
      titleColor: "#f56c6c", // 标题颜色
      leftColor: "#aedbff", // 左侧按钮颜色
      rightColor: "#fff" // 右侧按钮颜色
    });
    return { styles };
  }
});
</script>
```

:::

## API

### 参数

| 参数       | 说明                      | 类型    | 可选值       | 默认值 |
| ---------- | ------------------------- | ------- | ------------ | ------ |
| title      | 标题                      | string  | --           | --     |
| left-arrow | 左侧按钮箭头显示状态      | boolean | true / false | true   |
| left-text  | 左侧按钮文本              | Array   | --           | --     |
| right-text | 右侧按钮文本              | string  | --           | --     |
| styles     | 组件样式，[详情](#Styles) | Object  | --           | --     |

<h4 id="Styles">Styles</h4>

| 参数         | 说明         | 类型   | 可选值 | 默认值  |
| ------------ | ------------ | ------ | ------ | ------- |
| border-color | 下边框颜色   | string | --     | #dcdfe6 |
| background   | 组件背景颜色 | string | --     | #fff    |
| title-color  | 标题字体颜色 | string | --     | #494949 |
| left-color   | 左侧字体颜色 | string | --     | #949494 |
| right-color  | 右侧字体颜色 | string | --     | #949494 |

### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

### 方法

| 方法名      | 说明                     | 回调参数         |
| ----------- | ------------------------ | ---------------- |
| click-left  | 点击左侧按钮时触发的事件 | event:MouseEvent |
| click-right | 点击右侧按钮时触发的事件 | event:MouseEvent |
