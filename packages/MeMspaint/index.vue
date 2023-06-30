<template>
  <!-- 画图 -->
  <canvas
    class="me-mspaint"
    v-bind="{ width: parseInt(width), height: parseInt(height) }"
    :style="{
      width,
      height,
      background,
      border: getBorder
    }"
    ref="canvasRef"
  ></canvas>
</template>
<script lang="ts" setup>
import { useDraw } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeMspaint'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  width: '200px',
  height: '200px',
  background: '#fff',
  borderStyle: false,
  strokeStyle: '#f56c6c',
  lineWidth: 1,
  visible: true
})
const { canvasRef, getBorder } = useDraw(props, emit)
</script>
