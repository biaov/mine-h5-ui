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

<template>
  <!-- 宫格 -->
  <div ref="grid" class="me-grid">
    <slot></slot>
  </div>
</template>
