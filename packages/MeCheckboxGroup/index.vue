<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeCheckboxGroup'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  direction: 'vertical'
})

/**
 * 子元素 name 集合
 */
const currentValue = defineModel<(string | number)[]>({ default: () => [] })

useInitSlots({ emit, currentValue })
</script>

<template>
  <!-- 复选框组 -->
  <div class="me-checkbox-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
