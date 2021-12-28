# Step 步骤条

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeStep, MeStepItem } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeStep.css";
import "mine-h5-ui/lib/theme-default/MeStepItem.css";

const app = createApp(App);
app.use(MeStep);
app.use(MeStepItem);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `active` 属性来设置激活状态。

::: CopyCode

```Vue
<template>
  <me-step :active="active">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(["first"]); // 活动项
    return { active };
  }
});
</script>
```

:::

### 主题类型

- 通过 `type` 属性来设置主题类型，默认为 `primary`。

::: CopyCode

```Vue
<template>
  <me-step :active="active" type="danger">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(["first"]); // 活动项
    return { active };
  }
});
</script>
```

:::

### 自定义主题

- 通过 `color` 属性和 `active-color` 属性来设置自定义主题。

::: CopyCode

```Vue
<template>
  <me-step :active="active" color="#ff66a6" active-color="#a079de">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(["first"]); // 活动项
    return { active };
  }
});
</script>
```

:::

### 自定义图标

- 通过 `icon` 属性和 `active-icon` 属性来设置自定义图标。

::: CopyCode

```Vue
<template>
  <me-step :active="active" color="#ff66a6" active-color="#a079de">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(["first"]); // 活动项
    return { active };
  }
});
</script>
```

:::

### 方向

- 通过 `direction` 属性来设置方向，默认为 `horizontal`。

::: CopyCode

```Vue
<template>
  <me-step :active="active" direction="vertical">
    <me-step-item name="first">
      <h3>状态一</h3>
      <p>2021-12-18 17:51:01</p>
    </me-step-item>
    <me-step-item name="second">
      <h3>状态二</h3>
      <p>2021-12-18 17:51:02</p>
    </me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(["first"]); // 活动项
    return { active };
  }
});
</script>
```

:::

## API

### 参数

#### MeStep

| 参数         | 说明     | 类型   | 可选值                               | 默认值     |
| ------------ | -------- | ------ | ------------------------------------ | ---------- |
| active       | 激活状态 | Array  | --                                   | --         |
| direction    | 显示方向 | string | horizontal / vertical                | horizontal |
| type         | 主题类型 | string | primary / success / warning / danger | primary    |
| color        | 置灰颜色 | string | --                                   | --         |
| active-color | 激活颜色 | string | --                                   | --         |
| icon         | 置灰图标 | string | --                                   | dot        |
| active-icon  | 激活图标 | string | --                                   | radio      |

##### Slots

- ⚠ 注意：此插槽只接 `MeStepItem` 组件。

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

#### MeStepItem

| 参数 | 说明     | 类型            | 可选值 | 默认值 |
| ---- | -------- | --------------- | ------ | ------ |
| name | 索引名称 | string / number | --     | --     |

##### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

### 方法

#### MeStep

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| --     | --   | --       |

#### MeStepItem

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| --     | --   | --       |
