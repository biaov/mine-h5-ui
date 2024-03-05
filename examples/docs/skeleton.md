# Skeleton 骨架屏 `v2.8.0`

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeSkeleton } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeSkeleton.css'

createApp(App).use(MeSkeleton).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `visible` 来设置组件的显示和隐藏，默认为 false。
- 当属性 `visible` 为 false 时，显示插槽内容。

::: CopyCode

```html
<me-skeleton visible>为 false 时显示的内容</me-skeleton>
```

:::

### 显示动画效果

- 通过属性 `active` 来设置是否显示动画效果，默认为 false。

::: CopyCode

```html
<me-skeleton visible active />
```

### 显示标题占位图

- 通过属性 `title` 来设置是否显示标题占位图，默认为 false。

::: CopyCode

```html
<me-skeleton visible title />
```

### 显示头像占位图

- 通过属性 `avatar` 来设置是否显示头像占位图，默认为 false。

::: CopyCode

```html
<me-skeleton visible avatar />
```

### 自定义行数

- 通过属性 `row` 来设置行数，默认为 3。

::: CopyCode

```html
<me-skeleton visible :row="4" />
```

:::

## API

### 参数

| 参数       | 说明               | 类型              | 可选值       | 默认值 | 版本   |
| ---------- | ------------------ | ----------------- | ------------ | ------ | ------ |
| visible    | 组件的显示状态     | boolean           | true / false | false  | v2.8.0 |
| active     | 是否显示动画效果   | boolean           | true / false | false  | v2.8.0 |
| title      | 是否显示标题占位图 | boolean           | true / false | false  | v2.8.0 |
| titleWidth | 标题占位图宽度     | string            | --           | 40%    | v2.8.0 |
| row        | 段落占位图行数     | number            | --           | 3      | v2.8.0 |
| rowWidth   | 段落占位图宽度     | string / string[] | --           | 100%   | v2.8.0 |
| avatar     | 是否显示头像占位图 | boolean           | true / false | false  | v2.8.0 |
| avatarSize | 头像占位图大小     | string            | --           | 32px   | v2.8.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.8.0 |
