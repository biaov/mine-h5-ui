# Pagination 分页器

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MePagination } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MePagination.css'

createApp(App).use(MePagination).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `type` 设置输入框的类型，支持原生 type 类型，默认为 text。

::: CopyCode

```html
<me-input type="text" v-model="inputValue" />
```

:::

### 自定义类型

- 通过属性 `label` 设置输入框的标签内容。

::: CopyCode

```html
<me-input v-model="inputValue" label="用户名" label-width="78px" placeholder="请输入用户名" />
<me-input v-model="inputValue" label="整数" label-width="78px" placeholder="请输入整数" :digit="true" />
<me-input v-model="inputValue" label="颜色自定" label-width="78px" label-color="#f60" placeholder="请输入文本" />
<me-input v-model="inputValue" label="图标" label-width="78px" label-color="#ec632f" label-icon="icon-star" placeholder="请输入文本" />
```

:::

### 聚焦颜色

- 通过属性 `focus-type` 设置输入框的聚焦颜色，默认为 default 。

::: CopyCode

```html
<me-input v-model="inputValue" label="信息聚焦" focus-type="primary" />
<me-input v-model="inputValue" label="成功聚焦" focus-type="success" />
<me-input v-model="inputValue" label="警告聚焦" focus-type="warning" />
<me-input v-model="inputValue" label="危险聚焦" focus-type="danger" />
<me-input v-model="inputValue" label="自定聚焦" focus-color="#f100ff" />
```

:::

### 图标按钮

- 通过属性 `icon` 设置输入框的图标。

::: CopyCode

```html
<me-input v-model="inputValue" label="密码" :password="true" />
<me-input v-model="inputValue" label="清理" icon="icon-close" @click-icon="handleIcon" />
```

:::

### 短信验证码

- 通过属性 `sms-msg` 和 `sms-is` 设置输入框的短信验证码按钮的显示。

::: CopyCode

```html
<me-input v-model="inputValue" sms-msg="短信验证码" :sms-is="false" />
<me-input v-model="inputValue" sms-msg="短信验证码" sms-is="icon-close" sms-color="#549ff2" placeholder="自定义验证码颜色" @click-sms="handleSMS" />
```

:::

### 禁用状态

- 通过属性 `readonly` 和 `disabled` 设置输入框的只读和禁用状态。

::: CopyCode

```html
<me-input v-model="inputValue" label="只读状态" :readonly="true" />
<me-input v-model="inputValue" label="禁用状态" :disabled="true" />
```

:::

## API

### 参数

| 参数                | 说明           | 类型             | 可选值                                                                   | 默认值    | 版本    |
| ------------------- | -------------- | ---------------- | ------------------------------------------------------------------------ | --------- | ------- |
| modelValue(v-model) | 输入框默认值   | [string, number] | --                                                                       | --        | v2.0.0  |
| type                | 输入框类型     | string           | 原生 input 类型                                                          | text      | v2.0.0  |
| placeholder         | 输入框占位符   | string           | --                                                                       | 请输入... | v2.0.0  |
| label               | 输入框标签     | string           | --                                                                       | --        | v2.0.0  |
| label-width         | 标签宽度       | string           | --                                                                       | --        | v2.0.0  |
| label-align         | 标签对齐方式   | string           | auto / left / right / center / justify / start / end / initial / inherit | left      | v2.0.0  |
| label-color         | 标签颜色       | string           | --                                                                       | --        | v2.0.0  |
| label-icon          | 标签图标       | string           | --                                                                       | --        | v2.0.0  |
| focus-type          | 聚焦类型       | string           | default / primary / success / warning / danger                           | default   | v2.0.0  |
| focus-color         | 聚焦自定义颜色 | string           | --                                                                       | --        | v2.0.0  |
| icon                | 图标按钮       | string           | --                                                                       | --        | v2.0.0  |
| password            | 密码输入框     | boolean          | true / false                                                             | false     | v2.0.0  |
| digit               | 整数输入框     | boolean          | true / false                                                             | false     | v2.0.0  |
| sms-msg             | 短信验证码信息 | string           | --                                                                       | --        | v2.0.0  |
| sms-color           | 短信验证码颜色 | string           | --                                                                       | --        | v2.0.0  |
| sms-is              | 是否开启倒计时 | boolean          | true / false                                                             | false     | v2.0.0  |
| readonly            | 只读           | boolean          | true / false                                                             | false     | v2.0.0  |
| disabled            | 禁用           | boolean          | true / false                                                             | false     | v2.0.0  |
| maxlength           | 最大长度       | number           | --                                                                       | 999       | v2.15.4 |
| minlength           | 最小长度       | number           | --                                                                       | 0         | v2.15.4 |

### 方法

| 方法名     | 说明                           | 回调参数          | 版本   |
| ---------- | ------------------------------ | ----------------- | ------ |
| click-icon | 点击图标时触发的事件           | event: MouseEvent | v2.3.5 |
| click-sms  | 点击短信验证码时触发的事件     | event: MouseEvent | v2.3.5 |
| focus      | 输入框聚焦时触发的事件         | event: FocusEvent | v2.3.5 |
| blur       | 输入框移除焦点时触发的事件     | event: FocusEvent | v2.3.5 |
| change     | 输入框内容发生改变时触发的事件 | event: InputEvent | v2.3.5 |
