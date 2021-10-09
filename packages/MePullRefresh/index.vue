<template>
  <!-- 下拉刷新 -->
  <div class="me-pull-refresh">
    <div
      class="m-cont"
      :style="`transform: translateY(${transY - showValue}px);transition-duration: ${duration}ms;`"
      v-on="{
        touchmove: onTouchmove,
        touchend: onTouchend
      }"
      @touchstart.prevent="onTouchstart"
      @mousedown.prevent="onMousedown"
    >
      <div class="m-hd" :style="`transform:scale(${scale});`">
        <me-loading type="circle" v-if="loadIcon && activeState === 2"></me-loading>
        {{ loadText[activeState] }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import MeLoading from "~/MeLoading";
import { useHandMove } from "./hooks";

export default defineComponent({
  name: "MePullRefresh",
  components: {
    MeLoading
  },
  props: {
    // v-model绑定值
    modelValue: {
      type: Boolean,
      required: true
    },
    // 自定义状态文本
    loadText: {
      type: Array as PropType<string[]>,
      default: () => ["下拉即可刷新...", "释放即可刷新...", "加载中...", "刷新成功"]
    },
    // 是否要显示加载图标
    loadIcon: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup } = useHandMove(props);
    return { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup };
  }
});
</script>
