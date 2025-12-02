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

- 通过双向绑定 `v-model` 来获取当前页的值，默认值为 1。
- 通过属性 `total` 设置总页数，默认值为 0。

::: CopyCode

```html
<me-pagination v-model="current" :total="0" />
```

:::

### 每页条数

- 通过属性 `page-size` 设置每页显示的数量，默认值为 10。

::: CopyCode

```html
<me-pagination :page-size="pageSize" />
```

:::

### 简单模式

- 通过属性 `mode` 设置组件模式，默认为 default 。

::: CopyCode

```html
<me-pagination mode="simple" />
```

:::

### 显示省略号

- 通过属性 `ellipsis` 设置组件是否显示省略号，默认值为 false。
- 总页数大于 3 时才会显示省略号。

::: CopyCode

```html
<me-pagination ellipsis />
```

:::

### 自定义前后按钮

- 通过命名插槽 `#prev` 和 `#next` 设置组件自定义前后按钮的内容。
- 通过属性 `prev-text` 和 `next-text` 设置组件自定义前后按钮的文本，默认值分别为 `上一页` 和 `下一页`。

::: CopyCode

```html
<!-- 具名插槽 -->
<me-pagination>
  <template #prev>
    <me-icon name="icon-left" color="inherit" size="16px" />
  </template>
  <template #next>
    <me-icon name="icon-right1" color="inherit" size="16px" />
  </template>
</me-pagination>

<!-- 自定义文本 -->
<me-pagination prev-text="上一页" next-text="下一页" />
```

:::

### 禁用状态

- 通过属性 `disabled` 设置组件的禁用状态。

::: CopyCode

```html
<me-pagination disabled />
```

:::

## API

### 参数

| 参数                | 说明           | 类型               | 可选值           | 默认值  | 版本    |
| ------------------- | -------------- | ------------------ | ---------------- | ------- | ------- |
| modelValue(v-model) | 当前页数       | number             | --               | 1       | v2.17.0 |
| total               | 总页数         | number             | --               | 0       | v2.17.0 |
| page-size           | 每页条数       | number             | --               | 10      | v2.17.0 |
| mode                | 组件模式       | string             | default / simple | default | v2.17.0 |
| ellipsis            | 是否显示省略号 | boolean            | true / false     | false   | v2.17.0 |
| prev-text           | 前一页文本     | string / slot#prev | --               | 上一页  | v2.17.0 |
| next-text           | 后一页文本     | string / slot#next | --               | 下一页  | v2.17.0 |
| disabled            | 禁用           | boolean            | true / false     | false   | v2.17.0 |

#### Slots

| 具名插槽 | 说明             | scopedSlots | 版本    |
| -------- | ---------------- | ----------- | ------- |
| #prev    | 自定义前一页按钮 | --          | v2.17.0 |
| #next    | 自定义后一页按钮 | --          | v2.17.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
