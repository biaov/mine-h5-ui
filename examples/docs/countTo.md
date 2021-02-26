# CountTo 数字滚动

----

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeCountTo } from "mine-h5-ui";

Vue.use(MeCountTo);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

* 通过属性 `end-value` 来设置需要滚动到的数字。

```HTML
<me-count-to :end-value="6666"></me-count-to>
```

### 起始值 & 时间

* 通过属性 `start-value` 来设置开始滚动的数字。
* 通过属性 `duration` 来设置组件持续的时间。

```HTML
<me-count-to :start-value="100" :end-value="6666" :duration="5000"></me-count-to>
```

### 添加千分符

* 通过属性 `thousand` 来是否转换为千分符。

```HTML
<me-count-to :start-value="100" :end-value="6666" thousand></me-count-to>
```

## API

### 参数

| 参数       | 说明             | 类型    | 可选值       | 默认值 |
|------------|------------------|---------|--------------|--------|
| v-model    | 动画是否开始状态 | Boolean | --           | --     |
| startValue | 开始数字         | Number  | --           | 0      |
| endValue   | 结束数字         | Number  | --           | --     |
| duration   | 持续时间         | Number  | --           | 1500   |
| thousand   | 千分符           | Boolean | true / false | false  |

### 方法

| 方法名 | 说明                 | 回调参数 |
|--------|----------------------|----------|
| on-end | 动画结束时触发的事件 | --       |
