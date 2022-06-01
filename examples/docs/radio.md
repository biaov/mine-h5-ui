# Radio 单选框

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from 'vue'
import { MeRadio, MeRadioGroup } from 'mine-h5-ui'

Vue.use(MeRadio)
Vue.use(MeRadioGroup)
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定值当前选中项的 name。

```HTML
<me-radio-group v-model="radio">
  <me-radio name="1">单选框 1</me-radio>
  <me-radio name="2">单选框 2</me-radio>
</me-radio-group>
```

### 单独使用

- 通过 `v-model` 绑定值当前是否选中状态。

```HTML
<me-radio v-model="radio">单选框</me-radio>
```

### 排列方式

- 通过属性 `shape` 设置单选框的排列方式，默认为 round。

```HTML
<me-radio-group v-model="radio" shape="square">
  <me-radio name="1">单选框 1</me-radio>
  <me-radio name="2">单选框 2</me-radio>
</me-radio-group>
```

### 自定义图标

- 通过属性 `icon` 和 `icon-select` 设置单选框的未选中图标和选中图标，未选中图标的默认值为 icon-radio3，选中图标的默认值为 icon-radio。

```HTML
<me-radio-group v-model="radio">
  <me-radio name="1" icon="icon-aixinD" icon-select="icon-love">单选框 1</me-radio>
  <me-radio name="2" icon="icon-aixinD" icon-select="icon-love">单选框 2</me-radio>
</me-radio-group>
```

### 自定义选中颜色

- 通过属性 `checked-color` 设置单选框的选中颜色，默认值为 #409eff。

```HTML
<me-radio-group v-model="radio">
  <me-radio name="1" checked-color="#f60">单选框 1</me-radio>
  <me-radio name="2" checked-color="#f60">单选框 2</me-radio>
</me-radio-group>
```

### 自定义大小

- 通过属性 `icon-size` 设置单选框的大小，默认值为 20px。

```HTML
<me-radio-group v-model="radio">
  <me-radio name="1" icon-size="24px">单选框 1</me-radio>
  <me-radio name="2" icon-size="24px">单选框 2</me-radio>
</me-radio-group>
```

### 禁用状态

- 通过属性 `disabled` 设置单选框的禁用状态，默认值为 false。

```HTML
<me-radio-group v-model="radio">
  <me-radio name="1" :disabled="true">单选框 1</me-radio>
  <me-radio name="2" :disabled="true">单选框 2</me-radio>
</me-radio-group>
```

## API

### MeRadioGroup

#### 参数

| 参数      | 说明                           | 类型             | 可选值                | 默认值   | 版本 |
| --------- | ------------------------------ | ---------------- | --------------------- | -------- | ---- |
| v-model   | 双向绑定单选框选项里的 name 值 | [String, Number] | --                    | --       | --   |
| direction | 排列方式                       | String           | vertical / horizontal | vertical | --   |

#### Slots

- ⚠ 注意：此插槽只接 `MeRadio` 组件。

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |

#### 方法

| 方法名    | 说明                     | 回调参数 | 版本 |
| --------- | ------------------------ | -------- | ---- |
| on-change | 当绑定值变化时触发的事件 | --       | --   |

### MeRadio

#### 参数

| 参数         | 说明               | 类型             | 可选值         | 默认值      | 版本 |
| ------------ | ------------------ | ---------------- | -------------- | ----------- | ---- |
| v-model      | 双向绑定单选框状态 | Boolean          | true / false   | --          | --   |
| name         | 单选框唯一名称     | [String, Number] | --             | --          | --   |
| shape        | 图标形状           | String           | square / round | round       | --   |
| icon         | 自定义图标         | String           | --             | icon-radio3 | --   |
| iconSelect   | 自定义选中图标     | String           | --             | icon-radio  | --   |
| iconSize     | 图标大小           | String           | --             | 20px        | --   |
| checkedColor | 选中图标颜色       | String           | --             | #409eff     | --   |
| disabled     | 禁用状态           | Boolean          | true / false   | false       | --   |

#### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |

#### 方法

| 方法名   | 说明                   | 回调参数 | 版本 |
| -------- | ---------------------- | -------- | ---- |
| on-click | 点击单选框时触发的事件 | --       | --   |
