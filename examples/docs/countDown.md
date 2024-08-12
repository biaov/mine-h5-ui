# CountDown 倒计时

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeCountDown } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeCountDown.css'

createApp(App).use(MeCountDown).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `time` 来设置组件的倒计时间，单位为毫秒 (ms)。

::: CopyCode

```html
<me-count-down :time="2*60*60*1000" />
```

:::

### 毫秒级渲染

- 通过属性 `format` 来设置组件的格式，完整格式为 `DD:hh:mm:ss:ms`,默认格式为 `hh:mm:ss`。

::: CopyCode

```html
<me-count-down :time="2*60*60*1000" format="hh:mm:ss:ms" />
```

:::

## API

### 参数

| 参数      | 说明                                | 类型    | 可选值       | 默认值   | 版本   |
| --------- | ----------------------------------- | ------- | ------------ | -------- | ------ |
| time      | 倒计时的时间，单位毫秒(ms)          | number  | --           | --       | v2.0.0 |
| format    | 显示格式，完整格式 `DD:hh:mm:ss:ms` | string  | --           | hh:mm:ss | v2.0.0 |
| isStart   | 是否开始                            | boolean | true / false | false    | v2.0.0 |
| isSuspend | 是否暂停                            | boolean | true / false | false    | v2.0.0 |
| isReset   | 是否重置                            | boolean | true / false | false    | v2.0.0 |

#### Slots

| 具名插槽 | 说明     | scopedSlots                  | 版本   |
| -------- | -------- | ---------------------------- | ------ |
| default  | 默认名称 | `{ hh: "", ms: "", ss: "" }` | v2.0.0 |

### 方法

| 方法名   | 说明                   | 回调参数     | 版本   |
| -------- | ---------------------- | ------------ | ------ |
| end      | 倒计时结束时触发的事件 | --           | v2.3.5 |
| progress | 倒计时进行时触发的事件 | time: number | v2.3.5 |
