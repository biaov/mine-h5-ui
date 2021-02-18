# Icon 图标

----

`MINE-H5-UI` 常用的图标。

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeIcon } from "mine-h5-ui";

Vue.use(MeIcon);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码，也可以点击右侧的图标实现复制效果。
* 右侧演示里最下面有 `MINE-H5-UI` 的所有图标，你可以点击直接复制即可。

## 使用Iconfont-阿里巴巴矢量图标库

* 直接引入你的[Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)的项目。
* 直接设置 `name` 属性即可。

:::demo

```JavaScript
// 引入iconfont图标
import "//at.alicdn.com/t/font_1774902_nar195smdvf.css"; // 线上地址，也可以使用线下文件

// 使用iconfont图标
<el-icon name="icon-close"></el-icon>
```

:::

## 代码演示

### 基础用法

* 通过 `name` 属性来设置图标。

```HTML
<me-icon name="icon-baseline-close-px">icon-baseline-close-px</me-icon>
<me-icon name="icon-success">icon-success</me-icon>
```

### 自定义颜色

* 通过 `color` 属性来设置图标颜色，默认为 #494949。

```HTML
<me-icon name="icon-warning1" color="#e6a23c"></me-icon>
<me-icon name="icon-Danger" color="#f56c6c"></me-icon>
<me-icon name="icon-Success" color="#67c23a"></me-icon>
```

### 自定义大小

* 通过 `size` 属性来设置图标颜色，默认为 24px。

```HTML
<me-icon name="icon-tuichu" size="16px"></me-icon>
<me-icon name="icon-tuichu" size="20px"></me-icon>
<me-icon name="icon-tuichu" size="24px"></me-icon>
```

### 所有图标

* 这是 `MINE-H5-UI` 的所有图标，你可以点击右侧图标即可复制该图标的 `name` 属性。

## API

### 参数

| 参数  | 说明     | 类型   | 可选值 | 默认值  |
|-------|----------|--------|--------|---------|
| name  | 图标名称 | String | --     | --      |
| color | 图标颜色 | String | --     | #494949 |
| size  | 图标大小 | String | --     | 24px    |

### 方法

| 方法名   | 说明                 | 回调参数    |
|----------|----------------------|-------------|
| on-click | 点击图标时触发的事件 | Event:event |
