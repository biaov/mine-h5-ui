# Empty 空状态

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeEmpty } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeEmpty.css";

const app = createApp(App);
app.use(MeEmpty);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `text` 来设置组件的文本内容。

::: CopyCode

```HTML
<me-empty text="暂无数据"></me-empty>
```

:::

### 错误类型

- 通过属性 `type` 来设置组件的错误类型，可选值为 `default / network / search`, 默认值为 `default`。

::: CopyCode

```HTML
<me-empty type="network" text="一帘清雨，垂下了一汪泪，一份缠绵，揉断了心碎。"></me-empty>
```

:::

### 自定义图标

- 通过属性 `icon-name` 来设置组件的自定义图标，必须是 iconfont 图标，不需要加 `icon-` 前缀。

::: CopyCode

```HTML
<me-empty icon-name="Loading" text="快乐很简单，就是春天的鲜花，夏天的绿荫，秋天的野果，冬天的漫天飞雪。"></me-empty>
```

:::

### 自定义图片

- 通过属性 `url` 来设置组件的自定义图标，如果是项目内图片，请使用 require 引入，如果是网络图片直接填写地址即可。

::: CopyCode

```HTML
<me-empty :url="require('../assets/empty.png')" text="用心聆听，深深呼吸，烟花雨，梨花月，寄一缕风的香魂，远离喧嚣。"></me-empty>
```

:::

## API

### 参数

| 参数      | 说明       | 类型   | 可选值                     | 默认值  |
|-----------|------------|--------|----------------------------|---------|
| text      | 文本内容   | string | --                         | --      |
| type      | 类型       | string | default / network / search | default |
| height    | 高度       | number | --                         | 200     |
| icon-name | 自定义图标 | string | --                         | --      |
| url       | 自定义图片 | string | --                         | --      |

#### Slots

| 具名插槽 | 说明     | scopedSlots |
|----------|----------|-------------|
| default  | 默认名称 | --          |

### 方法

| 方法名 | 说明 | 回调参数 |
|--------|------|----------|
| --     | --   | --       |
