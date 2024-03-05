# CountTo 数字滚动

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeCountTo } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeCountTo.css'

createApp(App).use(MeCountTo).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `end-value` 来设置需要滚动到的数字。

::: CopyCode

```html
<me-count-to :end-value="6666" />
```

:::

### 起始值 & 时间

- 通过属性 `start-value` 来设置开始滚动的数字。
- 通过属性 `duration` 来设置组件持续的时间。

::: CopyCode

```html
<me-count-to :start-value="100" :end-value="6666" :duration="5000" />
```

:::

### 添加千分符

- 通过属性 `thousand` 来是否转换为千分符。

::: CopyCode

```html
<me-count-to :start-value="100" :end-value="6666" thousand />
```

:::

## API

### 参数

| 参数                | 说明             | 类型    | 可选值       | 默认值 | 版本   |
| ------------------- | ---------------- | ------- | ------------ | ------ | ------ |
| modelValue(v-model) | 动画是否开始状态 | boolean | --           | --     | v2.0.0 |
| startValue          | 开始数字         | number  | --           | 0      | v2.0.0 |
| endValue            | 结束数字         | number  | --           | --     | v2.0.0 |
| duration            | 持续时间         | number  | --           | 1500   | v2.0.0 |
| thousand            | 千分符           | boolean | true / false | false  | v2.0.0 |

### 方法

| 方法名 | 说明                 | 回调参数 | 版本   |
| ------ | -------------------- | -------- | ------ |
| end    | 动画结束时触发的事件 | --       | v2.3.5 |
