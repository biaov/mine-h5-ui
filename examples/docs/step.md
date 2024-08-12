# Step 步骤条

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeStep, MeStepItem } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeStep.css'
import 'mine-h5-ui/styles/MeStepItem.css'

createApp(App).use(MeStep).use(MeStepItem).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `active` 属性来设置激活状态。

::: CopyCode

```vue
<script lang="ts" setup>
import { ref } from 'vue'

/**
 * 活动项
 */
const active = ref(['first'])
</script>

<template>
  <me-step :active="active">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
```

:::

### 主题类型

- 通过 `type` 属性来设置主题类型，默认为 `primary`。

::: CopyCode

```html
<me-step :active="active" type="danger">
  <me-step-item name="first">步骤一</me-step-item>
  <me-step-item name="second">步骤二</me-step-item>
</me-step>
```

:::

### 自定义主题

- 通过 `color` 属性和 `active-color` 属性来设置自定义主题。

::: CopyCode

```html
<me-step :active="active" color="#ff66a6" active-color="#a079de">
  <me-step-item name="first">步骤一</me-step-item>
  <me-step-item name="second">步骤二</me-step-item>
</me-step>
```

:::

### 自定义图标

- 通过 `icon` 属性和 `active-icon` 属性来设置自定义图标。

::: CopyCode

```html
<me-step :active="active" icon="in_biyan" active-icon="in_zhengyan">
  <me-step-item name="first">步骤一</me-step-item>
  <me-step-item name="second">步骤二</me-step-item>
</me-step>
```

:::

### 方向

- 通过 `direction` 属性来设置方向，默认为 `horizontal`。

::: CopyCode

```html
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
```

:::

## API

### 参数

#### MeStep

| 参数         | 说明     | 类型   | 可选值                               | 默认值     | 版本   |
| ------------ | -------- | ------ | ------------------------------------ | ---------- | ------ |
| active       | 激活状态 | Array  | --                                   | --         | v2.0.0 |
| direction    | 显示方向 | string | horizontal / vertical                | horizontal | v2.0.0 |
| type         | 主题类型 | string | primary / success / warning / danger | primary    | v2.0.0 |
| color        | 置灰颜色 | string | --                                   | --         | v2.0.0 |
| active-color | 激活颜色 | string | --                                   | --         | v2.0.0 |
| icon         | 置灰图标 | string | --                                   | dot        | v2.0.0 |
| active-icon  | 激活图标 | string | --                                   | radio      | v2.0.0 |

##### Slots

- ⚠ 注意：此插槽只接 `MeStepItem` 组件。

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |

#### MeStepItem

| 参数 | 说明     | 类型            | 可选值 | 默认值 | 版本   |
| ---- | -------- | --------------- | ------ | ------ | ------ |
| name | 索引名称 | string / number | --     | --     | v2.0.0 |

##### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |

### 方法

#### MeStep

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |

#### MeStepItem

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
