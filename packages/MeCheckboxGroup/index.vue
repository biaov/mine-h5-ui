<template>
  <!-- 复选框组 -->
  <div class="me-checkbox-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useInitSlots } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', arr: (string | number)[]): void
  (event: 'change', arr: (string | number)[]): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: (string | number)[] // v-model 值
    direction?: string // 排列方向, vertical | horizontal
  }>(),
  {
    modelValue: () => [],
    direction: 'vertical'
  }
)

useInitSlots(props, emit)
</script>
