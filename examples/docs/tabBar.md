# TabBar 标签栏

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeTabBar } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeTabBar.css";

const app = createApp(App);
app.use(MeTabBar);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `list` 属性来设置组件数据，具体的[数据格式详情](#list)。

::: CopyCode

```Vue
<template>
  <me-tab-bar :list="listData"></me-tab-bar>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 列表数据
    const listData = Object.freeze([
      {
        id: 1,
        icon: "icon-home",
        text: "首页",
        state: true
      },
      {
        id: 2,
        icon: "icon-tupian",
        text: "图片",
        state: false
      },
      {
        id: 3,
        icon: "icon-gongnengguanli",
        text: "功能",
        state: false
      },
      {
        id: 4,
        icon: "icon-user1",
        text: "用户",
        state: false
      }
    ]);
    return { listData };
  }
});
</script>
```

:::

### 徽标提示

- 通过 `dot` 和 `badge` 来设置组件右上角的点和徽标提示。
- 注意：`dot` 的权重高于 `badge` 的权重。

::: CopyCode

```Vue
<template>
  <me-tab-bar :list="listData"></me-tab-bar>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 列表数据
    const listData = Object.freeze([
      {
        id: 1,
        icon: "icon-home",
        text: "首页",
        state: true
      },
      {
        id: 2,
        icon: "icon-tupian",
        text: "图片",
        badge: "6",
        state: false
      },
      {
        id: 3,
        icon: "icon-gongnengguanli",
        text: "功能",
        badge: "A",
        state: false
      },
      {
        id: 4,
        icon: "icon-user1",
        text: "用户",
        dot: true,
        state: false
      }
    ]);
    return { listData };
  }
});
</script>
```

:::

### 自定义图标

- 通过 `img` 和 `imgSelected` 来设置组件未选中和选中状态的图标。
- 注意：
  - `img` 和 `imgSelected` 是成对出现的。
  - `icon` 的权重高于 `img` 和 `imgSelected` 的权重。

::: CopyCode

```Vue
<template>
  <me-tab-bar :list="listData"></me-tab-bar>
</template>
<script>
import { defineComponent } from "vue";
import img from "^/assets/verify.png";
import imgSelected from "^/assets/verify_selected.png";

export default defineComponent({
  setup() {
    // 列表数据
    const listData = Object.freeze([
      {
        id: 1,
        text: "安全",
        state: true,
        img,
        imgSelected
      },
      {
        id: 2,
        icon: "icon-tupian",
        text: "图片",
        state: false
      },
      {
        id: 3,
        icon: "icon-gongnengguanli",
        text: "功能",
        state: false
      },
      {
        id: 4,
        icon: "icon-user1",
        text: "用户",
        state: false
      }
    ]);
    return { listData };
  }
});
</script>
```

:::

### 自定义颜色

- 通过 `border-color` 和 `background` 属性来设置组件的背景颜色和上边框颜色，它们的默认分别为 #dcdfe6 和 #fff。
- 通过 `color` 和 `color-selected` 属性来设置组件未选中和选中状态的颜色，它们的默认分别为 #949494 和 #409eff。

::: CopyCode

```Vue
<template>
  <me-tab-bar :list="listData" v-bind="colors"></me-tab-bar>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 自定义颜色
    const colors = Object.freeze({
      color: "", // 颜色
      colorSelected: "", // 选中颜色
      background: "", // 背景颜色
      borderColor: "" // 上边框颜色
    });
    // 列表数据
    const listData = Object.freeze([
      {
        id: 1,
        icon: "icon-home",
        text: "首页",
        state: true
      },
      {
        id: 2,
        icon: "icon-tupian",
        text: "图片",
        state: false
      },
      {
        id: 3,
        icon: "icon-gongnengguanli",
        text: "功能",
        state: false
      },
      {
        id: 4,
        icon: "icon-user1",
        text: "用户",
        state: false
      }
    ]);
    return { colors, listData };
  }
});
</script>

```

:::

## API

### 参数

| 参数          | 说明                              | 类型   | 可选值 | 默认值  |
| ------------- | --------------------------------- | ------ | ------ | ------- |
| list          | 组件数据，对象数组，[详情](#list) | Array  | --     | --      |
| border-color  | 组件上边框颜色                    | string | --     | #dcdfe6 |
| background    | 组件背景颜色                      | string | --     | #fff    |
| color         | 未选中状态颜色                    | string | --     | #949494 |
| colorSelected | 选中状态颜色                      | string | --     | #409eff |

<h4 id="list">List</h4>

| 参数        | 说明                 | 类型    | 可选值       | 默认值 |
| ----------- | -------------------- | ------- | ------------ | ------ |
| icon        | 图标                 | string  | --           | --     |
| text        | 文本内容             | string  | --           | --     |
| dot         | 图标右上角的点       | boolean | true / false | --     |
| state       | 选中状态             | boolean | true / false | --     |
| badge       | 图标右上角徽标的内容 | string  | --           | --     |
| img         | 自定义未选中图标     | string  | --           | --     |
| imgSelected | 自定义选中图标       | string  | --           | --     |

### 方法

| 方法名    | 说明                   | 回调参数    |
| --------- | ---------------------- | ----------- |
| on-change | 点击列表项时触发的事件 | item:Object |
