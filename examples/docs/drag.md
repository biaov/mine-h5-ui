# Drag 拖拽

---

## 按需引入

:::CopyCode

```js
import Vue from 'vue'
import { MeDrag } from 'mine-h5-ui'

Vue.use(MeDrag)
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置组件的列表数据。

:::CopyCode

```html
<template>
  <me-drag v-model:list="list" v-model:current="current">
    <template #default="{ item }">
      <img :src="item.url" alt="img" mode="fill" />
    </template>
  </me-drag>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  // 列表数据
  const list = ref([
    {
      rect: {
        w: 100,
        h: 100,
        x: 0,
        y: 0,
        r: 0
      },
      url: 'https://dummyimage.com/100x100/67c23a/fff&text=1'
    },
    {
      rect: {
        w: 80,
        h: 80,
        x: 110,
        y: 110,
        r: 0
      },
      url: 'https://dummyimage.com/80x80/409eff/fff&text=2'
    }
  ])
  const current = ref(0) // 当前选中项
</script>
```

:::

## API

### 参数

| 参数            | 说明                   | 类型   | 可选值 | 默认值  | 版本  |
| --------------- | ---------------------- | ------ | ------ | ------- | ----- |
| v-model:current | 选中项                 | number | --     | -1      | --    |
| v-model:list    | 列表数据               | Array  | --     | --      | --    |
| width           | 容器宽度               | string | --     | 300px   | --    |
| height          | 容器高度               | string | --     | 300px   | --    |
| theme           | 选中主题色             | string | --     | #f56c6c | --    |
| themeText       | 选中主题文本色         | string | --     | #fff    | --    |
| angleRange      | 对正角度范围,单位度(°) | number | --     | 5       | --    |
| scale           | 双指缩放一倍的像素     | number | --     | 100     | 2.3.3 |

### Slots

| 具名插槽 | 说明     | scopedSlots     | 版本 |
| -------- | -------- | --------------- | ---- |
| default  | 默认名称 | { item, index } | --   |

### 方法

| 方法名         | 说明           | 回调参数                  | 版本  |
| -------------- | -------------- | ------------------------- | ----- |
| change         | 拖拽改变时触发 | list: any[], name: string | 2.3.5 |
| update:current | 更新选中项触发 | value: number             | --    |
| update:list    | 更新列表触发   | list: any[]               | --    |
