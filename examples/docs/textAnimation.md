# TextAnimation 文案动画 `v2.12.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeTextAnimation } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTextAnimation.css'

createApp(App).use(MeTextAnimation).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `text` 来设置文案内容

::: CopyCode

```html
<me-text-animation text="演示" />
```

:::

### 自定义颜色

- 通过属性 `color` 来设置覆盖的颜色, 默认为 #409eff
- 通过属性 `background` 来设置镂空的颜色色, 默认为 #fff

::: CopyCode

```html
<me-text-animation text="演示" color="#a541ff" background="#3fbbfe" />
```

:::

### 自定义字体

- 通过属性 `size` 来设置字体大小, 默认为 24
- 通过属性 `family` 来设置字体, 默认为 Arial

::: CopyCode

```html
<me-text-animation text="演示" :size="20" family="cursive" />
```

:::

### 边框动画

- 通过属性 `type` 来设置动画类型, 默认为 default

::: CopyCode

```html
<me-text-animation text="演示" type="border" />
```

:::

## API

### 参数

| 参数       | 说明     | 类型   | 可选值               | 默认值    | 版本    |
| ---------- | -------- | ------ | -------------------- | --------- | ------- |
| type       | 动画类型 | string | `default` / `border` | `default` | v2.12.0 |
| size       | 字体大小 | number | --                   | `24`      | v2.12.0 |
| family     | 字体     | string | --                   | `Arial`   | v2.12.0 |
| color      | 颜色     | string | --                   | `#409eff` | v2.12.0 |
| background | 背景色   | string | --                   | `#fff`    | v2.12.0 |
| text       | 文本     | string | --                   | --        | v2.12.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
