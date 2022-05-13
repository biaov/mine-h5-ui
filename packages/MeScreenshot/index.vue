<template>
  <!-- 截长图 -->
  <div class="me-screenshot" ref="screenshotRef" @click="onClick">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
  (event: 'end', url: string, canvas: HTMLCanvasElement): void
}>()

const props = withDefaults(
  defineProps<{
    start?: boolean // 开始截图状态
    allowDown?: boolean // 允许下载状态
    imageName?: string // 下载图片名称
  }>(),
  {
    start: false,
    allowDown: false,
    imageName: 'screenshot'
  }
)

const { screenshotRef, onClick } = useHandler(props, emit)
</script>
