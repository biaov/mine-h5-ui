# Image 图片

---

`MINE-H5-UI` 常用的图片规则。

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeImg } from "mine-h5-ui";

Vue.use(MeImg);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码，也可以点击右侧的图片实现复制效果。

## 代码演示

### 基础用法

- 通过 `src` 属性来设置图片。

```HTML
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png"></me-img>
```

### 自定义大小

- 通过 `width` 和 `height` 属性来设置图片大小，默认宽为 40px，高为 auto。

```HTML
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" width="45px"></me-img>
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" height="45px"></me-img>
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" width="45px" height="45px"></me-img>
```

### 填充模式

- 通过 `fill` 属性来设置图片填充模式。
- 填充模式下默认高度为 40px。

```HTML
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" fill="cover"></me-img>
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" fill="contain"></me-img>
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" fill="50% auto"></me-img>
```

### 倒角图片

- 通过 `radius` 属性来设置图片的倒角，默认为 0。

```HTML
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" radius="50%"></me-img>
<me-img src="https://app.biaov.cn/mineapp/images/avatar/2.png" radius="6px"></me-img>
```

### 相对路径图片

- 如果你要使用相对路径图片的话，图片地址请用 `require` 引入。

```HTML
<me-img :src="require('./image.png')" radius="50%"></me-img>
```

## API

### 参数

| 参数   | 说明     | 类型   | 可选值                                                    | 默认值                              |
| ------ | -------- | ------ | --------------------------------------------------------- | ----------------------------------- |
| src    | 图片地址 | String | --                                                        | --                                  |
| width  | 图片宽度 | String | --                                                        | 40px                                |
| height | 图片高度 | String | --                                                        | auto，当处于填充模式下，默认为 40px |
| fill   | 填充模式 | String | cover / contain / x,y（表示可自定义设置 width 和 height） | 24px                                |
| radius | 图片倒角 | String | --                                                        | 0                                   |

### 方法

| 方法名   | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| on-click | 点击图片时触发的事件 | --       |
