# NoticeBar 公告栏

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeNoticeBar } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeNoticeBar.css";

const app = createApp(App);
app.use(MeNoticeBar);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置组件的内容。
- 通过属性 `loop` 开控制组件动画的开启。

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-notice-bar :list="listData" loop></me-notice-bar>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 公告内容
    const listData = Object.freeze([
      "春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。",
      "岁月一点一滴的溜走，在不经意间，快的让我们都来不及在下一个路口挽留。也无法预测人生未知的镜头。",
      "用心聆听，深深呼吸，烟花雨，梨花月，寄一缕风的香魂，远离喧嚣。"
    ]);
    return { listData };
  }
});
</script>
```

:::

### 滚动方向

- 通过属性 `scroll` 来设置组件的滚动方向，可选值为 `horizontal / vertical`，默认值为 horizontal。
  - horizontal - 水平方向
  - vertical - 垂直方向

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-notice-bar v-bind="noticeBar"></me-notice-bar>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 公告内容
    const noticeBar = Object.freeze({
      list: ["花间一壶酒，独酌无相亲。", "举杯邀明月，对影成三人。", "月既不解饮，影徒随我身。", "暂伴月将影，行乐须及春。", "我歌月徘徊，我舞影零乱。", "醒时同交欢，醉后各分散。"],
      loop: true,
      scroll: "vertical"
    });
    return { noticeBar };
  }
});
</script>
```

:::

### 自定义样式

- 通过属性 `preappend-icon` 来设置组件的前面图标，默认值为 notice。
- 通过属性 `preappend-color` 来设置组件的前面图标的颜色，默认值为 #f56c6c。
- 通过属性 `append-icon` 来设置组件的后面图标，默认值为 right1。
- 通过属性 `append-color` 来设置组件的后面图标颜色，默认值为 #c8c7cc。
- 通过属性 `height` 来设置组件的高度，默认值为 40。
- 通过属性 `radius` 来设置组件的倒角，默认值为 4。
- 通过属性 `background` 来设置组件的背景色，默认值为 #f6f6f6。
- 通过属性 `color` 来设置组件的文本颜色，默认值为 #494949。

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-notice-bar v-bind="noticeBar"></me-notice-bar>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 公告内容
    const noticeBar = Object.freeze({
      list: "赵客缦胡缨，吴钩霜雪明。银鞍照白马，飒沓如流星。十步杀一人，千里不留行。事了拂衣去，深藏身与名。闲过信陵饮，脱剑膝前横。将炙啖朱亥，持觞劝侯嬴。三杯吐然诺，五岳倒为轻。眼花耳热后，意气素霓生。救赵挥金槌，邯郸先震惊。千秋二壮士，烜赫大梁城。纵死侠骨香，不惭世上英。谁能书阁下，白首太玄经。",
      preappendIcon: "loading_ico",
      preappendColor: "#fff",
      appendIcon: "in_zhengyan",
      appendColor: "#fff",
      height: 50,
      radius: 25,
      background: "linear-gradient(-45deg, rgb(75, 176, 255), rgb(97, 73, 246))",
      color: "#fff"
    });
    return { noticeBar };
  }
});
</script>
```

:::

## API

### 参数

| 参数            | 说明                                 | 类型                     | 可选值                | 默认值     |
| --------------- | ------------------------------------ | ------------------------ | --------------------- | ---------- |
| list            | 列表内容                             | `Array<string> / string` | --                    | --         |
| scroll          | 滚动方向                             | string                   | horizontal / vertical | horizontal |
| loop            | 开启动画                             | boolean                  | true / false          | false      |
| delay           | 间隔时间，滚动方向为 vertical 才有效 | number                   | --                    | 3000       |
| preappend-icon  | 前面图标                             | string                   | --                    | notice     |
| preappend-color | 前面图标颜色                         | string                   | --                    | #f56c6c    |
| append-icon     | 后面图标                             | string                   | --                    | right1     |
| append-color    | 后面图标颜色                         | string                   | --                    | #c8c7cc    |
| height          | 高度                                 | number                   | --                    | 40         |
| radius          | 倒角                                 | number / string          | --                    | 4          |
| background      | 背景颜色                             | string                   | --                    | #f6f6f6    |
| color           | 文本颜色                             | string                   | --                    | #494949    |

### 方法

| 方法名             | 说明                           | 回调参数           |
| ------------------ | ------------------------------ | ------------------ |
| on-click           | 点击组件文本列表项时触发的事件 | index:number(索引) |
| on-click:preappend | 点击组件前面的图标时触发的事件 | event:MouseEvent   |
| on-click:append    | 点击组件后面的图标时触发的事件 | event:MouseEvent   |
