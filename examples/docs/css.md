# CSS 代码块

---

## 全局引入

:::CopyCode

```JavaScript
import Vue from "vue";
import MINEH5UI from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/index.css";

Vue.use(MINEH5UI);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 源码

- 源码地址：[CSS 代码块](https://github.com/biaov/MINE-H5-UI/blob/master/packages/theme-default/src/base.less)

## Class 类名

- 通过在标签元素上加上 class 类名实现其应用。

| class 类名   | 说明                                         | class 类名       | 说明               |
| ------------ | -------------------------------------------- | ---------------- | ------------------ |
| g-lf         | 向左浮动                                     | g-rt             | 向右浮动           |
| clear-ft     | 清理浮动（在浮动元素的父元素上设置清理浮动） | clear-mg         | 清理外边距 margin  |
| clamp        | 溢出隐藏一行···                              | clamp-two        | 溢出隐藏两行···    |
| wrap-en      | 英文或数字强制换行                           | clear-scroll     | 设置轮动条样式     |
| inline-block | 行内块居中                                   | animation-cursor | animation 光标动画 |
| hollow-out   | 镂空效果                                     | --               | --                 |

| 属性名                         | 说明         | class 类名 | 说明 |
| ------------------------------ | ------------ | ---------- | ---- |
| img[mode="fill,contain,cover"] | 图片填充效果 | --         | --   |

## Transition 过渡动画

| name 名称 | 说明         | name 名称 | 说明         |
| --------- | ------------ | --------- | ------------ |
| fade      | 透明过渡动画 | translate | 从下弹出过渡 |
| slider    | 轮播图       | --        | --           |

## Class 代码演示

### 浮动

- 向左浮动

```HTML
<div class="g-lf"></div>
```

- 向右浮动

```HTML
<div class="g-rt"></div>
```

## Transition 代码演示

### 过渡动画

- 透明过渡动画

```HTML
<transition name="fade"></transition>
```
