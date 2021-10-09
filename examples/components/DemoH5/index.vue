<template>
  <!-- H5演示 -->
  <div class="m-demo-h5">
    <div class="m-bg-demo"><iframe :src="`${BaseRouter}mobile.html`" width="100%" height="100%" frameborder="0" ref="mobileIframe" @load="onFrameLoad"></iframe></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useGlobalVars } from "@/utils/variables";
import { useFrames } from "./hooks";

export default defineComponent({
  name: "DemoH5",
  setup() {
    const { mobileIframe, onFrameLoad } = useFrames();
    const { BaseRouter } = useGlobalVars();
    return { mobileIframe, onFrameLoad, BaseRouter };
  }
});
</script>
<style scoped lang="less">
.m-demo-h5 {
  position: relative;
  width: 360px;
  height: 780px;
  padding: 10px;
  .m-bg-demo {
    width: 100%;
    height: 100%;
    padding: 100px 16px;
    background: url(../../assets/bg_mobile.png) no-repeat center;
    background-size: 100% auto;
  }
}
</style>
