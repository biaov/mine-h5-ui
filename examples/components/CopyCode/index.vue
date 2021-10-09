<template>
  <!-- 时间线 -->
  <div class="m-copy-code">
    <div class="u-copy" ref="copyDom" data-clipboard-action="copy"><img src="../../assets/icon-copy.png" alt="copy" /></div>
    <div class="m-cont" ref="codeCont">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRefs } from "./hooks";

export default defineComponent({
  name: "CopyCode",
  setup() {
    const { copyDom, codeCont } = useRefs();
    return { copyDom, codeCont };
  }
});
</script>
<style scoped lang="less">
.m-copy-code {
  position: relative;
  .u-copy {
    position: absolute;
    right: 5px;
    top: 5px;
    opacity: 0;
    width: 30px;
    padding: 5px;
    transition: opacity 0.4s;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  &:hover {
    .u-copy {
      opacity: 0.86;
    }
  }
}
</style>
