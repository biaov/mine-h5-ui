# Textarea 文本域

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeTextarea } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTextarea.css'

createApp(App).use(MeTextarea).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `modelValue(v-model)` 设置双向绑定。

::: CopyCode

```html
<me-textarea v-model="inputValue" />
```

:::

### 显示字数

- 通过属性 `show-count` 和 `maxlength` 设置组件字数的显示。

::: CopyCode

```html
<me-textarea show-count :maxlength="20" />
```

:::

### 禁用状态

- 通过属性 `readonly` 和 `disabled` 设置组件的只读和禁用状态。

::: CopyCode

```html
<me-textarea readonly />
<me-textarea disabled />
```

:::

## API

### 参数

| 参数                | 说明                              | 类型    | 可选值       | 默认值 | 版本    |
| ------------------- | --------------------------------- | ------- | ------------ | ------ | ------- |
| modelValue(v-model) | 输入框默认值                      | string  | --           | --     | v2.17.0 |
| placeholder         | 输入框占位符                      | string  | --           | 请输入 | v2.17.0 |
| readonly            | 只读                              | boolean | true / false | false  | v2.17.0 |
| disabled            | 禁用                              | boolean | true / false | false  | v2.17.0 |
| maxlength           | 最大长度, -1 表示不限制           | number  | --           | -1     | v2.17.0 |
| show-count          | 显示字数                          | boolean | true / false | false  | v2.17.0 |
| cols                | 可见的列数                        | number  | --           | --     | v2.17.0 |
| rows                | 可见的行数,和 min-height 取较大值 | number  | --           | 6      | v2.17.0 |

### 方法

| 方法名 | 说明                           | 回调参数          | 版本    |
| ------ | ------------------------------ | ----------------- | ------- |
| focus  | 输入框聚焦时触发的事件         | event: FocusEvent | v2.17.0 |
| blur   | 输入框移除焦点时触发的事件     | event: FocusEvent | v2.17.0 |
| change | 输入框内容发生改变时触发的事件 | event: InputEvent | v2.17.0 |

### 样式变量

| 名称                                | 默认值                                                                                      | 描述                   | 版本    |
| ----------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| --me-textarea-border-color          | --me-border-default                                                                         | 边框颜色               | v2.17.0 |
| --me-textarea-border-radius         | --me-border-radius-default                                                                  | 边框圆角               | v2.17.0 |
| --me-textarea-min-height            | 150px                                                                                       | 最小高度               | v2.17.0 |
| --me-textarea-padding               | 10px                                                                                        | 内边距                 | v2.17.0 |
| --me-textarea-color                 | --me-text-main                                                                              | 文本颜色               | v2.17.0 |
| --me-textarea-font-size             | --me-text-md                                                                                | 文本大小               | v2.17.0 |
| --me-textarea-placholder-color      | color-mix(in srgb, var(--me-text-main), #fff 50%)                                           | 占位符颜色             | v2.17.0 |
| --me-textarea-focus-border-color    | --me-border-defaul                                                                          | 聚焦边框颜色           | v2.17.0 |
| --me-textarea-disabled-border-color | color-mix(in srgb, var(--me-textarea-disabled-color, var(--me-text-main-reduce)), #fff 80%) | 禁用状态边框颜色       | v2.17.0 |
| --me-textarea-disabled-color        | color-mix(in srgb, var(--me-textarea-disabled-color, var(--me-text-main-reduce)), #fff 60%) | 禁用状态文本颜色       | v2.17.0 |
| --me-textarea-count-right           | 10px                                                                                        | 显示字数距离右边的距离 | v2.17.0 |
| --me-textarea-count-bottom          | 10px                                                                                        | 显示字数距离底部的距离 | v2.17.0 |
| --me-textarea-count-color           | --me-text-main-reduce                                                                       | 显示字数的颜色         | v2.17.0 |
| --me-textarea-count-font-size       | --me-text-sm                                                                                | 显示字数的大小         | v2.17.0 |
