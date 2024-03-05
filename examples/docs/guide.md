# Guide 引导 `v2.8.0`

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeGuide } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeGuide.css'

createApp(App).use(MeGuide).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `visible` 来设置组件的显示和隐藏，默认为 false。

::: CopyCode

```vue
<me-guide visible :list="['https://dummyimage.com/750x1334/f60/fff&text=1', 'https://dummyimage.com/750x1334/f60/fff&text=1']" />
```

:::

### 自定义开启

- 通过 list 来设置引导图片。

::: CopyCode

```vue
<script lang="ts" setup>
import { useVisible } from 'mine-h5-ui'

const [visible, setVisible] = useVisible()
const list = Object.freeze(['https://dummyimage.com/750x1334/f60/fff&text=1', 'https://dummyimage.com/750x1334/f60/fff&text=1'])
</script>

<template>
  <me-button type="primary" @click="setVisible(true)">开启引导</me-button>
  <me-guide v-model:visible="visible" :list="list" />
</template>
```

:::

## API

### 参数

| 参数                     | 说明                 | 类型     | 可选值       | 默认值 | 版本   |
| ------------------------ | -------------------- | -------- | ------------ | ------ | ------ |
| visible(v-model:visible) | 双向绑定组件显示状态 | boolean  | --           | --     | v2.8.0 |
| list                     | 引导图片数据         | string[] | --           | --     | v2.8.0 |
| disabledClose            | 禁止完成关闭         | boolean  | true / false | false  | v2.8.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.8.0 |

### 方法

| 方法名         | 说明                           | 回调参数      | 版本   |
| -------------- | ------------------------------ | ------------- | ------ |
| update:visible | visible 更新时触发的事件       | bool: boolean | v2.8.0 |
| step           | 点击引导图片时触发的事件       | index: number | v2.8.0 |
| finish         | 点击最后的引导图片时触发的事件 | --            | v2.8.0 |
