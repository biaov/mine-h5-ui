<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeRadioGroup'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  direction: 'vertical'
})

/**
 * 当前 value 值
 */
const currentValue = defineModel<string | number>({ default: '' })
useInitSlots({ emit, currentValue })
</script>

<template>
  <!-- 单选框组 -->
  <div class="me-radio-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
