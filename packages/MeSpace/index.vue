<template>
  <!-- 间距 -->
  <div ref="spaceRef" :style="`--size:${size};`"></div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const props = withDefaults(
  defineProps<{
    size?: string // 间距大小
    direction?: string // 间距方向, horizontal | vertical
  }>(),
  {
    size: '10px',
    direction: 'horizontal'
  }
)

const { spaceRef } = useHandler(props)
</script>
