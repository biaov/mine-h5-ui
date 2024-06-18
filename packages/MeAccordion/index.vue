<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Emits } from './types'

defineOptions({
  name: 'MeAccordion'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

/**
 * 当前子元素选中的聚焦值
 */
const currentValue = defineModel<string | number>()

useInitSlots({ emit, currentValue })
</script>

<template>
  <!-- 手风琴  -->
  <div class="me-accordion">
    <slot></slot>
  </div>
</template>
