# Screenshot 截长图

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from "vue";
import { MeScreenshot } from "mine-h5-ui";

Vue.use(MeScreenshot);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `start` 来设置组件开始截图状态。

```Vue
<template>
  <screenshot v-bind="{start}">
    <p @click="onClick">点击截图</p>
  </screenshot>
</template>
<script>
export default {
  data() {
    return {
      start: false // 截图状态
    };
  },
  methods: {
    // 点击截图
    onClick() {
      this.start = true;
    }
  }
};
</script>
```

### 允许下载

- 通过属性 `allow-down` 来设置组件允许下载状态。

```Vue
<template>
  <screenshot v-bind="{start}" allow-down>
    <p @click="onClick">点击截图</p>
  </screenshot>
</template>
<script>
export default {
  data() {
    return {
      start: false // 截图状态
    };
  },
  methods: {
    // 点击截图
    onClick() {
      this.start = true;
    }
  }
};
</script>
```

## API

### 参数

| 参数       | 说明         | 类型    | 可选值       | 默认值     |
| ---------- | ------------ | ------- | ------------ | ---------- |
| start      | 开始截图状态 | Boolean | true / false | false      |
| allow-down | 允许下载状态 | Boolean | true / false | false      |
| image-name | 下载图片名称 | String  | --           | screenshot |

### 方法

| 方法名   | 说明             | 回调参数                                |
| -------- | ---------------- | --------------------------------------- |
| on-click | 当点击组件时触发 | event: PointerEvent                     |
| on-end   | 当截图结束时触发 | data: string, canvas: HTMLCanvasElement |
