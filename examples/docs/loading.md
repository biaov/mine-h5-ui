# Loading 加载

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeLoading } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeLoading.css";

const app = createApp(App);
app.use(MeLoading);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `type` 来设置加载框图标的类型，默认为 circle。

::: CopyCode

```HTML
<me-loading type="circle"></me-loading>
```

:::

### 图标大小

- 通过属性 `size` 来设置加载框图标的大小，默认为 24px。

::: CopyCode

```HTML
<me-loading type="circle" size="24px"></me-loading>
```

:::

### 图标颜色

- 通过属性 `color` 来设置加载框图标的颜色，默认为 #c8c9cc。

::: CopyCode

```HTML
<me-loading type="circle" color="#c8c9cc"></me-loading>
```

:::

### 自定义图标

- 通过属性 `icon` 来设置加载框图标的名称。
- 注意：这是使用 SVG 实现的，所以需要引入你的 iconfont.js 文件。

::: CopyCode

```HTML
<me-loading type="circle" icon="icon-baseline-close-px"></me-loading>
```

:::

### 自定义文本

- 通过属性 slot 来设置加载框的文本内容。
- 如果你需要换行，直接使用块级内容即可。

::: CopyCode

```HTML
<me-loading type="circle">加载中...</me-loading>
```

:::

## API

### 参数

| 参数  | 说明             | 类型   | 可选值                                                   | 默认值  |
| ----- | ---------------- | ------ | -------------------------------------------------------- | ------- |
| type  | 加载框图标的类型 | string | circle / circle2 / circle3 / circle4 / circle5 / circle6 | circle  |
| size  | 加载框图标的大小 | string | --                                                       | 24px    |
| color | 加载框图标的颜色 | string | --                                                       | #c8c9cc |
| icon  | 自定义图标       | string | --                                                       | --      |

### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |
