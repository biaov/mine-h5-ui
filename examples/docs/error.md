# Error 错误

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeError } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeError.css'

createApp(App).use(MeError).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `visible` 来设置组件的显示状态，默认值为 false。

::: CopyCode

```html
<me-error />
```

:::

### 自定义文本

- 通过属性 `title` 来设置组件的标题，默认值为 `页面错误`。
- 通过属性 `subtit` 来设置组件的副标题，默认值为 `请检查网络是否正常`。

::: CopyCode

```html
<me-error title="标题" subtit="副标题" />
```

:::

### 暗色主题

- 通过属性 `theme` 来设置组件的主题，可选值为 `light` 、`dark`，默认值为 light。

::: CopyCode

```html
<me-error theme="dark" />
```

:::

## API

### 参数

| 参数    | 说明       | 类型   | 可选值       | 默认值             | 版本   |
| ------- | ---------- | ------ | ------------ | ------------------ | ------ |
| visible | 文本内容   | string | true / false | false              | v2.7.0 |
| title   | 类型       | string | --           | 页面错误           | v2.7.0 |
| subtit  | 高度       | number | --           | 请检查网络是否正常 | v2.7.0 |
| theme   | 自定义图标 | string | dark / light | light              | v2.7.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
