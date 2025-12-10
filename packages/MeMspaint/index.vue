<script lang="ts" setup>
import { useDraw } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeMspaint'
})

const props = withDefaults(defineProps<Props>(), {
  width: '200px',
  height: '200px',
  background: '#fff',
  borderStyle: false,
  strokeStyle: '#f56c6c',
  lineWidth: 1,
  visible: true
})
/**
 * canvas 节点
 */
const modelValue = defineModel<HTMLCanvasElement>()
const { canvasRef, getBorder } = useDraw({ props, modelValue })
</script>

<template>
  <!-- 画图 -->
  <canvas
    v-bind="{ width: parseInt(width), height: parseInt(height) }"
    ref="canvasRef"
    class="me-mspaint"
    :style="{
      width,
      height,
      background,
      border: getBorder
    }"
  ></canvas>
</template>
