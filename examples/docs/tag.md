# Tag 标签

---

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeTag } from "mine-h5-ui";

Vue.use(MeTag);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `type` 来设置组件的主题类型，默认为 primary。

```HTML
<me-tag type="primary"></me-tag>
```

### 空心设置

- 通过属性 `plain` 来设置组件的空心状态，默认为 false。

```HTML
<me-tag type="success" plain></me-tag>
```

### 自定义样式

- 通过属性 `width` 来设置组件宽度，默认为 auto。
- 通过属性 `height` 来设置组件高度，默认为 24。
- 通过属性 `color` 来设置组件主题样式。
- 通过属性 `radius` 来设置组件倒角，默认为 4。

```HTML
<me-tag :width="100" :height="40" :radius="20" color="#6DA1F0"></me-tag>
```

### 自定义内容

- 通过属性 `text` 来设置组件内容，默认为 `标签`。
- 通过属性 `text-color` 来设置组件内容的字体颜色。

```HTML
<me-tag text="注意" text-color="rgba(255,255,255,0.6)"></me-tag>
```

### 关闭状态

- 通过属性 `closeable` 来设置组件的关闭状态，默认为 false。

```HTML
<me-tag type="danger" closeable></me-tag>
```

## API

### 参数

| 参数       | 说明     | 类型    | 可选值                                      | 默认值  |
| ---------- | -------- | ------- | ------------------------------------------- | ------- |
| type       | 类型     | String  | primary / success / info / warning / danger | primary |
| plain      | 空心     | Boolean | true / false                                | false   |
| radius     | 倒角     | Number  | --                                          | 4       |
| width      | 宽度     | Number  | --                                          | --      |
| height     | 高度     | Number  | --                                          | 24      |
| color      | 标签颜色 | String  | --                                          | --      |
| text       | 标签内容 | String  | --                                          | 标签    |
| text-color | 文本颜色 | String  | --                                          | --      |
| closeable  | 关闭状态 | Boolean | true / false                                | false   |

### 方法

| 方法名   | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| on-close | 点击关闭状态时触发的事件 | --       |
