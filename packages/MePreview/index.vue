<template>
  <!-- 图片预览 -->
  <div class="me-preview" :class="{show:isShow}" :style="`z-index:${zIndex};background:${background};`" @click="onClose">
    <img class="u-img" :src="url" width="100%" alt="preview-img">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MePreview",
  props: {
    // 图片地址
    url: {
      type: String,
      default: ""
    },
    // 层级位置
    zIndex: {
      type: Number,
      default: 99
    },
    // 遮罩层背景色
    background: {
      type: String,
      default: "#000"
    }
  },
  data() {
    return {
      isShow: false // 是否显示
    };
  },
  methods: {
    // 点击遮罩层
    onClose() {
      this.end && this.end();
    }
  }
};
</script>