<template>
  <!-- 数字滚动 -->
  <div class="me-count-to">
    {{ comValue }}
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', bool: boolean): void
  (event: 'end'): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: boolean // 开始状态
    startValue?: number // 开始数字
    endValue: number // 结束数字
    duration?: number // 持续时间
    thousand?: boolean // 千分符
  }>(),
  {
    modelValue: true,
    startValue: 0,
    duration: 1500,
    thousand: false
  }
)

const { comValue } = useHandler(props, emit)
</script>
