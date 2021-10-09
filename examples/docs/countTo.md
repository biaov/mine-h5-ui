# CountTo 数字滚动

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeCountTo } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeCountTo.css";

const app = createApp(App);
app.use(MeCountTo);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `end-value` 来设置需要滚动到的数字。

::: CopyCode

```HTML
<me-count-to :end-value="6666"></me-count-to>
```

:::

### 起始值 & 时间

- 通过属性 `start-value` 来设置开始滚动的数字。
- 通过属性 `duration` 来设置组件持续的时间。

::: CopyCode

```HTML
<me-count-to :start-value="100" :end-value="6666" :duration="5000"></me-count-to>
```

:::

### 添加千分符

- 通过属性 `thousand` 来是否转换为千分符。

::: CopyCode

```HTML
<me-count-to :start-value="100" :end-value="6666" thousand></me-count-to>
```

:::

## API

### 参数

| 参数                | 说明             | 类型    | 可选值       | 默认值 |
|---------------------|------------------|---------|--------------|--------|
| modelValue(v-model) | 动画是否开始状态 | boolean | --           | --     |
| startValue          | 开始数字         | number  | --           | 0      |
| endValue            | 结束数字         | number  | --           | --     |
| duration            | 持续时间         | number  | --           | 1500   |
| thousand            | 千分符           | boolean | true / false | false  |

### 方法

| 方法名 | 说明                 | 回调参数 |
|--------|----------------------|----------|
| on-end | 动画结束时触发的事件 | --       |
