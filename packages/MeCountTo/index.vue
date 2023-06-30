<template>
  <!-- 数字滚动 -->
  <div class="me-count-to">
    {{ comValue }}
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeCountTo'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  startValue: 0,
  duration: 1500,
  thousand: false
})

const { comValue } = useHandler(props, emit)
</script>
