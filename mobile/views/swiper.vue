<template>
  <!-- 轮播图 -->
  <ul class="m-swiper">
    <li v-for="(item,index) in listData" :key="index">
      <div class="u-label">{{item.label}}</div>
      <me-swiper v-bind="item">
        <me-swiper-item v-for="(it,i) in item.children" :key="i" v-bind="it"></me-swiper-item>
      </me-swiper>
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
          label: "基础用法",
          dot: true,
          children: [
            {
              url: "https://app.biaov.cn/mineapp/images/home/1.png"
            },
            {
              url: "https://app.biaov.cn/mineapp/images/home/2.png"
            },
            {
              url: "https://app.biaov.cn/mineapp/images/home/3.png"
            }
          ]
        },
        {
          label: "设置文本",
          children: [
            {
              text: "一月不读书，耳目失精爽。",
              url: "https://app.biaov.cn/mineapp/images/home/1.png"
            },
            {
              text: "穷且益坚，不坠青云之志。",
              url: "https://app.biaov.cn/mineapp/images/home/2.png"
            },
            {
              text: "我见青山多妩媚，料青山见我应如是。",
              url: "https://app.biaov.cn/mineapp/images/home/3.png"
            }
          ]
        },
        {
          label: "自定义样式",
          dot: true,
          height: 150,
          children: [
            {
              background: "#4BC7F5"
            },
            {
              background: "#7A51F5"
            },
            {
              background: "#FFB808"
            }
          ]
        },
        {
          label: "自动轮播",
          loop: true,
          height: 150,
          children: [
            {
              text: "青，取之于蓝而青于蓝；冰，水为之而寒于水。",
              background: "#B32FF5"
            },
            {
              text: "路漫漫其修远兮，吾将上下而求索。",
              background: "#F53698"
            },
            {
              text: "尺有所短；寸有所长。物有所不足；智有所不明。",
              background: "#F5A02E"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.m-swiper {
  > li {
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-swiper {
      margin-bottom: 15px;
      cursor: grab;
    }
  }
}
</style>
