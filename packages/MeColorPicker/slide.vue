<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'
import type { Slide } from './types'
import { pxToPercentage, rangeInside } from './utils'

withDefaults(defineProps<Slide.Props>(), {
  opacity: false,
  background: '',
  color: ''
})
const progress = defineModel<number>({ default: 0 })
const slideRef = useTemplateRef<HTMLDivElement>('slideNode')

/**
 * 设置点的位置
 */
const setPoint = ({ sx, ex, iw, width }: Slide.SetPointOption) => {
  const moveX = ex - sx // 移动的距离
  let x = pxToPercentage(iw + moveX, width)
  x = Math.round(rangeInside(x, 0, 100))
  if (sx === ex) return
  progress.value = Math.round(x)
}

let startRect: Omit<Slide.SetPointOption, 'ex'> | null = null
const option = {
  start: ({ x: sx }: USEMoveHandle.OptionEvent) => {
    const { x: rx, width } = slideRef.value!.getBoundingClientRect()
    const iw = sx - rx // 触摸位置距离左边的距离
    startRect = { sx, iw, width }
    progress.value = pxToPercentage(iw, width)
  },
  move: ({ x: ex }: USEMoveHandle.OptionEvent) => {
    if (!startRect) return
    setPoint({ ...startRect, ex })
  },
  end: ({ x: ex }: USEMoveHandle.OptionEvent) => {
    if (!startRect) return
    setPoint({ ...startRect, ex })
    startRect = null
  }
}

onMounted(() => {
  useMoveHandle(slideRef.value!, option)
})
</script>
<template>
  <div ref="slideNode" class="slide" :class="{ opacity }" :style="{ background }">
    <div class="circle-dot" :style="`left:${progress}%;background:${color};`"></div>
  </div>
</template>
