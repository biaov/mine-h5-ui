# Icon 图标

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeIcon } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeIcon.css'

createApp(App).use(MeIcon).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码，也可以点击右侧的图标实现复制效果。
- 右侧演示里最下面有 `mine-h5-ui` 的所有图标，你可以点击直接复制即可。

## 使用 Iconfont 阿里巴巴矢量图标库

- 引入你的 [IconFont - 阿里巴巴矢量图标库](https://www.iconfont.cn/) 的项目。
- 设置 `name` 属性即可。

- 引入 iconfont 图标

::: CopyCode

```js
/**
 * 线上地址, 此地址有可能已过期, 推荐使用线下文件
 */
import '//at.alicdn.com/t/font_1774902_nar195smdvf.css'
```

:::

- 使用 iconfont 图标

::: CopyCode

```html
<me-icon name="icon-close" />
```

:::

## 代码演示

### 基础用法

- 通过 `name` 属性来设置图标。

::: CopyCode

```html
<me-icon name="icon-baseline-close-px">icon-baseline-close-px</me-icon>
<me-icon name="icon-success">icon-success</me-icon>
```

:::

### 自定义颜色

- 通过 `color` 属性来设置图标颜色，默认为 #494949。

::: CopyCode

```html
<me-icon name="icon-warning1" color="#e6a23c" />
<me-icon name="icon-Danger" color="#f56c6c" />
<me-icon name="icon-Success" color="#67c23a" />
```

:::

### 自定义大小

- 通过 `size` 属性来设置图标颜色，默认为 24px。

::: CopyCode

```html
<me-icon name="icon-tuichu" size="16px" />
<me-icon name="icon-tuichu" size="20px" />
<me-icon name="icon-tuichu" size="24px" />
```

:::

### 所有图标

- 这是 `mine-h5-ui` 的所有图标，你可以点击右侧图标即可复制该图标的 `name` 属性。

## API

### 参数

| 参数  | 说明     | 类型   | 可选值 | 默认值  | 版本   |
| ----- | -------- | ------ | ------ | ------- | ------ |
| name  | 图标名称 | string | --     | --      | v2.0.0 |
| color | 图标颜色 | string | --     | #494949 | v2.0.0 |
| size  | 图标大小 | string | --     | 24px    | v2.0.0 |

### 方法

| 方法名 | 说明                 | 回调参数          | 版本   |
| ------ | -------------------- | ----------------- | ------ |
| click  | 点击图标时触发的事件 | event: MouseEvent | v2.3.5 |
