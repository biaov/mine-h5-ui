<template>
  <!-- 手风琴  -->
  <div class="me-accordion">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeAccordion'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = defineProps<Props>()

useInitSlots(props, emit)
</script>
