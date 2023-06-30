<template>
  <!-- 宫格 -->
  <div class="me-grid" ref="grid">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeGrid'
})

defineSlots<DefaultSlots>()

const props = withDefaults(defineProps<Props>(), {
  cols: 4,
  borderColor: '#edeff2'
})

const { grid } = useInitSlots(props)
</script>
