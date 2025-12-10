<script lang="ts" setup>
import { name } from './config'
import { useHandle, useStyle } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  openAnimation: false,
  width: '100%',
  height: 'auto',
  lineColor: '#fff',
  minSize: 100,
  lineWidth: 1
})
const { base64Data } = useHandle(props, emit)
const { getStyle } = useStyle(props)
</script>

<template>
  <!-- 图片分割器 -->
  <div :class="name" :style="getStyle">
    <img :src="url" :class="`${name}-placeholder`" :style="getStyle" />
    <canvas ref="canvasNode" :class="`${name}-canvas`"></canvas>
    <img v-for="(item, index) in base64Data" :key="index" :src="item.base64" :class="`${name}-img ${openAnimation ? item.animation : ''}`" :style="getStyle" />
  </div>
</template>
