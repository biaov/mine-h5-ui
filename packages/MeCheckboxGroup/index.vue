<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeCheckboxGroup'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  direction: 'vertical'
})

useInitSlots(props, emit)
</script>

<template>
  <!-- 复选框组 -->
  <div class="me-checkbox-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
