# Rate 评分

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeRate } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeRate.css'

const app = createApp(App)
app.use(MeRate)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 指令来设置评分组件的的值。
- 注意：只支持整数。

::: CopyCode

```HTML
<me-rate v-model="value"></me-rate>
```

:::

### 自定义图标

- 通过 `icon` 和 `icon-select` 属性来设置评分组件的自定义图标，未选中和选中的默认图标为 icon-star4 和 icon-star3。

::: CopyCode

```HTML
<me-rate v-model="value" icon="icon-aixinD" icon-select="icon-love"></me-rate>
```

:::

### 自定义图标颜色

- 通过 `color` 属性来设置评分组件的自定义图标颜色，默认为 #fed835。

::: CopyCode

```HTML
<me-rate v-model="value" color="#f66"></me-rate>
```

:::

### 自定义数量

- 通过 `count` 属性来设置评分组件的自定义数量，默认为 5。
- 当你设置 `count` 属性时注意与 [`tips` 属性](#tips)相对应。

::: CopyCode

```HTML
<me-rate v-model="value" :count="6" :tips="['青铜', '白银', '黄金', '钻石', '王者', '无敌']"></me-rate>
```

:::

### 只读状态

- 通过 `readonly` 属性来设置评分组件的只读状态，默认为 false。

::: CopyCode

```HTML
<me-rate v-model="value" :readonly="true"></me-rate>
```

:::

### 禁用状态

- 通过 `disabled` 属性来设置评分组件的禁用状态，默认为 false。

::: CopyCode

```HTML
<me-rate v-model="value" :disabled="true"></me-rate>
```

:::

<h3 id="tips">自定义提示语</h3>

- 通过 `tips` 和 `tips-color` 属性来设置评分组件的自定义提示语的内容和颜色，自定义提示语的内容和颜色默认为 ["非常不满意", "不满意", "一般", "满意", "非常满意"] 和 #494949。

::: CopyCode

```HTML
<me-rate v-model="value" :tips="['一级', '二级', '三级', '四级', '五级']" tips-color="#f60"></me-rate>
```

:::

### 评分大小

- 通过 `size` 属性来设置自定义图标颜色，默认为 24px。

::: CopyCode

```HTML
<me-rate v-model="value" size="26px"></me-rate>
```

:::

## API

### 参数

| 参数                | 说明                 | 类型    | 可选值       | 默认值                                               | 版本 |
| ------------------- | -------------------- | ------- | ------------ | ---------------------------------------------------- | ---- |
| modelValue(v-model) | 双向绑定评分组件的值 | number  | --           | --                                                   | --   |
| icon                | 未选中图标           | string  | --           | icon-star4                                           | --   |
| icon-select         | 选中图标             | string  | --           | icon-star3                                           | --   |
| color               | 图标颜色             | string  | --           | #fed835                                              | --   |
| count               | 图标数量             | number  | --           | 5                                                    | --   |
| readonly            | 只读状态             | boolean | true / false | false                                                | --   |
| disabled            | 禁用状态             | boolean | true / false | false                                                | --   |
| tips                | 提示语               | Array   | --           | ["非常不满意", "不满意", "一般", "满意", "非常满意"] | --   |
| tips-color          | 提示语颜色           | string  | --           | #494949                                              | --   |
| size                | 图标大小             | string  | --           | 24px                                                 | --   |

### 方法

| 方法名 | 说明                       | 回调参数 | 版本  |
| ------ | -------------------------- | -------- | ----- |
| change | 评分组件改变值时触发该事件 | --       | 2.3.5 |
