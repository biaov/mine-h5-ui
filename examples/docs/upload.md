# Upload 上传

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeUpload } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeUpload.css'

createApp(App).use(MeUpload).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 注意：只能上传后缀名为 `.(svg|gif|png|jpe?g)` 的图片。

::: CopyCode

```html
<me-upload />
```

:::

### 展示图片并预览

- 通过 `v-model` 来绑定展示图片列表的内容，通过 `preview` 属性来设置图片是否可预览，preview 默认为 true。

::: CopyCode

```vue
<template>
  <me-upload v-model:fileList="fileList" :preview="true" />
</template>
<script lang="ts" setup>
/**
 * 列表数据
 */
const fileList = [
  { id: 1, url: 'https://dummyimage.com/100x100/4BC7F5/fff&text=1' },
  { id: 2, url: 'https://dummyimage.com/100x100/7A51F5/fff&text=2' },
  { id: 3, url: 'https://dummyimage.com/100x100/FFB808/fff&text=3' }
]
</script>
```

:::

### 限制上传数量

- 通过 `max-count` 属性来设置上传图片数量，默认为 1000。

::: CopyCode

```html
<me-upload :max-count="3" />
```

:::

### 限制上传大小

- 通过 `max-size` 属性来设置上传图片大小，单位为 B，默认为 2 \* 1024 \* 1024 = 2M。

::: CopyCode

```html
<me-upload :max-size="4*1024*1024" />
```

:::

### 是否允许多选

- 通过 `multiple` 属性来设置上传图片是否允许多选，默认为 false。

::: CopyCode

```html
<me-upload multiple />
```

:::

### 删除图片按钮的显示状态

- 通过 `deletable` 属性来设置删除图片按钮的显示状态，默认为 true。

::: CopyCode

```html
<me-upload :deletable="false" />
```

:::

### 禁用状态

- 通过 `disabled` 属性来设置上传图片禁用状态，默认为 false。

::: CopyCode

```html
<me-upload disabled />
```

:::

## API

### 参数

| 参数             | 说明                                                           | 类型    | 可选值       | 默认值            | 版本   |
| ---------------- | -------------------------------------------------------------- | ------- | ------------ | ----------------- | ------ |
| v-model:fileList | 双向绑定上传图片列表的内容                                     | Array   | --           | --                | v2.0.0 |
| preview          | 图片是否可预览                                                 | boolean | true / false | true              | v2.0.0 |
| max-count        | 上传图片数量                                                   | number  | --           | 1000              | v2.0.0 |
| max-size         | 上传图片大小，单位 B                                           | number  | --           | `2 * 1024 * 1024` | v2.0.0 |
| multiple         | 是否允许多传                                                   | boolean | true / false | false             | v2.0.0 |
| deletable        | 删除图片按钮的显示状态                                         | boolean | true / false | true              | v2.0.0 |
| disabled         | 禁用状态                                                       | boolean | true / false | false             | v2.0.0 |
| beforeRead       | 上传文件之前的钩子函数，返回 false 不上传文件，回调参数：files | string  | true / false | false             | v2.0.0 |
| afterRead        | 上传文件之后的钩子函数；回调参数：files                        | string  | true / false | false             | v2.0.0 |
| beforeDelete     | 删除图片之前的钩子函数，返回 false 不删除；回调参数：files     | string  | true / false | false             | v2.0.0 |

### 方法

| 方法名 | 说明                           | 回调参数   | 版本   |
| ------ | ------------------------------ | ---------- | ------ |
| change | 当上传图片列表的内容改变时触发 | arr: any[] | v2.3.5 |
