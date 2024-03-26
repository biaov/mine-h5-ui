# Radio 单选框

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeRadio, MeRadioGroup } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeRadio.css'
import 'mine-h5-ui/styles/MeRadioGroup.css'

createApp(App).use(MeRadio).use(MeRadioGroup).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定值当前选中项的 name。

::: CopyCode

```html
<me-radio-group v-model="radio">
  <me-radio name="1">单选框 1</me-radio>
  <me-radio name="2">单选框 2</me-radio>
</me-radio-group>
```

:::

### 单独使用

- 通过 `v-model` 绑定值当前是否选中状态。

::: CopyCode

```html
<me-radio v-model="radio">单选框</me-radio>
```

:::

### 排列方式

- 通过属性 `shape` 设置单选框的排列方式，默认为 round。

::: CopyCode

```html
<me-radio-group v-model="radio" shape="square">
  <me-radio name="1">单选框 1</me-radio>
  <me-radio name="2">单选框 2</me-radio>
</me-radio-group>
```

:::

### 自定义图标

- 通过属性 `icon` 和 `icon-select` 设置单选框的未选中图标和选中图标，未选中图标的默认值为 icon-radio3，选中图标的默认值为 icon-radio。

::: CopyCode

```html
<me-radio-group v-model="radio">
  <me-radio name="1" icon="icon-aixinD" icon-select="icon-love">单选框 1</me-radio>
  <me-radio name="2" icon="icon-aixinD" icon-select="icon-love">单选框 2</me-radio>
</me-radio-group>
```

:::

### 自定义选中颜色

- 通过属性 `checked-color` 设置单选框的选中颜色，默认值为 #409eff。

::: CopyCode

```html
<me-radio-group v-model="radio">
  <me-radio name="1" checked-color="#f60">单选框 1</me-radio>
  <me-radio name="2" checked-color="#f60">单选框 2</me-radio>
</me-radio-group>
```

:::

### 自定义大小

- 通过属性 `icon-size` 设置单选框的大小，默认值为 20px。

::: CopyCode

```html
<me-radio-group v-model="radio">
  <me-radio name="1" icon-size="24px">单选框 1</me-radio>
  <me-radio name="2" icon-size="24px">单选框 2</me-radio>
</me-radio-group>
```

:::

### 禁用状态

- 通过属性 `disabled` 设置单选框的禁用状态，默认值为 false。

::: CopyCode

```html
<me-radio-group v-model="radio">
  <me-radio name="1" :disabled="true">单选框 1</me-radio>
  <me-radio name="2" :disabled="true">单选框 2</me-radio>
</me-radio-group>
```

:::

## API

### MeRadioGroup

#### 参数

| 参数                | 说明                           | 类型             | 可选值                | 默认值   | 版本 |
| ------------------- | ------------------------------ | ---------------- | --------------------- | -------- | ---- |
| modelValue(v-model) | 双向绑定单选框选项里的 name 值 | [string, number] | --                    | --       | --   |
| direction           | 排列方式                       | string           | vertical / horizontal | vertical | --   |

#### Slots

- ⚠ 注意：此插槽只接 `MeRadio` 组件。

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |

#### 方法

| 方法名 | 说明                     | 回调参数 | 版本   |
| ------ | ------------------------ | -------- | ------ |
| change | 当绑定值变化时触发的事件 | --       | v2.3.5 |

### MeRadio

#### 参数

| 参数                | 说明               | 类型             | 可选值         | 默认值      | 版本   |
| ------------------- | ------------------ | ---------------- | -------------- | ----------- | ------ |
| modelValue(v-model) | 双向绑定单选框状态 | boolean          | true / false   | --          | v2.0.0 |
| name                | 单选框唯一名称     | [string, number] | --             | --          | v2.0.0 |
| shape               | 图标形状           | string           | square / round | round       | v2.0.0 |
| icon                | 自定义图标         | string           | --             | icon-radio3 | v2.0.0 |
| iconSelect          | 自定义选中图标     | string           | --             | icon-radio  | v2.0.0 |
| iconSize            | 图标大小           | string           | --             | 20px        | v2.0.0 |
| checkedColor        | 选中图标颜色       | string           | --             | #409eff     | v2.0.0 |
| disabled            | 禁用状态           | boolean          | true / false   | false       | v2.0.0 |

#### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |

#### 方法

| 方法名 | 说明                   | 回调参数 | 版本   |
| ------ | ---------------------- | -------- | ------ |
| click  | 点击单选框时触发的事件 | --       | v2.3.5 |
