<template>
  <!-- 截长图 -->
  <div class="me-screenshot" ref="screenshotRef" @click="onClick">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
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
  setup(props) {
    const { screenshotRef, onClick } = useHandler(props);
    return { screenshotRef, onClick };
  }
});
</script>
