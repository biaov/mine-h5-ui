# 发布文档

## 格式化

```sh
npm run prettier
```

## Eslint 检查

```sh
npm run lint
```

## 单元测试

```sh
npm run test:unit
```

- 出现 Error
  - 单独检查（修改 packag.json 中的 `npm run test:unit:single` 命令到指定文件）
  - 重复开始步骤

```sh
npm run test:unit:single
```

## 打包

```sh
npm run build
```

## 预览

```sh
npm run preview
```

## 发布

### 发布文档

- fxp 上传 dist 文件夹

### 发布 Package

- npm 发布

```sh
npm run pre-publish
npm run pre-publish:github
npm publish --tag=beta-v2
npm publish [--tag=latest]
```

- Github 发布

```sh
npm publish
```

## 更新 Github 代码

- git push
- 更新 Github 状态
