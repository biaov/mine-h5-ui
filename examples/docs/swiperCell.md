# SwiperCell 滑动单元格

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeSwiperCell } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeSwiperCell.css'

createApp(App).use(MeSwiperCell).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过设置 `Slots` 来实现向左拖拽功能。
- 在你的 `template` 上设置 `#content` 来表示你要显示的部分。
- 在你的 `template` 上设置 `#hidden` 来表示你要隐藏的部分。
- 注意：你的隐藏区域要设置宽度，即你的 `#hidden` 元素的宽度，不然可能用不了。

::: CopyCode

```vue
<template>
  <!-- 滑动单元格 -->
  <me-swiper-cell>
    <template #content>
      <h3 class="tit">向左滑动显示删除按钮</h3>
    </template>
    <template #hidden>
      <div class="btns">
        <me-button type="danger" icon="icon-delete1" @click="onDelete">删除</me-button>
      </div>
    </template>
  </me-swiper-cell>
</template>
<script lang="ts" setup>
import { MeMessageBox, MeToast } from 'mine-h5-ui'

/**
 * 删除按钮
 */
const onDelete = () => {
  MeMessageBox.confirm({
    tips: '警告',
    message: '你确定要删除此项吗？',
    onOk() {
      MeToast('删除成功')
    }
  })
}
</script>
<style scoped lang="less">
.me-swiper-cell {
  .tit {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background: #f56c6c;
    color: #494949;
    font-size: 14px;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #f56c6c;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>
```

:::

## API

### 参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 版本   |
| ---- | ---- | ---- | ------ | ------ | ------ |
| --   | --   | --   | --     | --     | v2.0.0 |

### Slots

| 具名插槽 | 说明               | scopedSlots | 版本   |
| -------- | ------------------ | ----------- | ------ |
| content  | 需要显示的内容区域 | --          | v2.0.0 |
| hidden   | 需要隐藏的内容区域 | --          | v2.0.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本   |
| ------ | ---- | -------- | ------ |
| --     | --   | --       | v2.0.0 |
