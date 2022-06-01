# Swiper 轮播图

---

## 按需引入

:::CopyCode

```JavaScript
import Vue from 'vue'
import { MeSwiper, MeSwiperItem } from 'mine-h5-ui'

Vue.use(MeSwiper)
Vue.use(MeSwiperItem)
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `MeSwiper` 的属性 `dot` 来设置组件的指示点，默认为 false。
- 通过 `MeSwiperItem` 的属性 `url` 来设置组件需要轮播的图片。

```HTML
<me-swiper dot>
  <me-swiper-item url="https://app.biaov.cn/mineapp/images/home/1.png"></me-swiper-item>
  <me-swiper-item url="https://app.biaov.cn/mineapp/images/home/2.png"></me-swiper-item>
  <me-swiper-item url="https://app.biaov.cn/mineapp/images/home/3.png"></me-swiper-item>
</me-swiper>
```

### 设置文本

- 通过 `MeSwiperItem` 的属性 `text` 来设置组件的文本。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-swiper>
      <me-swiper-item v-for="(item, index) in listData" :key="index" v-bind="item"></me-swiper-item>
    </me-swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          text: '一月不读书，耳目失精爽。',
          url: 'https://app.biaov.cn/mineapp/images/home/1.png'
        },
        {
          text: '穷且益坚，不坠青云之志。',
          url: 'https://app.biaov.cn/mineapp/images/home/2.png'
        },
        {
          text: '我见青山多妩媚，料青山见我应如是。',
          url: 'https://app.biaov.cn/mineapp/images/home/3.png'
        }
      ]
    }
  }
}
</script>
```

### 自定义样式

- 通过 `MeSwiper` 的属性 `height` 来设置组件的高度。
- 通过 `MeSwiperItem` 的属性 `background` 来设置组件的背景色。
- ⚠ 注意：
  - 当没有设置组件的图片时，必须指定组件的高度。
  - 当设置组件的图片和高度时，设置的高度优先图片自身的高度。

```HTML
<me-swiper :height="150" dot>
  <me-swiper-item background="#4BC7F5"></me-swiper-item>
  <me-swiper-item background="#7A51F5"></me-swiper-item>
  <me-swiper-item background="#FFB808"></me-swiper-item>
</me-swiper>
```

### 自动轮播

- 通过 `MeSwiper` 的属性 `loop` 来设置组件的自动轮播状态，默认为 false。
- 通过 `MeSwiper` 的属性 `delay` 来设置组件的轮播的延迟时间，默认为 3000。

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-swiper loop :height="150">
      <me-swiper-item v-for="(item, index) in listData" :key="index" v-bind="item"></me-swiper-item>
    </me-swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          text: '青，取之于蓝而青于蓝；冰，水为之而寒于水。',
          background: '#B32FF5'
        },
        {
          text: '路漫漫其修远兮，吾将上下而求索。',
          background: '#F53698'
        },
        {
          text: '尺有所短；寸有所长。物有所不足；智有所不明。',
          background: '#F5A02E'
        }
      ]
    }
  }
}
</script>
```

## API

### MeSwiper

#### 参数

| 参数   | 说明     | 类型    | 可选值       | 默认值 | 版本 |
| ------ | -------- | ------- | ------------ | ------ | ---- |
| loop   | 自动     | Boolean | true / false | false  | --   |
| delay  | 延迟时间 | Number  | --           | 3000   | --   |
| height | 组件高度 | Number  | --           | --     | --   |
| dot    | 指示点   | Boolean | true / false | false  | --   |
| radius | 倒角     | Number  | --           | 4      | --   |

#### Slots

- ⚠ 注意：此插槽只能接 MeSwiperItem 组件。

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |

#### 方法

| 方法名    | 说明               | 回调参数 | 版本 |
| --------- | ------------------ | -------- | ---- |
| on-change | 轮播滚动改变时触发 | --       | --   |

### MeSwiperItem

#### 参数

| 参数       | 说明     | 类型   | 可选值 | 默认值 | 版本 |
| ---------- | -------- | ------ | ------ | ------ | ---- |
| url        | 图片地址 | String | --     | --     | --   |
| text       | 文本     | String | --     | --     | --   |
| background | 背景色   | String | --     | --     | --   |

#### Slots

| 具名插槽 | 说明     | scopedSlots | 版本 |
| -------- | -------- | ----------- | ---- |
| default  | 默认名称 | --          | --   |

#### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
