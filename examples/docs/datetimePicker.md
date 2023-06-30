# DatetimePicker 时间选择器

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeDatetimePicker } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeDatetimePicker.css'

const app = createApp(App)
app.use(MeDatetimePicker)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定点击确定按钮之后选中的时间，通过 `visible` 属性设置时间选择器的显示和隐藏。

::: CopyCode

```HTML
<me-datetime-picker type="date" v-model="value" :visible="true"></me-datetime-picker>
```

:::

### 选择年月

- 通过 `type` 属性设置时间选择器的类型，选择年月设置为 year-month，默认值为 date。

::: CopyCode

```HTML
<me-datetime-picker type="year-month" v-model="value" :visible="true"></me-datetime-picker>
```

:::

### 选择月日

- 通过 `type` 属性设置时间选择器的类型，选择月日设置为 month-day，默认值为 date。

::: CopyCode

```HTML
<me-datetime-picker type="month-day" v-model="value" :visible="true"></me-datetime-picker>
```

:::

### 选择时间

- 通过 `type` 属性设置时间选择器的类型，选择时间设置为 time，默认值为 date。

::: CopyCode

```HTML
<me-datetime-picker type="time" v-model="value" :visible="true"></me-datetime-picker>
```

:::

### 选择完整时间

- 通过 `type` 属性设置时间选择器的类型，选择完整时间设置为 datetime，默认值为 date。

::: CopyCode

```HTML
<me-datetime-picker type="datetime" v-model="value" :visible="true"></me-datetime-picker>
```

:::

### 自定义时间区间

- 通过 `min-date` 和 `max-date` 属性设置时间选择器时间区间。默认值为当前 10 年和后 10 年。

::: CopyCode

```HTML
<me-datetime-picker type="datetime" v-model="value" :visible="true" :min-date="" :max-date="" ></me-datetime-picker>
```

:::

## API

### 参数

| 参数                | 说明                     | 类型    | 可选值                                          | 默认值                      | 版本 |
| ------------------- | ------------------------ | ------- | ----------------------------------------------- | --------------------------- | ---- |
| modelValue(v-model) | 双向绑定选择的时间值     | string  | --                                              | --                          | --   |
| type                | 选择日期时间类型         | string  | date / year-month / month-day / time / datetime | date                        | --   |
| visible             | 日期时间选择器的显示状态 | boolean | true / false                                    | false                       | --   |
| min-date            | 时间下限                 | Date    | --                                              | new Date().getFullYear()-10 | --   |
| max-date            | 时间上限                 | Date    | --                                              | new Date().getFullYear()+10 | --   |

### 方法

| 方法名 | 说明                     | 回调参数      | 版本  |
| ------ | ------------------------ | ------------- | ----- |
| sure   | 点击确定按钮时触发的事件 | arr: string[] | 2.3.5 |
| cancel | 点击取消按钮时触发的事件 | --            | 2.3.5 |
