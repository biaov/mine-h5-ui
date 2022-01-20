<template>
  <!-- 轮播图 -->
  <div class="me-swiper-item" :style="`background:${background};`">
    <img class="u-img" :src="url" width="100%" alt="banner" v-if="url" draggable="false">
    <slot>
      <div class="u-text" v-if="text">{{text}}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "MeSwiperItem",
  props: {
    // 图片地址
    url: {
      type: String,
      default: ""
    },
    // 文本
    text: {
      type: String,
      default: ""
    },
    // 背景色
    background: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>