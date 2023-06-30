<template>
  <!-- 标签页 -->
  <div class="me-step" :class="direction">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import { Props } from './types'

defineOptions({
  name: 'MeStep'
})

defineSlots<DefaultSlots>()

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
  type: 'primary',
  color: '',
  activeColor: '',
  icon: 'dot',
  activeIcon: 'radio'
})

useInitSlots(props)
</script>
