# mine-h5-ui

一款轻量级、模块化基于 Vue3.x 的 H5 前端 UI 组件库 👍

<p align="center">
    <a href="https://mineh5ui.biaov.cn/v2">
        <img src="https://mineh5ui.biaov.cn/v2/logo.svg" width="200px" title="mineh5ui" alt="mineh5ui">
    </a>
</p>

<h2 align="center">
  <a href="https://mineh5ui.biaov.cn/v2"><img src="https://img.shields.io/npm/v/mine-h5-ui.svg?logo=npm" alt="mine-h5-ui" /></a>
  <a href="https://www.npmjs.com/package/mine-h5-ui"><img src="https://img.shields.io/npm/dt/mine-h5-ui?logo=Markdown" alt="mine-h5-ui" /></a>
  <a href="https://www.npmjs.com/package/mine-h5-ui"><img src="https://packagephobia.com/badge?p=mine-h5-ui" alt="mine-h5-ui" /></a>
  <a href="https://github.com/biaov/mine-h5-ui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/biaov/mine-h5-ui.svg?logo=Unlicense" alt="mine-h5-ui" /></a>
  <a href="https://github.com/biaov/mine-h5-ui/blob/main/.eslintrc.js"><img src="https://img.shields.io/badge/eslint-prettier-blue?logo=eslint" alt="mine-h5-ui" /></a>
  <a href="https://vscode.dev/github/biaov/mine-h5-ui"><img src="https://img.shields.io/badge/open-Visual Studio Code-blue?logo=visualstudiocode" alt="mine-h5-ui" /></a>
</h2>

## 特性

- [x] 丰富的模块化组件和组合式 API，60<sup>+</sup> 个组件
- [x] 支持按需加载，`tree-shaking` 优化
- [x] 完善的组件使用文档和演示示例
- [x] 内置每个组件的单元测试
- [x] 多页面配置
- [x] 支持移动端预览
- [x] 支持 `PWA`
- [x] 支持 `TypeScript`
- [x] 版本更新日志
- [x] 开发指南

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

createApp(App).use(mineh5ui).mount('#app')
```

- 👉 在[快速开始](https://mineh5ui.biaov.cn/v2/doc/start)中查看更多信息。

### 使用文档

- [x] **[😎 mine-h5-ui@1.x 基于 Vue2.x](https://mineh5ui.biaov.cn/)**
- [x] **[😎 mine-h5-ui@2.x 基于 Vue3.x](https://mineh5ui.biaov.cn/v2)**

### 演示地址

- [H5 地址](https://mineh5ui.biaov.cn/v2/)
- [APP 下载地址](https://github.com/biaov/mine-h5-ui/releases)

## 项目文档

### 运行项目

#### 克隆项目

```sh
git clone https://github.com/biaov/mine-h5-ui.git --depth=1
```

#### 安装依赖

- 项目根目录安装项目依赖

```sh
npm i
```

#### 启动项目

```sh
npm start
```

### 打包项目

- 打包组件库文档和组件库

```sh
npm run build
```

### 技术栈

- `Vite` + `Vue3.x` + `TypeScript` + `Less` + `Gulp` + `Vitest`

### 目录解析

```MD
├── mine-h5-ui --------------------------------- 组件库
│   ├── .husky -------------------------------- Git 操作时自动触发脚本
│   ├── .vscode ------------------------------- VSCode 配置
│   ├── config -------------------------------- 配置文件
│   ├── dist ---------------------------------- 打包后的文件
│   ├── examples ------------------------------ 组件库文档
│   │   ├── assets ---------------------------- 静态资源
│   │   ├── components ------------------------ 组件库文档组件
│   │   ├── config ---------------------------- 配置文件
│   │   ├── docs ------------------------------ 组件库文档主页面 Markdown 文件
│   │   ├── router ---------------------------- 路由
│   │   ├── styles ---------------------------- 样式
│   │   ├── utils ----------------------------- 工具
│   │   ├── views ----------------------------- 组件库文档页面
│   │   ├── App.vue --------------------------- 组件库文档主页面
│   │   └── main.ts --------------------------- 组件库文档入口文件
│   ├── mobile -------------------------------- 移动端组件库文档
│   │   ├── assets ---------------------------- 静态资源
│   │   ├── components ------------------------ 组件库文档组件
│   │   ├── router ---------------------------- 路由
│   │   ├── views ----------------------------- 组件库文档页面
│   │   ├── App.vue --------------------------- 组件库文档主页面
│   │   └── main.ts --------------------------- 组件库文档入口文件
│   ├── node_modules -------------------------- 依赖包
│   ├── packages ------------------------------ 组件库组件
│   ├── public -------------------------------- 静态资源
│   ├── scripts ------------------------------- 脚本
│   ├── tests --------------------------------- 测试
│   ├── typings ------------------------------- 类型
│   ├── .editorconfig ------------------------- 编辑器配置
│   ├── .eslintignore ------------------------- Eslint 忽略文件
│   ├── .eslintrc.js -------------------------- Eslint 配置
│   ├── .gitignore ---------------------------- Git 忽略文件
│   ├── .ncurc.json --------------------------- NCU 配置
│   ├── .npmignore ---------------------------- NPM 忽略文件
│   ├── .prettierignore ----------------------- Prettier 忽略文件
│   ├── index.html ---------------------------- 组件库文档入口文件
│   ├── LICENSE ------------------------------- 授权协议
│   ├── mobile.html --------------------------- 移动端组件库文档入口文件
│   ├── package-lock.json --------------------- 依赖包版本锁定文件
│   ├── package.json -------------------------- 依赖包配置文件
│   ├── README.md ----------------------------- 项目文档
│   ├── RELEASE.md ---------------------------- 发布文档
│   ├── tsconfig.json ------------------------- TS 配置
│   ├── vite.config.ts ------------------------ Vite 配置
└   └── vitest.config.ts ---------------------- Vitest 配置
```

### 依赖解析

#### dependencies

- `clipboard`: 剪切板
- `html2canvas`: 截屏
- `mockjs`: 模拟数据
- `qrcode`: 二维码
- `vue`: 前端框架
- `vue-router`: 路由

#### devDependencies

- `@types/mockjs`: `mockjs` 的类型
- `@types/node`: `node` 的类型
- `@types/qrcode`: `qrcode` 的类型
- `@typescript-eslint/eslint-plugin`: 检测和修复 TS 代码
- `@typescript-eslint/parser`: 解析 TS 代码并生成抽象语法树（AST），以供 Eslint 进行代码检查
- `@vitejs/plugin-vue`: Vite 解析 Vue 文件
- `@vue/compiler-sfc`: 编译 Vue 单文件组件
- `@vue/test-utils`: 单元测试和集成测试
- `autoprefixer`: 添加浏览器厂商前缀
- `eslint`: 代码检查工具
- `eslint-config-airbnb-base`: airbnb-base 代码编写规范
- `eslint-config-prettier`: 将 Prettier 规则集成到 ESlint 检查中
- `eslint-plugin-import`: 检测和修复 JS 中的模块导入导出问题
- `eslint-plugin-prettier`: 检测不符合 Prettier 格式的代码
- `eslint-plugin-vue`: 检测和修复 Vue 代码
- `gulp`: CSS 构建工具
- `gulp-autoprefixer`: 使用 Gulp 添加浏览器厂商前缀
- `gulp-clean`: 使用 Gulp 清理文件
- `gulp-cssmin`: 使用 Gulp 压缩 CSS 代码
- `gulp-less`: 使用 Gulp 解析 LESS
- `gulp-postcss`: 使用 Gulp 添加浏览器厂商前缀等其它操作
- `husky`: Git 操作时自动触发脚本
- `less`: CSS 预编译器
- `markdown-it-container`: Markdown 解析器
- `postcss-pxtorem`: 生成 Rem 的 Postcss 插件
- `prettier`: 代码格式化
- `rollup-plugin-license`: 生成版权的 Rollup 插件
- `shiki`: Markdown 代码高亮
- `tslib`: TS 库
- `typescript`: 编程语言
- `unplugin-vue-markdown`: 解析 Markdown 文件的 Vite 插件
- `vite`: 项目构建工具
- `vite-plugin-dts`: 生成 `.d.ts` 文件的 Vite 插件
- `vite-plugin-eslint`: 检查代码格式的 Vite 插件
- `vite-plugin-pwa`: 生成 PWA 的 Vite 插件
- `vitest`: JS 测试框架
- `vue-tsc`: 编译 TS 单文件 Vue 文件的工具

#### optionalDependencies

- `@rollup/rollup-linux-x64-gnu`: 支持 Linux 环境运行 Rollup

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/mine-h5-ui)](https://github.com/biaov/mine-h5-ui/graphs/contributors)
