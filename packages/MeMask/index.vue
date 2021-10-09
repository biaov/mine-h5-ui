<template>
  <!-- 遮罩层 -->
  <div class="me-mask" :class="{ show: isShow }" @click="clickMask" v-show="isShowMask">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MeMask",
  props: {
    // 显示状态
    visible: {
      type: Boolean,
      default: false
    },
    // 点击遮罩层是否关闭
    maskClose: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isShowMask, isShow, clickMask } = useHandler(props);
    return { isShowMask, isShow, clickMask };
  }
});
</script>
