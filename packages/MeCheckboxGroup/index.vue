<template>
  <!-- 复选框组 -->
  <div class="me-checkbox-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useInitSlots } from './hooks'

export default defineComponent({
  name: 'MeCheckboxGroup',
  emits: ['update:modelValue', 'on-change'],
  props: {
    // v-model值
    modelValue: {
      type: Array as PropType<(string | number)[]>,
      default: () => []
    },
    // 排列方向
    direction: {
      type: String,
      default: 'vertical' // vertical|horizontal
    }
  },
  setup(props, { emit }) {
    useInitSlots(props, emit)
    return {}
  }
})
</script>
