<script lang="ts" setup>
import { watch } from 'vue'
import { useHandler } from './hooks'
import type { Props, DefineSlots } from './types'

defineOptions({
  name: 'MeSpace'
})

const props = withDefaults(defineProps<Props>(), {
  size: '10px',
  direction: 'horizontal'
})

const slots = defineSlots<DefineSlots>()

const { spaceRef, onRender } = useHandler(props)


watch(slots.default, onRender, { immediate: true })
</script>

<template>
  <!-- 间距 -->
  <div ref="spaceRef" :style="`--size:${size};`"></div>
</template>
