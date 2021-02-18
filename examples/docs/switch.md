# Switch 开关

----

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeSwitch } from "mine-h5-ui";

Vue.use(MeSwitch);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

* 通过 `v-model` 绑定开关的选中状态，true 表示开，false 表示关。

```HTML
<me-switch v-model="switch"></me-switch>
```

### 自定义大小

* 通过属性 `size` 来设置开关的大小，默认为 30px。

```HTML
<me-switch v-model="switch" size="24px"></me-switch>
```

### 自定义颜色

* 通过属性 `inactive-color` 和 `active-color` 来设置开关的关闭颜色和打开颜色，默认关闭颜色为 #fff，打开颜色 #409eff。

```HTML
<me-switch v-model="switch" inactive-color="#f60" active-color="#e4393c"></me-switch>
```

### 异步状态

* 通过属性 `async` 来设置开关的异步状态，默认为 false。

```HTML
<me-switch v-model="switch" :async="true"></me-switch>
```

### 禁用状态

* 通过属性 `disabled` 来设置开关的禁用状态，默认为 false。

```HTML
<me-switch v-model="switch" :disabled="true"></me-switch>
```

## API

### 参数

| 参数          | 说明             | 类型    | 可选值       | 默认值  |
|---------------|------------------|---------|--------------|---------|
| v-model       | 双向绑定开关状态 | Boolean | true / false | --      |
| size          | 开关大小         | String  | --           | 30px    |
| inactiveColor | 开关关闭颜色     | String  | --           | #fff    |
| activeColor   | 开关打开颜色     | String  | --           | #409eff |
| async         | 异步状态         | Boolean | true / false | false   |
| disabled      | 禁用状态         | Boolean | true / false | false   |

### 方法

| 方法名   | 说明                 | 回调参数 |
|----------|----------------------|----------|
| on-click | 点击开关时触发的事件 | --       |
