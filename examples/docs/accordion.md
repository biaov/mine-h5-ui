# Accordion 手风琴

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeAccordion, MeAccordionItem } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeAccordion.css";
import "mine-h5-ui/lib/theme-default/MeAccordionItem.css";

const app = createApp(App);
app.use(MeAccordion);
app.use(MeAccordionItem);
app.mount("#app");
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来绑定 `MeAccordion` 组件的当前状态。
- 通过属性 `title` 和属性 `index` 来设置 `MeAccordionItem` 组件的标题和索引，默认值分别为 `""` 和当前索引。

::: CopyCode

```Vue
<template>
  <!-- 手风琴 -->
  <div class="m-demo">
    <div class="u-label">基础用法</div>
    <me-accordion v-model="accordionActive">
      <me-accordion-item v-for="(item,index) in listData" :key="index" :title="item.title" :index="index">
        <div v-html="item.html"></div>
      </me-accordion-item>
    </me-accordion>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const accordionActive = ref(""); // 当前活动值
    const listData = Object.freeze([
      {
        title: "《桐花》",
        html: `<p>这样的一个开满了白花的下午，总觉得似曾相识，总觉得是一场可以放进任何一种时空里的聚合。可以放进诗经，可以放进楚辞，可以放进古典主义也同时可以放进后期印象派的笔端--在人类任何一段美丽的记载里，都应该有过这样的一个下午，这样的一季初夏。</p><p>总有这样的初夏，总有当空丽日，树丛高处是怒放的白花。总有穿着红衣的女子姗姗走过青绿的田间，微风带起她的衣裙和发梢，田野间种着新茶，开着蓼花，长着细细的酢浆草。</p>`
      },
      {
        title: "《长江》",
        html: `<p>我看着水天一色的江面，涛声由远而近，呜咽中透出壮怀激烈的豪气，既像是历史老人沉重的喘息，又像握剑的英雄在仰天长叹，更似红颜美人剪不断理更乱的忧怨。我明白这涛声深藏着玄机与天道，哲人和智者也感到困惑。江渚上的白发渔翁向哲人投去的是不屑一顾的眼神。他摇着轻盈的小舢板，出没在江南与江北之间，半舱是江南的雨烟，半舱是江北的菜花。老渔翁举起酒葫芦仰脖朝天，满舱装的是个狂草般的醉字。他枕着西风明月入梦，江山与朝代在一个又一个梦里更迭。老渔翁喃喃呓语着:一个泡沫，一撮泥沙就是历史的内涵。</p>`
      },
      {
        title: "《莲在江南》",
        html: `<p>徜徉在诗词歌赋的古典里，很古色古香地触摸莲花，我阅读的手指如呼吸梳过美女的云鬓，是一种麻酥酥绵软软微颤颤的感觉，眼睛被一些些嫩藕鲜荷润泽着，不由得湿润润亮闪闪清澈澈了。此刻，莲花就在我的掌心。楚腰纤细，莺歌宛转，吴娃双舞醉芙蓉。古典的莲花，简直就是一个美丽温柔娇艳的代名词。凌波微步，罗袜生尘。古典的莲花，象征着端庄静美优雅高贵的东方神韵。少年会老，岁岁年年，莲花依然是最初的容颜，如初恋清纯依旧颜色不改。既然今生注定不是蛟龙，何不做游鱼一尾，去嬉戏莲叶间，摇落满天的星星成晨露，一开口就是一些莹澈的话语。池面风来波艳艳，波间露下叶田田。在水的透明中轻揽莲花的腰肢，再也不让多愁善感的姑娘撑着碧罗伞，独自在雨季里哀怨又彷徨，鱼是幸福的。在诗词的长河中，撑一支长篙，向莲花更花处漫溯，眼睛是快乐的。</p>`
      },
      {
        title: "《清明雨上》",
        html: `<p>昨日太行山上，层迭峰石，突兀傲松，却静止于空洞，亿万年轮，看透了鸢飞戾天，看透了鱼翔浅底，看透了烟雨情愁，看透了日月星辰，木雕流金，将感情深深地埋在悬崖绝壁间。所以我开始彷徨，寻不到你的.所藏，庆幸的是，我找到了，太行清明，你把泪已千行的岁月蕴藏在那双明镜的眼眸，雨打湿了眼眶，然后微笑的让行人用她辛辛苦苦打上来的山泉洗手，那无声的暗示，那佝偻的优雅，还有那日日的皱痕，年年倚井盼归堂的眷恋，是太行之行带给我的最美的感动。物言无情人有情，无言泪已拆两行。</p>`
      },
      {
        title: "《有一首歌》",
        html: `<p>我说不出它的名字，我也唱不全它的曲调，可是，我知道它在哪里，在我心里最深最柔软的一个角落，每当月亮特别清朗的晚上，风沙特别大的黄昏，或者走过一条山路的转角，走过一片开满了野花的广阔原野，或者在刚亮起灯来的城市里，在火车慢慢驶开的月台上;在一个特定的刹那，一种似曾相识的忧伤就会袭进我的心中，而那个缓慢却又熟悉的曲调就会准时出现，我就知道，那是我的歌--一首只属于流浪者的歌。</p>`
      },
      {
        title: "《心愿》",
        html: `<p>如果我能活到白发苍苍的老年，我将在炉边宁静的睡梦中，寻找早年所熟悉的穿过绿色梅树林的小径。当然，那时候，今日年轻的梅树也必已进入愉快的晚年，伸出有力的臂膊遮蔽着纵横的小径。饱经风霜的古老钟楼，仍将兀立在金色的阳光中，发出在我听来是如此熟悉的钟声。在那缓慢而庄严的钟声里，高矮不一、脸蛋儿或苍白或红润、有些身材丰满、有些体形纤小的姑娘们，焕发着青春活力和朝气、像小溪般涌入教堂。在那里，他们将跪下祈祷，向上帝低声细诉她们的生活小事:她们的悲伤，她们的眼泪，她们的争吵，她们的喜爱，以及她们的宏愿。她们将祈求上帝帮助自己达到目标，成为作家、音乐家、教育家或理想的妻子。</p>`
      }
    ]);
    return { accordionActive, listData };
  }
});
</script>
<style scoped lang="less">
.m-demo {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: #949494;
    font-size: 14px-min;
  }
  /deep/ .me-accordion-item {
    .m-hd {
      cursor: pointer;
    }
    p {
      line-height: 24px;
      margin-bottom: 5px;
      text-indent: 2em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
```

:::

## API

### MeAccordion

#### 参数

| 参数                | 说明               | 类型             | 可选值 | 默认值 |
| ------------------- | ------------------ | ---------------- | ------ | ------ |
| modelValue(v-model) | 双向绑定当前活动项 | [string, number] | --     | --     |

#### Slots

- ⚠ 注意：此插槽只接 `MeAccordionItem` 组件。

| 具名插槽 | 说明     | scopedSlots |
| -------- | -------- | ----------- |
| default  | 默认名称 | --          |

#### 方法

| 方法名    | 说明                       | 回调参数                |
| --------- | -------------------------- | ----------------------- |
| on-change | 点击列表头部项时触发的事件 | value: [string, number] |

### MeAccordionItem

#### 参数

| 参数         | 说明           | 类型             | 可选值 | 默认值  |
| ------------ | -------------- | ---------------- | ------ | ------- |
| label        | 标题           | string           | --     | --      |
| name         | 活动内容初始项 | [string, number] | --     | --      |
| border-color | 头部下边框颜色 | string           | --     | #dcdfe6 |

#### 方法

| 方法名   | 说明                     | 回调参数         |
| -------- | ------------------------ | ---------------- |
| on-click | 点击列表头部项触发的事件 | event:MouseEvent |
