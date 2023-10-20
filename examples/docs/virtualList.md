# MeVirtualList 虚拟列表

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeVirtualList } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeVirtualList.css'

const app = createApp(App)
app.use(MeVirtualList)
app.mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置虚拟列表的数据。
- 通过属性 `height` 来设置虚拟列表的高度。
- 通过属性 `itemHeight` 来设置虚拟列表列表项的固定高度。

::: CopyCode

```vue
<template>
  <me-virtual-list height="300px" :list="listData" :itemHeight="50">
    <template #default="{ item }">
      <div class="item">
        <p>
          <span><template v-text="`#${item.virtualId}.`"></template></span>
          <template v-text="item.text"></template>
        </p>
      </div>
    </template>
  </me-virtual-list>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Random } from 'mockjs'

const listData = ref(Array.from({ length: 100 }, () => ({ text: Random.cword(6, 14) })))
</script>
<style lang="less" scoped>
.item {
  width: 100%;
  height: 50px;
  border-bottom: 1px dotted #ececec;
  p {
    width: 100%;
    height: 100%;
    line-height: 48px;
    padding: 0 15px;
    background: #fff;
    color: #949494;
    font-size: 14px;
    span {
      color: #f56c6c;
    }
  }
}
</style>
```

:::

### 加载更多

- 通过自定义事件 `load-more` 来设置虚拟列表的数据加载更多。

::: CopyCode

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { Random } from 'mockjs'

/**
 * 状态文本
 */
const loadMoreText = Object.freeze({
  nomore: '没有更多数据了',
  more: '加载更多',
  loading: '正在加载中...'
})
const loadStatus = ref('more')

/**
 * 生成数组
 */
const createArr = (min = 6, max = 14) => Array.from({ length: 100 }, () => ({ text: Random.cword(min, max) }))
const listData = createArr()

/**
 * 加载更多
 */
const onLoadMore = () => {
  if (loadStatus.value !== 'more') return
  loadStatus.value = 'loading'
  setTimeout(() => {
    listData.push(...createArr(listData.length))
    loadStatus.value = 'nomore'
  }, 1500)
}
</script>

<template>
  <me-virtual-list height="300px" :list="listData" :itemHeight="50" @load-more="onLoadMore">
    <template #default="{ item }">
      <div class="item">
        <p>
          <span><template v-text="`#${item.virtualId}.`"></template></span>
          <template v-text="item.text"></template>
        </p>
      </div>
    </template>
    <template #more>
      <div class="more" v-text="loadMoreText[loadStatus]"></div>
    </template>
  </me-virtual-list>
</template>

<style lang="less" scoped>
.item {
  width: 100%;
  height: 50px;
  border-bottom: 1px dotted #ececec;
  p {
    width: 100%;
    height: 100%;
    line-height: 48px;
    padding: 0 15px;
    background: #fff;
    color: #949494;
    font-size: 14px;
    span {
      color: #f56c6c;
    }
  }
}
.more {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #949494;
  font-size: 12px;
}
</style>
```

:::

### 自适应高度

- 通过属性 `item-height` 的值为 0 时表示自适应高度。

::: CopyCode

```vue
<script>
import { ref } from 'vue'
import { Random } from 'mockjs'

/**
 * 列表数据
 */
const listData = ref(Array.from({ length: 100 }, () => ({ text: Random.cword(14, 50) })))
</script>

<template>
  <me-virtual-list height="300px" :list="listData" @load-more="onLoadMore(list)">
    <template #default="{ item }">
      <div class="item">
        <p>
          <span><template v-text="`#${item.virtualId}.`"></template></span>
          <template v-text="item.text"></template>
        </p>
      </div>
    </template>
  </me-virtual-list>
</template>

<style lang="less" scoped>
.item {
  width: 100%;
  min-height: 50px;
  border-bottom: 1px dotted #ececec;
  p {
    width: 100%;
    height: 100%;
    line-height: 30px;
    padding: 0 15px;
    background: #fff;
    color: #949494;
    font-size: 14px;
    span {
      color: #f56c6c;
    }
  }
}
</style>
```

:::

## API

### 参数

| 参数        | 说明               | 类型   | 可选值 | 默认值 | 版本   |
| ----------- | ------------------ | ------ | ------ | ------ | ------ |
| list        | 列表数据           | Array  | --     | []     | v2.0.0 |
| interval    | 节流时间           | Number | --     | 100    | v2.0.0 |
| height      | 虚拟列表高度       | Array  | --     | 100%   | v2.0.0 |
| item-height | 固定选项高度       | Number | --     | 0      | v2.0.0 |
| distance    | 距离底部的距离     | Number | --     | 50     | v2.0.0 |
| screen      | 前后各渲染几屏     | Array  | --     | [1, 1] | v2.0.0 |
| remain      | 每屏可见的数据条数 | Array  | Number | 8      | v2.0.0 |

### 方法

| 方法名    | 说明                 | 回调参数 | 版本   |
| --------- | -------------------- | -------- | ------ |
| load-more | 当需要加载更多时触发 | --       | v2.3.5 |
