# Calendar 日历 `v2.14.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeCalendar } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeCalendar.css'

createApp(App).use(MeCalendar).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model:visible` 来设置是否显示
- 通过 `v-model` 来绑定选择的值

::: CopyCode

```html
<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
  const calendarValue = ref('')
</script>
<template>
  <me-calendar v-model:visible="visible" v-model="calendarValue" />
</template>
```

### 自定义主题

- 通过 `themeColor` 属性来设置自定义主题颜色。

::: CopyCode

```html
<me-calendar theme-color="#f56c6c" />
```

### 关闭器

- 通过 `closable` 属性来设置是否开启关闭器，点击日历以外的区域关闭组件
- `true`: 开启，点击日期关闭组件
- `false`: 关闭，点击日期不关闭组件

::: CopyCode

```html
<me-calendar closable />
```

:::

## API

### 参数

| 参数            | 说明     | 类型         | 可选值       | 默认值  | 版本    |
| --------------- | -------- | ------------ | ------------ | ------- | ------- |
| v-model:visible | 显示状态 | boolean      | true / false | false   | v2.14.0 |
| v-model         | 日期     | string       | --           | --      | v2.14.0 |
| theme-color     | 主题颜色 | string       | --           | #409eff | v2.14.0 |
| closable        | 关闭器   | boolean      | true / false | false   | v2.14.0 |
| style           | 行内样式 | CSSStyleRule | --           | --      | v2.14.0 |

### 方法

| 方法名 | 说明           | 回调参数     | 版本    |
| ------ | -------------- | ------------ | ------- |
| change | 更新日期时触发 | `YYYY-MM-DD` | v2.14.0 |
