# Upload 上传

---

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MeUpload } from "mine-h5-ui";

Vue.use(MeUpload);
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 注意：只能上传后缀名为 `.(svg|gif|png|jpe?g)` 的图片。

```HTML
<me-upload></me-upload>
```

### 展示图片并预览

- 通过 `v-model` 来绑定展示图片列表的内容，通过 `preview` 属性来设置图片是否可预览，preview 默认为 true。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-upload v-model="fileList" :preview="true"></me-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 展示文件
      fileList: [
        { id: 1, url: "https://app.biaov.cn/mineapp/images/avatar/1.png" },
        { id: 2, url: "https://app.biaov.cn/mineapp/images/avatar/2.png" },
        { id: 3, url: "https://app.biaov.cn/mineapp/images/avatar/5.png" }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.m-demo {

}
</style>
```

### 限制上传数量

- 通过 `max-count` 属性来设置上传图片数量，默认为 1000。

```HTML
<me-upload :max-count="3"></me-upload>
```

### 限制上传大小

- 通过 `max-size` 属性来设置上传图片大小，单位为 B，默认为 2 \* 1024 \* 1024 = 2M。

```HTML
<me-upload :max-size="4*1024*1024"></me-upload>
```

### 是否允许多选

- 通过 `multiple` 属性来设置上传图片是否允许多选，默认为 false。

```HTML
<me-upload :multiple="true"></me-upload>
```

### 删除图片按钮的显示状态

- 通过 `deletable` 属性来设置删除图片按钮的显示状态，默认为 true。

```HTML
<me-upload :deletable="false"></me-upload>
```

### 禁用状态

- 通过 `disabled` 属性来设置上传图片禁用状态，默认为 false。

```HTML
<me-upload :disabled="true"></me-upload>
```

## API

### 参数

| 参数         | 说明                                                                                                                    | 类型    | 可选值       | 默认值            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------------ | ----------------- |
| v-model      | 双向绑定上传图片列表的内容                                                                                              | Array   | --           | --                |
| preview      | 图片是否可预览                                                                                                          | Boolean | true / false | true              |
| max-count    | 上传图片数量                                                                                                            | Number  | --           | 1000              |
| max-size     | 上传图片大小，单位 B                                                                                                    | Number  | --           | 2 \* 1024 \* 1024 |
| multiple     | 是否允许多传                                                                                                            | Boolean | true / false | false             |
| deletable    | 删除图片按钮的显示状态                                                                                                  | Boolean | true / false | true              |
| disabled     | 禁用状态                                                                                                                | Boolean | true / false | false             |
| beforeRead   | 读取图片文件之前的钩子函数，返回 false 表示不读取图片文件，即不进入 afterRead 钩子函数；回调参数：files，上传的图片列表 | String  | true / false | false             |
| afterRead    | 读取图片文件之后的钩子函数；回调参数：files，上传的图片列表                                                             | String  | true / false | false             |
| beforeDelete | 删除图片之前的钩子函数，返回 false 表示不删除；回调参数：files，上传的图片列表                                          | String  | true / false | false             |

### 方法

| 方法名    | 说明                           | 回调参数                 |
| --------- | ------------------------------ | ------------------------ |
| on-change | 当上传图片列表的内容改变时触发 | Array:改变后图片列表的值 |
