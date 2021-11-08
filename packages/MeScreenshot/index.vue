<template>
  <!-- 截长图 -->
  <div class="me-screenshot" ref="screenshot" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
import HTML2Canvas from "html2canvas";

export default {
  name: "MeScreenshot",
  props: {
    // 开始截图状态
    start: {
      type: Boolean,
      default: false
    },
    // 允许下载状态
    allowDown: {
      type: Boolean,
      default: false
    },
    // 下载图片名称
    imageName: {
      type: String,
      default: "screenshot"
    }
  },
  data() {
    return {};
  },
  methods: {
    // 点击dom
    onClick(e) {
      this.$emit("on-click", e);
    },
    // 开始截图
    startScreenshot() {
      HTML2Canvas(this.$refs.screenshot).then(canvas => {
        const img = canvas.toDataURL();
        this.allowDown && this.downImg(img);
        this.$emit("on-end", img, canvas);
      });
    },
    // 下载图片
    downImg(imgData) {
      const aDom = document.createElement("a");
      aDom.href = imgData;
      aDom.download = `${this.imageName}.png`;
      aDom.click(); // 下载图片
    }
  },
  watch: {
    // 开始截图
    start: {
      handler(value) {
        value && this.startScreenshot();
      },
      immediate: true
    }
  },
  created() {}
};
</script>
