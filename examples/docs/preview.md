# Preview 图片预览

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MePreview } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MePreview.css";

const app = createApp(App);
app.mount("#app");
app.config.globalProperties["$MePreview"] = $MePreview;
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。
- 通过属性 `url` 来设置需要预览的图片。

::: CopyCode

```JavaScript
import { getCurrentInstance } from "vue";
import url from "../assets/empty.png";

export default defineComponent({
  setup() {
    const { $MePreview } = getCurrentInstance()!.appContext.config.globalProperties;
    $MePreview({
      url
    });
    return { };
  }
});
```

:::

### 自定义样式

- 通过 API 直接调用即可。
- 通过属性 `background` 来设置预览的遮罩层背景色，默认为 #000。

::: CopyCode

```JavaScript
import { getCurrentInstance } from "vue";
import url from "../assets/empty.png";

export default defineComponent({
  setup() {
    const { $MePreview } = getCurrentInstance()!.appContext.config.globalProperties;
    $MePreview({
      url,
      background: "#fff"
    });
    return { };
  }
});
```

:::

## API

### 参数

| 参数       | 说明         | 类型   | 可选值 | 默认值 |
| ---------- | ------------ | ------ | ------ | ------ |
| url        | 图片地址     | string | --     | --     |
| z-index    | 层级位置     | number | --     | 99     |
| background | 遮罩层背景色 | string | --     | #000   |

#### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

### 方法

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| --     | --   | --       |
