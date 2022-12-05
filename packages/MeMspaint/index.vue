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

const emit = defineEmits<{
  (event: 'update:modelValue', node: HTMLCanvasElement): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: HTMLCanvasElement // v-model 绑定值
    width?: string // 宽度
    height?: string // 高度
    background?: string // 背景色
    borderStyle?: boolean | string // 边框样式
    strokeStyle?: string // 线条颜色
    lineWidth?: number // 线条粗细
    visible?: boolean // 显示操作
  }>(),
  {
    width: '200px',
    height: '200px',
    background: '#fff',
    borderStyle: false,
    strokeStyle: '#f56c6c',
    lineWidth: 1,
    visible: true
  }
)
const { canvasRef, getBorder } = useDraw(props, emit)
</script>
