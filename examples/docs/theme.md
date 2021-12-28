# 自定义主题

---

## 介绍

- `MINE-H5-UI` 提供了一套默认主题，CSS 命名采用 `网易NEC` 的风格，方便使用者覆盖样式。
- 如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

## 样式变量

- `MINE-H5-UI` 使用了 Less 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。
- 所有可用的颜色变量请参考[配置文件](https://github.com/biaov/MINE-H5-UI)。

## 定制方法

### 方法一 · 样式覆盖

- 在使用组件的时候，使用你编写的样式覆盖掉原来的默认样式即可。

### 方法二 · 变量重写

#### 从 Github 上去 Clone 项目下来

:::demo

```Basic
git clone https://github.com/biaov/MINE-H5-UI.git
```

:::

#### 或者在 Github 上下载 ZIP 包到本地

- 直接在浏览器输入以下地址即可下载。

:::demo

```Text
https://codeload.github.com/biaov/MINE-H5-UI/zip/master
```

:::

#### 进入项目更目录安装相关依赖

:::demo

```Basic
npm install
```

:::

- 如果你使用的是 [Cmder](https://cmder.net/) 终端模拟器，并且配置了 git，那么你可以复制下面的一条命令到 Cmder 中，即可完成下载、安装、VSCode 打开项目等所有步骤。

:::demo

```Basic
git clone https://github.com/biaov/MINE-H5-UI.git && cd MINE-H5-UI && npm i && code ./
```

:::
