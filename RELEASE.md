# 发布文档

## 单元测试

```sh
npm run test:unit
```

- 出现错误
  - 单独检查（修改 packag.json 中的 `npm run test:unit:single` 命令到指定文件）
  - 重复单元测试步骤

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

### 上传文档

- fxp 上传 dist/docs 文件夹

### 发布 Package

- 发布到 npm

```sh
npm run pre-publish
npm publish --tag=beta-v2
npm publish [--tag=latest]
```

- 发布到 Github

```sh
npm run pre-publish:github
npm publish
```
