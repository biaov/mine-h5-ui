# TurnPage 仿真翻页 `v2.15.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeTurnPage } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTurnPage.css'

createApp(App).use(MeTurnPage).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置组件的分页数据。

::: CopyCode

```html
<me-trun-page :list="[1, 2, 3, -1]">
  <template #="{ item }">{{item}}</template>
</me-trun-page>
```

:::

### 自定义大小

- 通过属性 `width` 来设置宽度，默认为 `300`。
- 通过属性 `height` 来设置高度，默认为 `400`。

::: CopyCode

```html
<me-trun-page :list="[1, 2, 3, -1]" :width="200" :height="200">
  <template #="{ item }">{{item}}</template>
</me-trun-page>
```

:::

## API

### 参数

| 参数            | 说明             | 类型            | 可选值 | 默认值 | 版本    |
| --------------- | ---------------- | --------------- | ------ | ------ | ------- |
| v-model:current | 双向绑定当前分页 | number          | --     | 0      | v2.15.0 |
| list            | 列表数据         | any[]           | --     | --     | v2.15.0 |
| width           | 宽度             | number / string | --     | 300    | v2.15.0 |
| height          | 高度             | number / string | --     | 400    | v2.15.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
