# 发布文档

## 格式化

```Basic
npm run prettier
```

## Eslint 检查

- [MeLoading](./packages/MeLoading/hooks.ts)

```Basic
npm run lint
```

## 单元测试

- 注释 [iconfont.js](./packages/MeLoading/hooks.ts)
- 单元测试完再去掉注释

```Basic
npm run test:unit
```

- 出现 Error
  - 单独检查
  - 重复开始步骤

```Basic
npm run test:unit:single
```

## 打包

- `--max_old_space_size=8192`

```Basic
npm run build
```

## 预览

```Basic
npm run preview
```

## 发布

### 发布文档

- fxp 上传 dist 文件夹

### 发布 package

- npm 发布

```Basic
npm publish --tag=beta-v2
npm publish [--tag=latest]
```

- github 发布

```Basic
npm publish
```

## 更新 github 代码

- git push
- 更新 github 状态
