# ShareSheet 分享面板

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeShareSheet } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeShareSheet.css'

const app = createApp(App)
app.use(MeShareSheet)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model:visible` 来设置分享面板的显示和隐藏。
- 通过属性 `tips` 来设置分享面板的提示文本。

::: CopyCode

```vue
<template>
  <!-- 分享面板 -->
  <ul class="share-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="label" v-text="item.label"></div>
      <ul class="list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick(it)">
          <span v-text="it.value"></span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-share-sheet v-model:visible="it.visible" :list="it.list" tips="立即分享给好友" @change="onChange" @cancel="onCancel"></me-share-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { MeToast } from 'mine-h5-ui'

const listData = $ref([
  {
    id: 1,
    label: '基础用法',
    list: [
      {
        id: 1,
        value: '立即分享',
        visible: false,
        list: [
          {
            icon: 'icon-wechat',
            value: '微信',
            color: '#67c23a'
          },
          {
            icon: 'icon-pengyouquan',
            value: '朋友圈',
            color: '#409eff'
          },
          {
            icon: 'icon-zhifubao',
            value: '支付宝',
            color: '#06b4fd'
          },
          {
            icon: 'icon-qq',
            value: 'QQ',
            color: '#ec502b'
          },
          {
            icon: 'icon-weibo',
            value: '微博',
            color: '#f40f3b'
          },
          {
            icon: 'icon-qr-code',
            value: '二维码',
            color: '#1cc09e'
          }
        ]
      }
    ]
  }
])
// 点击列表项
const onClick = item => {
  item.visible = false
}
// 点击分享面板列表
const onChange = item => {
  MeToast(JSON.stringify(item))
}
// 点击分享面板取消按钮
const onCancel = () => {
  MeToast('你点击了取消按钮')
}
</script>
<style scoped lang="less">
.share-sheet {
  > li {
    margin-bottom: 10px;
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: #949494;
      font-size: 14px-min;
    }
    .list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid darken(#f6f6f6, 5%);
        cursor: pointer;
        > span {
          color: #494949;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
```

:::

## API

### 参数

| 参数                     | 说明                 | 类型    | 可选值 | 默认值         | 版本 |
| ------------------------ | -------------------- | ------- | ------ | -------------- | ---- |
| visible(v-model:visible) | 双向绑定组件显示状态 | boolean | --     | --             | --   |
| list                     | 对象数组数据         | Array   | --     | --             | --   |
| tips                     | 提示文本             | string  | --     | 立即分享给好友 | --   |

### 方法

| 方法名 | 说明                     | 回调参数      | 版本  |
| ------ | ------------------------ | ------------- | ----- |
| change | 点击分享列表时触发的事件 | item: Object  | 2.3.5 |
| cancel | 点击取消按钮时触发的事件 | e: MouseEvent | 2.3.5 |
