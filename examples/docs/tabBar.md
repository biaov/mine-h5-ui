# TabBar 标签栏

---

## 按需引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeTabBar } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTabBar.css'

createApp(App).use(MeTabBar).mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `list` 属性来设置组件数据，具体的[数据格式详情](#list)。

::: CopyCode

```vue
<script lang="ts" setup>
/**
 * 列表数据
 */
const listData = Object.freeze([
  {
    id: 1,
    icon: 'icon-home',
    text: '首页',
    state: true
  },
  {
    id: 2,
    icon: 'icon-tupian',
    text: '图片',
    state: false
  },
  {
    id: 3,
    icon: 'icon-gongnengguanli',
    text: '功能',
    state: false
  },
  {
    id: 4,
    icon: 'icon-user1',
    text: '用户',
    state: false
  }
])
</script>

<template>
  <me-tab-bar :list="listData" />
</template>
```

:::

### 徽标提示

- 通过 `dot` 和 `badge` 来设置组件右上角的点和徽标提示。
- 注意：`dot` 的权重高于 `badge` 的权重。

::: CopyCode

```vue
<script lang="ts" setup>
/**
 * 列表数据
 */
const listData = Object.freeze([
  {
    id: 1,
    icon: 'icon-home',
    text: '首页',
    state: true
  },
  {
    id: 2,
    icon: 'icon-tupian',
    text: '图片',
    badge: '6',
    state: false
  },
  {
    id: 3,
    icon: 'icon-gongnengguanli',
    text: '功能',
    badge: 'A',
    state: false
  },
  {
    id: 4,
    icon: 'icon-user1',
    text: '用户',
    dot: true,
    state: false
  }
])
</script>

<template>
  <me-tab-bar :list="listData" />
</template>
```

:::

### 自定义图标

- 通过 `img` 和 `imgSelected` 来设置组件未选中和选中状态的图标。
- 注意：
  - `img` 和 `imgSelected` 是成对出现的。
  - `icon` 的权重高于 `img` 和 `imgSelected` 的权重。

::: CopyCode

```vue
<script lang="ts" setup>
import img from '^/assets/verify.png'
import imgSelected from '^/assets/verify_selected.png'

/**
 * 列表数据
 */
const listData = Object.freeze([
  {
    id: 1,
    text: '安全',
    state: true,
    img,
    imgSelected
  },
  {
    id: 2,
    icon: 'icon-tupian',
    text: '图片',
    state: false
  },
  {
    id: 3,
    icon: 'icon-gongnengguanli',
    text: '功能',
    state: false
  },
  {
    id: 4,
    icon: 'icon-user1',
    text: '用户',
    state: false
  }
])
</script>

<template>
  <me-tab-bar :list="listData" />
</template>
```

:::

### 自定义颜色

- 通过 `border-color` 和 `background` 属性来设置组件的背景颜色和上边框颜色，它们的默认分别为 #dcdfe6 和 #fff。
- 通过 `color` 和 `color-selected` 属性来设置组件未选中和选中状态的颜色，它们的默认分别为 #949494 和 #409eff。

::: CopyCode

```vue
<script lang="ts" setup>
/**
 * 自定义颜色
 */
const colors = Object.freeze({
  /**
   * 颜色
   */
  color: '',
  /**
   * 选中颜色
   */
  colorSelected: '',
  /**
   * 背景颜色
   */
  background: '',
  /**
   * 上边框颜色
   */
  borderColor: ''
})

/**
 * 列表数据
 */
const listData = Object.freeze([
  {
    id: 1,
    icon: 'icon-home',
    text: '首页',
    state: true
  },
  {
    id: 2,
    icon: 'icon-tupian',
    text: '图片',
    state: false
  },
  {
    id: 3,
    icon: 'icon-gongnengguanli',
    text: '功能',
    state: false
  },
  {
    id: 4,
    icon: 'icon-user1',
    text: '用户',
    state: false
  }
])
</script>

<template>
  <me-tab-bar :list="listData" v-bind="colors" />
</template>
```

:::

## API

### 参数

| 参数          | 说明                              | 类型   | 可选值 | 默认值  | 版本   |
| ------------- | --------------------------------- | ------ | ------ | ------- | ------ |
| list          | 组件数据，对象数组，[详情](#list) | Array  | --     | --      | v2.0.0 |
| border-color  | 组件上边框颜色                    | string | --     | #dcdfe6 | v2.0.0 |
| background    | 组件背景颜色                      | string | --     | #fff    | v2.0.0 |
| color         | 未选中状态颜色                    | string | --     | #949494 | v2.0.0 |
| colorSelected | 选中状态颜色                      | string | --     | #409eff | v2.0.0 |

#### List

| 参数        | 说明                 | 类型    | 可选值       | 默认值 | 版本   |
| ----------- | -------------------- | ------- | ------------ | ------ | ------ |
| icon        | 图标                 | string  | --           | --     | v2.0.0 |
| text        | 文本内容             | string  | --           | --     | v2.0.0 |
| dot         | 图标右上角的点       | boolean | true / false | --     | v2.0.0 |
| state       | 选中状态             | boolean | true / false | --     | v2.0.0 |
| badge       | 图标右上角徽标的内容 | string  | --           | --     | v2.0.0 |
| img         | 自定义未选中图标     | string  | --           | --     | v2.0.0 |
| imgSelected | 自定义选中图标       | string  | --           | --     | v2.0.0 |

### 方法

| 方法名 | 说明                   | 回调参数     | 版本   |
| ------ | ---------------------- | ------------ | ------ |
| change | 点击列表项时触发的事件 | item: Object | v2.3.5 |
