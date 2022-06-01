# Drag 拖拽

---

## 按需引入

:::CopyCode

```JavaScript
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

```HTML
<template>
  <me-drag :list.sync="list" :current.sync="current">
    <template #default="{item}">
      <img :src="item.url" alt="img" mode="fill" />
    </template>
  </me-drag>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      list: [
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
      ],
      current: 0 // 当前选中项
    }
  }
}
</script>
```

:::

## API

### 参数

| 参数       | 说明                   | 类型   | 可选值 | 默认值  | 版本  |
| ---------- | ---------------------- | ------ | ------ | ------- | ----- |
| current    | 选中项                 | Number | --     | -1      | --    |
| list       | 列表数据               | Array  | --     | --      | --    |
| width      | 容器宽度               | String | --     | 300px   | --    |
| height     | 容器高度               | String | --     | 300px   | --    |
| theme      | 选中主题色             | String | --     | #f56c6c | --    |
| themeText  | 选中主题文本色         | String | --     | #fff    | --    |
| angleRange | 对正角度范围,单位度(°) | Number | --     | 5       | --    |
| scale      | 双指缩放一倍的像素     | Number | --     | 100     | 1.6.3 |

#### Slots

| 具名插槽 | 说明     | scopedSlots     | 版本 | 版本 |
| -------- | -------- | --------------- | ---- | ---- |
| default  | 默认名称 | { item, index } | --   | --   |

### 方法

| 方法名         | 说明           | 回调参数                 | 版本 |
| -------------- | -------------- | ------------------------ | ---- |
| on-change      | 拖拽改变时触发 | list: Array, name:string | --   |
| update:current | 更新选中项触发 | value: number            | --   |
| update:list    | 更新列表触发   | list: Array              | --   |
