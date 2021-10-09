<template>
  <!-- 数字滚动 -->
  <div class="me-count-to">
    {{ comValue }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MeCountTo",
  props: {
    // 开始状态
    modelValue: {
      type: Boolean,
      default: true
    },
    // 开始数字
    startValue: {
      type: Number,
      default: 0
    },
    // 结束数字
    endValue: {
      type: Number,
      required: true
    },
    // 持续时间
    duration: {
      type: Number,
      default: 1500
    },
    // 千分符
    thousand: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { comValue } = useHandler(props);
    return { comValue };
  }
});
</script>
