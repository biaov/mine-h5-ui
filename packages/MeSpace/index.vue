<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeSpace'
})

const props = withDefaults(defineProps<Props>(), {
  size: '10px',
  direction: 'horizontal'
})

const { spaceRef } = useHandler(props)
</script>

<template>
  <!-- 间距 -->
  <div ref="spaceRef" :style="`--size:${size};`"></div>
</template>
