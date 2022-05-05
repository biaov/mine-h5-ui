<template>
  <!-- 手风琴  -->
  <div class="me-accordion">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useInitSlots } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
  (event: 'on-change', value: string | number): void
}>()

const props = defineProps<{
  modelValue: number | string // v-model 绑定值
}>()

useInitSlots(props, emit)
</script>
