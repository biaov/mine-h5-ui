<template>
  <!-- 单选框组 -->
  <div class="me-radio-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useInitSlots } from "./hooks";

export default defineComponent({
  name: "MeRadioGroup",
  props: {
    // v-model值
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 排列方向
    direction: {
      type: String,
      default: "" // vertical|horizontal
    }
  },
  setup(props) {
    useInitSlots(props);
    return {};
  }
});
</script>
