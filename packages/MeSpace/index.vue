<script lang="ts" setup>
import { watch } from 'vue'
import { useHandler } from './hooks'
import type { Props, DefineSlots } from './types'

defineOptions({
  name: 'MeSpace'
})

withDefaults(defineProps<Props>(), {
  size: '10px',
  direction: 'horizontal'
})

const slots = defineSlots<DefineSlots>()

const { spaceRef, onRender } = useHandler()

watch(slots.default, onRender, { immediate: true })

</script>

<template>
  <!-- 间距 -->
  <div ref="spaceRef" :style="`--size:${size};`" class="me-space" :class="direction"></div>
</template>
