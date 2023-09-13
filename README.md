# mine-h5-ui

一款轻量级、模块化基于 VUE3 的 H5 前端 UI 组件库 👍

<p align="center">
    <a href="https://mineh5ui.biaov.cn/v2">
        <img src="https://mineh5ui.biaov.cn/v2/logo.svg" width="200px" title="mineh5ui" alt="mineh5ui">
    </a>
</p>

<h2 align="center">
  <a href="https://mineh5ui.biaov.cn/v2"><img src="https://img.shields.io/npm/v/mine-h5-ui.svg?logo=npm" /></a>
  <a href="https://www.npmjs.com/package/mine-h5-ui"><img src="https://img.shields.io/npm/dt/mine-h5-ui?logo=Markdown" /></a>
  <a href="https://www.npmjs.com/package/mine-h5-ui"><img src="https://packagephobia.com/badge?p=mine-h5-ui" /></a>
  <a href="https://github.com/biaov/mine-h5-ui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/biaov/mine-h5-ui.svg?logo=Unlicense" /></a>
  <a href="https://github.com/biaov/mine-h5-ui/blob/main/.eslintrc.js"><img src="https://img.shields.io/badge/eslint-prettier-blue?logo=eslint" /></a>
</h2>

## 安装

```sh
npm i mine-h5-ui
```

### 使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import mineh5ui from 'mine-h5-ui'
import 'mine-h5-ui/styles/index.css'

const app = createApp(App)
app.use(mineh5ui)
app.mount('#app')
```

- 👉 在[快速开始](https://mineh5ui.biaov.cn/v2/doc/start)中查看更多信息。

### 使用文档

- [x] **[😎 mine-h5-ui@1.x 基于 Vue2.x](https://mineh5ui.biaov.cn/)**
- [x] **[😎 mine-h5-ui@2.x 基于 Vue3.x](https://mineh5ui.biaov.cn/v2)**

### 演示地址

- [h5 地址](https://mineh5ui.biaov.cn/v2/)
- [app 下载地址](https://github.com/biaov/mine-h5-ui/releases)

## 项目文档

### 运行项目

#### 克隆项目

```sh
git clone https://github.com/biaov/mine-h5-ui.git
```

#### 安装依赖

- 项目根目录安装项目依赖

```sh
npm i
```

#### 运行项目

```sh
npm start
```

### 打包项目

- 打包组件库文档和组件库

```sh
npm run build
```

### 项目目录

<details>
<summary>👀 点击查看目录</summary>

```Markdown
|-- mine-h5-ui -------------------------- 项目名称
    |-- .editorconfig ------------------- 编码配置文件
    |-- .eslintignore ------------------- Eslint 忽略文件
    |-- .eslintrc.js -------------------- Eslint 配置文件
    |-- .gitignore ---------------------- Git 上传忽略文件
    |-- .npmignore ---------------------- NPM 上传忽略文件
    |-- EXPLAIN.md ---------------------- 项目解释文档
    |-- package-lock.json --------------- 项目依赖版本信息文件
    |-- package.json -------------------- 项目依赖文件
    |-- README.md ----------------------- 项目介绍文档
    |-- tsconfig.json ------------------- TS 配置文件
    |-- vite.config.ts ------------------ Vite 配置文件
    |-- scripts ------------------------- 项目打包配置信息目录
    |-- examples ------------------------ 项目示例目录
    |   |-- App.vue --------------------- 项目主入口
    |   |-- main.ts --------------------- 项目入口文件
    |   |-- assets ---------------------- 图片资源文件目录
    |   |-- components ------------------ 公共组件目录
    |   |-- docs ------------------------ 示例文档目录
    |   |-- router ---------------------- 路由目录styles
    |   |-- styles ---------------------- 公共样式
    |   |-- utils ----------------------- 工具包
    |   |-- views ----------------------- 页面目录
    |-- dist ---------------------------- NPM 依赖打包目录
    |-- mobile -------------------------- H5 示例目录
    |   |-- App.vue --------------------- 项目主入口
    |   |-- main.ts --------------------- 项目入口文件
    |   |-- assets ---------------------- 图片资源文件目录
    |   |-- components ------------------ 公共组件目录
    |   |-- router ---------------------- 路由目录
    |   |-- views ----------------------- 页面目录
    |-- packages ------------------------ UI 库组件目录
    |   |-- index.ts -------------------- 入口文件
    |-- public -------------------------- 公共静态资源目录
    |-- tests --------------------------- 测试目录
        |-- unit ------------------------ 单元测试目录
```

</details>

### 技术栈

> Less + TypeScript + Vue3.x + Vite + Gulp + Jest

### 依赖解析

#### dependencies

- `clipboard`: 剪切板
- `html2canvas`: 截屏
- `mockjs`: 模拟数据
- `qrcode`: 二维码
- `vue`: 前端框架
- `vue-router`: 路由
- `@types/jest`: `jest` 的类型
- `@types/mockjs`: `mockjs` 的类型
- `@types/node`: `node` 的类型
- `@types/qrcode`: `qrcode` 的类型
- `@typescript-eslint/eslint-plugin`: 检测和修复 TS 代码
- `@typescript-eslint/parser`: 解析 TS 代码并生成抽象语法树（AST），以供 Eslint 进行代码检查
- `@vitejs/plugin-vue`: Vite 解析 Vue 文件
- `@vue/compiler-sfc`: 编译 Vue 单文件组件
- `@vue/test-utils`: 单元测试和集成测试
- `@vue/vue3-jest`: Jest 预设，用于测试 Vue3.x 应用程序
- `autoprefixer`: 添加浏览器厂商前缀
- `eslint`: 代码检查工具
- `eslint-config-airbnb-base`: airbnb-base 代码编写规范
- `eslint-config-prettier`: 将 Prettier 规则集成到 ESlint 检查中
- `eslint-plugin-import`: 检测和修复 JS 中的模块导入导出问题
- `eslint-plugin-jest`: 检测和修复 jest 代码
- `eslint-plugin-prettier`: 检测不符合 Prettier 格式的代码
- `eslint-plugin-vue`: 检测和修复 Vue 代码
- `gulp`: CSS 构建工具
- `gulp-autoprefixer`: 使用 Gulp 添加浏览器厂商前缀
- `gulp-clean`: 使用 Gulp 清理文件
- `gulp-cssmin`: 使用 Gulp 压缩 CSS 代码
- `gulp-less`: 使用 Gulp 解析 LESS
- `gulp-postcss`: 使用 Gulp 添加浏览器厂商前缀等其它操作
- `highlight.js`: 设置 Markdown 文件样式
- `husky`: Git 操作时自动触发脚本
- `jest`: JS 测试框架
- `jest-environment-jsdom`: `jest` 的环境插件
- `less`: CSS 预编译器
- `markdown-it-container`: Markdown 解析器
- `postcss-pxtorem`: 生成 Rem 的 Postcss 插件
- `prettier`: 代码格式化
- `rollup-plugin-license`: 生成版权的 Rollup 插件
- `ts-jest`: `jest` 解析 TS 文件
- `tslib`: TS 库
- `typescript`: 编程语言
- `vite`: 项目构建工具
- `vite-plugin-dts`: 生成 `.d.ts` 文件的 Vite 插件
- `vite-plugin-eslint`: 检查代码格式的 Vite 插件
- `vite-plugin-pwa`: 生成 PWA 的 Vite 插件
- `vite-plugin-vue-markdown`: 解析 Markdown 文件的 Vite 插件
- `vue-tsc`: 编译 TS 单文件 Vue 文件的工具

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/mine-h5-ui)](https://github.com/biaov/mine-h5-ui/graphs/contributors)
