# Toast 消息提示

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeToast } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeToast.css";

const app = createApp(App);
app.mount("#app");
app.config.globalProperties["$MeToast"] = $MeToast;
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。

::: CopyCode

```JavaScript
import { getCurrentInstance } from "vue";

const { $MeToast } = getCurrentInstance().appContext.config.globalProperties;
$MeToast("显示信息");
```

:::

## API

### 方法

| 方法名   | 说明         | 参数   | 返回值 |
| -------- | ------------ | ------ | ------ |
| $MeToast | 展示消息提示 | `参数` | --     |

### 参数

| 参数    | 说明                               | 类型   | 可选值 | 默认值 |
| ------- | ---------------------------------- | ------ | ------ | ------ |
| message | 需要提示的信息内容                 | string | --     | --     |
| object  | 参数对象，具体请看 [详情](#object) | Object | --     | --     |

<h4 id="object">Object 详情</h4>

| 参数     | 说明               | 类型    | 可选值       | 默认值 |
| -------- | ------------------ | ------- | ------------ | ------ |
| message  | 需要提示的信息内容 | string  | --           | --     |
| isShow   | 是否显示消息组件   | boolean | true / false | false  |
| bgColor  | 消息组件背景颜色   | string  | --           | --     |
| icon     | 图标               | string  | --           | --     |
| durction | 延迟时间，单位 ms  | number  | --           | 1000   |
