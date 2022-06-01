# TabBar 标签栏

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from 'vue'
import { MeTabBar } from 'mine-h5-ui'

Vue.use(MeTabBar)
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `list` 属性来设置组件数据，具体的[数据格式详情](#list)。

```HTML
<template>
  <me-tab-bar :list="listData"></me-tab-bar>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
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
      ]
    }
  }
}
</script>
```

### 徽标提示

- 通过 `dot` 和 `badge` 来设置组件右上角的点和徽标提示。
- 注意：`dot` 的权重高于 `badge` 的权重。

```JavaScript
export default {
  data() {
    return {
      // 列表数据
      listData: [
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
      ]
    }
  }
}
```

### 自定义图标

- 通过 `img` 和 `imgSelected` 来设置组件未选中和选中状态的图标。
- 注意：
  - `img` 和 `imgSelected` 是成对出现的。
  - `icon` 的权重高于 `img` 和 `imgSelected` 的权重。

```JavaScript
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          text: '安全',
          state: true,
          img: require('../assets/verify.png'),
          imgSelected: require('../assets/verify_selected.png')
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
      ]
    }
  }
}
```

### 自定义颜色

- 通过 `border-color` 和 `background` 属性来设置组件的背景颜色和上边框颜色，它们的默认分别为 #dcdfe6 和 #fff。
- 通过 `color` 和 `color-selected` 属性来设置组件未选中和选中状态的颜色，它们的默认分别为 #949494 和 #409eff。

```Vue
<template>
  <me-tab-bar :list="listData" v-bind="colors"></me-tab-bar>
</template>
<script>
export default {
  data() {
    return {
      // 自定义颜色
      colors: {
        color: '', // 颜色
        colorSelected: '', // 选中颜色
        background: '', // 背景颜色
        borderColor: '' // 上边框颜色
      },
      // 列表数据
      listData: [
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
      ]
    }
  }
}
</script>

```

## API

### 参数

| 参数          | 说明                              | 类型   | 可选值 | 默认值  | 版本 |
| ------------- | --------------------------------- | ------ | ------ | ------- | ---- |
| list          | 组件数据，对象数组，[详情](#list) | Array  | --     | --      | --   |
| border-color  | 组件上边框颜色                    | String | --     | #dcdfe6 | --   |
| background    | 组件背景颜色                      | String | --     | #fff    | --   |
| color         | 未选中状态颜色                    | String | --     | #949494 | --   |
| colorSelected | 选中状态颜色                      | String | --     | #409eff | --   |

<h4 id="list">List</h4>

| 参数        | 说明                 | 类型    | 可选值       | 默认值 | 版本 |
| ----------- | -------------------- | ------- | ------------ | ------ | ---- |
| icon        | 图标                 | string  | --           | --     | --   |
| text        | 文本内容             | string  | --           | --     | --   |
| dot         | 图标右上角的点       | Boolean | true / false | --     | --   |
| state       | 选中状态             | Boolean | true / false | --     | --   |
| badge       | 图标右上角徽标的内容 | string  | --           | --     | --   |
| img         | 自定义未选中图标     | string  | --           | --     | --   |
| imgSelected | 自定义选中图标       | string  | --           | --     | --   |

### 方法

| 方法名    | 说明                   | 回调参数     | 版本 |
| --------- | ---------------------- | ------------ | ---- |
| on-change | 点击列表项时触发的事件 | item: Object | --   |
