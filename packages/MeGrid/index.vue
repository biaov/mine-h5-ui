<template>
  <!-- 宫格 -->
  <div class="me-grid" ref="grid">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useInitSlots } from './hooks'

const props = withDefaults(
  defineProps<{
    cols?: number // 一行几个
    borderColor?: string // 边框颜色
  }>(),
  {
    cols: 4,
    borderColor: '#edeff2'
  }
)

const { grid } = useInitSlots(props)
</script>
