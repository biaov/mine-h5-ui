# Style 样式类

---

## 按需引入

::: CopyCode

```js
import 'mine-h5-ui/styles/style.css'
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## Class 代码演示

### 浮动

- 向左浮动

::: CopyCode

```html
<div class="me-lf"></div>
```

:::

## Transition 代码演示

### 过渡动画

- 透明过渡动画

::: CopyCode

```html
<transition name="fade"></transition>
```

:::

## 源码

- 源码地址：[CSS 代码块](https://github.com/biaov/mine-h5-ui/blob/main/packages/styles/style.less)

## Class 类名

- 通过在标签元素上加上 class 类名实现其应用。

| class 类名          | 说明                                         | 版本   |
| ------------------- | -------------------------------------------- | ------ |
| me-lf               | 向左浮动                                     | 2.3.5  |
| me-rt               | 向右浮动                                     | 2.3.5  |
| me-clear-ft         | 清理浮动（在浮动元素的父元素上设置清理浮动） | 2.3.5  |
| me-clear-mg         | 清理外边距 margin                            | 2.3.5  |
| me-clamp            | 溢出隐藏一行···                              | 2.3.5  |
| me-clamp-two        | 溢出隐藏两行···                              | 2.3.5  |
| me-wrap-en          | 英文或数字强制换行                           | 2.3.5  |
| me-clear-scroll     | 设置轮动条样式                               | 2.3.5  |
| me-inline-block     | 行内块居中                                   | 2.3.5  |
| me-animation-cursor | animation 光标动画                           | 2.3.5  |
| me-throttle         | 节流                                         | 2.3.10 |

| 属性名                         | 说明         | class 类名 | 说明 | 版本 |
| ------------------------------ | ------------ | ---------- | ---- | ---- |
| img[mode="fill,contain,cover"] | 图片填充效果 | --         | --   | --   |

## Transition 过渡动画

| name 名称 | 说明         | 版本 |
| --------- | ------------ | ---- |
| fade      | 透明过渡动画 | --   |
| translate | 从下弹出过渡 | --   |
| slider    | 轮播图       | --   |
| slide     | 公告滚动     | --   |
