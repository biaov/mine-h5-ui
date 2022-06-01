# ShareSheet 分享面板

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from 'vue'
import { MeShareSheet } from 'mine-h5-ui'

Vue.use(MeShareSheet)
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置分享面板的显示和隐藏。
- 通过属性 `tips` 来设置分享面板的提示文本。

```HTML
<template>
  <!-- 分享面板 -->
  <ul class="m-share-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-share-sheet v-model="it.visible" :list="it.list" tips="立即分享给好友" @on-change="onChange" @on-cancel="onCancel"></me-share-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
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
      ]
    }
  },
  methods: {
    // 点击分享面板列表
    onChange(item) {
      this.$MeToast(JSON.stringify(item))
    },
    // 点击分享面板取消按钮
    onCancel() {
      this.$MeToast('你点击了取消按钮')
    }
  }
}
</script>
<style scoped lang="less">
.m-share-sheet {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid darken(@bg-color, 5%);
        cursor: pointer;
        > span {
          color: @font-color;
          font-size: @font-size;
        }
      }
    }
  }
}
</style>
```

## API

### 参数

| 参数    | 说明                 | 类型    | 可选值 | 默认值         | 版本 |
| ------- | -------------------- | ------- | ------ | -------------- | ---- |
| v-model | 双向绑定组件显示状态 | Boolean | --     | --             | --   |
| list    | 对象数组数据         | Array   | --     | --             | --   |
| tips    | 提示文本             | String  | --     | 立即分享给好友 | --   |

### 方法

| 方法名    | 说明                     | 回调参数            | 版本 |
| --------- | ------------------------ | ------------------- | ---- |
| on-change | 点击分享列表时触发的事件 | object:选中的对象值 | --   |
| on-cancel | 点击取消按钮时触发的事件 | --                  | --   |
