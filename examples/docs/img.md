# Image 图片

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeImg } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeImg.css'

createApp(App).use(MeImg).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码，也可以点击右侧的图片实现复制效果。

## 代码演示

### 基础用法

- 通过 `src` 属性来设置图片。

::: CopyCode

```html
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" />
```

:::

### 自定义大小

- 通过 `width` 和 `height` 属性来设置图片大小，默认宽为 40px，高为 auto。

::: CopyCode

```html
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" width="45px" />
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" height="45px" />
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" width="45px" height="45px" />
```

:::

### 填充模式

- 通过 `fill` 属性来设置图片填充模式。
- 填充模式下默认高度为 40px。

::: CopyCode

```html
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" fill="cover" />
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" fill="contain" />
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" fill="50% auto" />
```

:::

### 倒角图片

- 通过 `radius` 属性来设置图片的倒角，默认为 0。

::: CopyCode

```html
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" radius="50%" />
<me-img src="http://dummyimage.com/45x45/0079cb/fff.png&text=M" radius="6px" />
```

:::

### 相对路径图片

::: CopyCode

```html
<me-img src="./image.png" radius="50%" />
```

:::

## API

### 参数

| 参数   | 说明     | 类型   | 可选值                                                    | 默认值                              | 版本   |
| ------ | -------- | ------ | --------------------------------------------------------- | ----------------------------------- | ------ |
| src    | 图片地址 | string | --                                                        | --                                  | v2.0.0 |
| width  | 图片宽度 | string | --                                                        | 40px                                | v2.0.0 |
| height | 图片高度 | string | --                                                        | auto，当处于填充模式下，默认为 40px | v2.0.0 |
| fill   | 填充模式 | string | cover / contain / x,y（表示可自定义设置 width 和 height） | 24px                                | v2.0.0 |
| radius | 图片倒角 | string | --                                                        | 0                                   | v2.0.0 |

### 方法

| 方法名 | 说明                     | 回调参数          | 版本   |
| ------ | ------------------------ | ----------------- | ------ |
| click  | 点击图片时触发的事件     | event: MouseEvent | v2.3.5 |
| load   | 图片加载成功时触发的事件 | event: Event      | v2.3.5 |
| error  | 图片加载失败时触发的事件 | event: Event      | v2.3.5 |
