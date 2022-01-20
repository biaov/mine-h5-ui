# AddressPicker 地址选择器

---

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeAddressPicker } from "mine-h5-ui";

Vue.use(MeAddressPicker);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定点击确定按钮之后选中的地址，通过 `visible` 属性设置地址选择器的显示和隐藏。

```HTML
<me-address-picker v-model="value" :visible="true"></me-address-picker>
```

### 自定义分隔符

- 通过 `separator` 属性设置 value 的分隔符，默认值为 `-`。

```HTML
<me-address-picker v-model="value" :visible="true"></me-address-picker>
```

## API

### 参数

| 参数      | 说明             | 类型    | 可选值       | 默认值 |
| --------- | ---------------- | ------- | ------------ | ------ |
| v-model   | 双向绑定选择的值 | String  | --           | --     |
| visible   | 显示状态         | Boolean | true / false | false  |
| separator | 分割符           | String  | --           | `-`    |

### 方法

| 方法名    | 说明                     | 回调参数           |
| --------- | ------------------------ | ------------------ |
| on-sure   | 点击确定按钮时触发的事件 | array:时间选择数组 |
| on-cancel | 点击取消按钮时触发的事件 | --                 |
