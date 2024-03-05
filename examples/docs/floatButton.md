# floatButton 悬浮按钮 `v2.8.0`

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeFloatButton } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeFloatButton.css'

createApp(App).use(MeFloatButton).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `style` 来设置组件的位置。

::: CopyCode

```html
<me-float-button :style="{ right: '20px', top: '100px'}">按钮</me-float-button>
```

:::

### 按钮形状

- 通过属性 `style` 来设置组件的按钮形状。

::: CopyCode

```html
<me-float-button :style="{ right: '20px', top: '100px', borderRadius: '4px'}">按钮</me-float-button>
```

### 自定义颜色

- 通过属性 `style` 来设置组件的自定义颜色。

::: CopyCode

```html
<me-float-button :style="{ right: '20px', top: '100px', background: '#f60'}">按钮</me-float-button>
```

### 自定义大小

- 通过属性 `style` 来设置组件的自定义大小。

::: CopyCode

```html
<me-float-button :style="{ right: '20px', top: '100px', width: '40px', height: '40rpx'}">按钮</me-float-button>
```

### 设置按钮类型

- 通过属性 `type` 来设置组件的类型，默认值为 `default`。

::: CopyCode

```html
<me-float-button type="backTop" :style="{ right: '20px', top: '100px'}">按钮</me-float-button>
```

:::

## API

### 参数

- 支持透传

| 参数       | 说明               | 类型    | 可选值            | 默认值          | 版本   |
| ---------- | ------------------ | ------- | ----------------- | --------------- | ------ |
| type       | 按钮类型           | string  | default / backTop | default         | v2.8.0 |
| scrollTop  | 滚动开始显示的距离 | number  | --                | 0               | v2.8.0 |
| scrollNode | 有滚动条的节点     | Element | --                | `document.body` | v2.8.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.8.0 |

#### 方法

| 方法名 | 说明                 | 回调参数          | 版本   |
| ------ | -------------------- | ----------------- | ------ |
| click  | 点击组件时触发的事件 | event: MouseEvent | v2.8.0 |
