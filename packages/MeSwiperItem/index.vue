<template>
  <!-- 轮播图 -->
  <div class="me-swiper-item" :style="`background:${background};`">
    <img class="u-img" :src="url" alt="banner" v-if="url" draggable="false" />
    <slot>
      <div class="u-text" v-if="text">{{ text }}</div>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useName } from "./hooks";

export default defineComponent({
  name: "MeSwiperItem",
  props: {
    // 属性名称
    name: {
      type: [String, Number],
      required: true
    },
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
  setup(props) {
    useName(props);
    return {};
  }
});
</script>
