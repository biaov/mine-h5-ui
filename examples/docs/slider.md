# Slider 滑块

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeSlider } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeSlider.css";

const app = createApp(App);
app.use(MeSlider);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置滑块的值。

::: CopyCode

```HTML
<me-slider v-model="value"></me-slider>
```

:::

### 自定义范围

- 通过 `max` 和 `min` 属性来设置滑块的范围。max 和 min 属性的默认值分别为 100，0。

::: CopyCode

```HTML
<me-slider v-model="value" :max="50" :min="-50"></me-slider>
```

:::

### 自定义样式

- 通过 `styles` 属性来设置滑块的样式。它是一个 Object。具体请[查看详情](#styles)。

::: CopyCode

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-slider v-model="sliderValue" :styles="styles"></me-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const sliderValue = ref(30); // 当前滑块值
    // 自定义滑块样式
    const styles = Object.freeze({
      height: "10px", // 高度
      radius: "6px", // 倒角
      lineBgc: "#f60" // 线背景色
    });
    return { sliderValue, styles };
  }
});
</script>
```

:::

### 自定义按钮

- 通过 `is-btn` 属性 和 `slot` 来设置滑块的自定义按钮。默认为 false。

::: CopyCode

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-slider v-model="sliderValue" :is-btn="true">
      <div class="u-btn" v-text="sliderValue"></div>
    </me-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const sliderValue = ref(30); // 当前滑块值
    return { sliderValue };
  }
});
</script>
<style scoped lang="less">
.m-demo {
  .me-slider {
    .u-btn {
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 3px;
      background: #f60;
      text-align: center;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
```

:::

### 禁用状态

- 通过 `disabled` 属性来设置滑块的禁用状态。默认为 false。

::: CopyCode

```HTML
<me-slider v-model="value" :disabled="true"></me-slider>
```

:::

## API

### 参数

| 参数                | 说明                            | 类型    | 可选值       | 默认值 | 版本 |
| ------------------- | ------------------------------- | ------- | ------------ | ------ | ---- |
| modelValue(v-model) | 双向绑定滑块的值                | number  | --           | --     | --   |
| max                 | 范围最大值                      | number  | --           | 100    | --   |
| min                 | 范围最小值                      | number  | --           | 0      | --   |
| styles              | 自定义样式，[查看详情](#styles) | Object  | --           | --     | --   |
| is-btn              | 自定义按钮                      | boolean | true / false | false  | --   |
| disabled            | 禁用状态                        | boolean | true / false | false  | --   |

<h3 id="styles">styles 属性</h3>

| 参数    | 说明                           | 类型   | 可选值 | 默认值  | 版本 |
| ------- | ------------------------------ | ------ | ------ | ------- | ---- |
| height  | 线条高度                       | string | --     | 2px     | --   |
| radius  | 线条倒角                       | string | --     | 2px     | --   |
| lineBgc | 线条背景色，支持 background 值 | string | --     | #409eff | --   |

### 方法

| 方法名   | 说明                 | 回调参数    | 版本 |
| -------- | -------------------- | ----------- | ---- |
| on-start | 开始拖动时触发的事件 | event:Event | --   |
| on-move  | 正在拖动中触发的事件 | event:Event | --   |
| on-end   | 结束拖动时触发的事件 | event:Event | --   |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |
