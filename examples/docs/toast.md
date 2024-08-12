# Toast 消息提示

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeToast } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeToast.css'

createApp(App).use(MeToast).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。

::: CopyCode

```ts
import { MeToast } from 'mine-h5-ui'

MeToast('显示信息')
```

:::

## API

### 参数

| 参数    | 说明               | 类型            | 可选值 | 默认值 | 版本   |
| ------- | ------------------ | --------------- | ------ | ------ | ------ |
| message | 需要提示的信息内容 | string / Option | --     | --     | v2.0.0 |

### Option

| 参数     | 说明               | 类型    | 可选值       | 默认值 | 版本   |
| -------- | ------------------ | ------- | ------------ | ------ | ------ |
| message  | 需要提示的信息内容 | string  | --           | --     | v2.0.0 |
| isShow   | 是否显示消息组件   | boolean | true / false | false  | v2.0.0 |
| bgColor  | 消息组件背景颜色   | string  | --           | --     | v2.0.0 |
| icon     | 图标               | string  | --           | --     | v2.0.0 |
| durction | 延迟时间，单位 ms  | number  | --           | 1000   | v2.0.0 |
