# Checkbox 复选框

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeCheckbox, MeCheckboxGroup } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeCheckbox.css";
import "mine-h5-ui/lib/theme-default/MeCheckboxGroup.css";

const app = createApp(App);
app.use(MeCheckbox);
app.use(MeCheckboxGroup);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定值当前选中项的 name。
- 如果是组合使用，则属性 `name` 必传。

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox">
  <me-checkbox name="1">复选框 1</me-checkbox>
  <me-checkbox name="2">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

### 单独使用

- 通过 `v-model` 绑定值当前是否选中状态。

::: CopyCode

```HTML
<me-checkbox v-model="checkbox">复选框</me-checkbox>
```

:::

### 排列方式

- 通过属性 `shape` 设置复选框的排列方式，默认为 vertical

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox" direction="horizontal">
  <me-checkbox name="1">复选框 1</me-checkbox>
  <me-checkbox name="2">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

### 自定义图标

- 通过属性 `icon` 和 `icon-select` 设置复选框的未选中图标和选中图标，未选中图标的默认值为 icon-radio3，选中图标的默认值为 icon-radio。

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox">
  <me-checkbox name="1" icon="icon-aixinD" icon-select="icon-love">复选框 1</me-checkbox>
  <me-checkbox name="2" icon="icon-aixinD" icon-select="icon-love">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

### 自定义选中颜色

- 通过属性 `checked-color` 设置复选框的选中颜色，默认值为 #409eff。

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox">
  <me-checkbox name="1" checked-color="#f60">复选框 1</me-checkbox>
  <me-checkbox name="2" checked-color="#f60">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

### 自定义大小

- 通过属性 `icon-size` 设置复选框的大小，默认值为 20px。

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox">
  <me-checkbox name="1" icon-size="24px">复选框 1</me-checkbox>
  <me-checkbox name="2" icon-size="24px">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

### 禁用状态

- 通过属性 `disabled` 设置复选框的禁用状态，默认值为 false。

::: CopyCode

```HTML
<me-checkbox-group v-model="checkbox">
  <me-checkbox name="1" :disabled="true">复选框 1</me-checkbox>
  <me-checkbox name="2" :disabled="true">复选框 2</me-checkbox>
</me-checkbox-group>
```

:::

## API

### MeCheckboxGroup

#### 参数

| 参数                | 说明                           | 类型   | 可选值                | 默认值   |
|---------------------|--------------------------------|--------|-----------------------|----------|
| modelValue(v-model) | 双向绑定复选框选项里的 name 值 | Array  | --                    | --       |
| direction           | 排列方式                       | string | vertical / horizontal | vertical |

#### Slots

- ⚠ 注意：此插槽只接 `MeCheckbox` 组件。

| 具名插槽 | 说明     | scopedSlots |
|----------|----------|-------------|
| default  | 默认名称 | --          |

#### 方法

| 方法名    | 说明                     | 回调参数       |
|-----------|--------------------------|----------------|
| on-change | 当绑定值变化时触发的事件 | `array:item[]` |

- item: `string | number`

### MeCheckbox

#### 参数

| 参数                | 说明               | 类型             | 可选值         | 默认值      |
|---------------------|--------------------|------------------|----------------|-------------|
| modelValue(v-model) | 双向绑定复选框状态 | boolean          | true / false   | --          |
| name                | 复选框唯一名称     | [string, number] | --             | --          |
| shape               | 图标形状           | string           | square / round | round       |
| icon                | 自定义图标         | string           | --             | icon-radio3 |
| iconSelect          | 自定义选中图标     | string           | --             | icon-radio  |
| iconSize            | 图标大小           | string           | --             | 20px        |
| checkedColor        | 选中图标颜色       | string           | --             | #409eff     |
| disabled            | 禁用状态           | boolean          | true / false   | false       |

#### Slots

| 具名插槽 | 说明     | scopedSlots |
|----------|----------|-------------|
| default  | 默认名称 | --          |

#### 方法

| 方法名   | 说明                   | 回调参数         |
|----------|------------------------|------------------|
| on-click | 点击复选框时触发的事件 | event:MouseEvent |
