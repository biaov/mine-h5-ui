# Button 按钮

`MINE-H5-UI` 常用的操作按钮。

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeButton } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeButton.css";

const app = createApp(App);
app.use(MeButton);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码，也可以点击右侧的按钮实现复制效果。

## 代码演示

### 类型按钮

- 支持 `default`、`primary`、`success`、`info`、`warning`、`danger` 六种类型，默认为 default。

::: CopyCode

```HTML
<me-button type="default">默认按钮</me-button>
<me-button type="primary">主要按钮</me-button>
<me-button type="success">成功按钮</me-button>
<me-button type="info">信息按钮</me-button>
<me-button type="warning">警告按钮</me-button>
<me-button type="danger">危险按钮</me-button>
```

:::

### 朴素按钮

- 通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

::: CopyCode

```HTML
<me-button type="primary" plain>主要按钮</me-button>
<me-button type="success" plain>成功按钮</me-button>
<me-button type="info" plain>信息按钮</me-button>
<me-button type="warning" plain>警告按钮</me-button>
<me-button type="danger" plain>危险按钮</me-button>
```

:::

### 禁用状态

- 通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

::: CopyCode

```HTML
<me-button type="primary" disabled>禁用状态</me-button>
<me-button type="success" disabled>禁用状态</me-button>
<me-button type="primary" plain disabled>禁用状态</me-button>
<me-button type="success" plain disabled>禁用状态</me-button>
```

:::

### 图标按钮

- 通过 `icon` 属性设置按钮图标，支持[MeIcon](/doc/icon) 组件里的所有图标，也可以传入[Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)，前提你要引入你具有的素材图标。

::: CopyCode

```HTML
<me-button type="default" icon="icon-copy">复制图标</me-button>
<me-button type="success" icon="icon-success">成功图标</me-button>
<me-button type="primary" icon="icon-star">星星图标</me-button>
<me-button type="warning" icon="icon-warning1">警告图标</me-button>
<me-button type="danger" icon="icon-Danger" plain>危险图标</me-button>
<me-button type="danger" icon="icon-tuichu" plain>退出图标</me-button>
```

:::

### 自定义颜色按钮

- 通过 `color` 属性来设置自定义颜色按钮，默认值为 #494949。

::: CopyCode

```HTML
<me-button type="success" color="#ff8133">#ff8133</me-button>
<me-button type="primary" color="#547aff" plain>#547aff</me-button>
<me-button type="warning" color="#ffc262">#ffc262</me-button>
```

:::

## API

### 参数

| 参数        | 说明                         | 类型    | 可选值                                                | 默认值     |
| ----------- | ---------------------------- | ------- | ----------------------------------------------------- | ---------- |
| width       | 按钮宽度                     | string  | --                                                    | 自适应内容 |
| type        | 按钮类型                     | string  | default / primary / success / info / warning / danger | default    |
| native-type | 原生 button 标签的 type 属性 | string  | button / reset / submit                               | button     |
| plain       | 是否为朴素按钮               | boolean | true / false                                          | false      |
| disabled    | 是否为禁用状态               | boolean | true / false                                          | false      |
| icon        | 图标按钮                     | string  | --                                                    | --         |
| color       | 自定义颜色                   | string  | --                                                    | #494949    |

### 方法

| 方法名   | 说明                 | 回调参数         |
| -------- | -------------------- | ---------------- |
| on-click | 点击按钮时触发的事件 | event:MouseEvent |

### Slots

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |
