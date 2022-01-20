<template>
  <!-- 手风琴  -->
  <div class="me-accordion">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useInitSlots } from './hooks'

export default defineComponent({
  name: 'MeAccordion',
  emits: ['update:modelValue', 'on-change'],
  props: {
    // v-model绑定值
    modelValue: {
      type: [Number, String],
      required: true
    }
  },
  setup(props, { emit }) {
    useInitSlots(props, emit)
    return {}
  }
})
</script>
