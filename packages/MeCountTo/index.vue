<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeCountTo'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  startValue: 0,
  duration: 1500,
  thousand: false
})

/**
 * 开始状态
 */
const modelValue = defineModel<boolean>({ default: true })

const { comValue } = useHandler({ props, emit, modelValue })
</script>

<template>
  <!-- 数字滚动 -->
  <div class="me-count-to">
    {{ comValue }}
  </div>
</template>
