<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'
import type { ColorPanel } from './types'
import { pxToPercentage, rangeInside } from './utils'

defineProps<ColorPanel.Props>()

const point = defineModel<ColorPanel.ModelValue>({ default: { x: 0, y: 0 } })
/**
 * 开始区域
 */
let startRect: Omit<ColorPanel.SetPointOption, 'ex' | 'ey'> | null = null
/**
 * color-panel ref
 */
const colorPanelRef = useTemplateRef<HTMLDivElement>('colorPanelRef')

/**
 * 设置点的位置
 */
const setPoint = ({ sx, sy, ex, ey, iw, ih, width, height }: ColorPanel.SetPointOption) => {
  const moveX = ex - sx // 移动的距离
  const moveY = ey - sy // 移动的距离
  let x = pxToPercentage(iw + moveX, width)
  let y = pxToPercentage(ih + moveY, height)
  x = Math.round(rangeInside(x, 0, 100))
  y = Math.round(rangeInside(y, 0, 100))
  if (sx === ex && sy === ey) return
  point.value = { x, y }
}

const moveOption = {
  start: ({ x: sx, y: sy }: USEMoveHandle.OptionEvent) => {
    const { x: rx, y: ry, width, height } = colorPanelRef.value?.getBoundingClientRect() as DOMRect
    const iw = sx - rx // 触摸位置距离左边的距离
    const ih = sy - ry // 触摸位置位置距离上边的距离
    startRect = { sx, sy, iw, ih, width, height }
    point.value = { x: pxToPercentage(iw, width), y: pxToPercentage(ih, height) }
  },
  move: ({ x: ex, y: ey }: USEMoveHandle.OptionEvent) => {
    if (!startRect) return
    setPoint({ ...startRect, ex, ey })
  },
  end: ({ x: ex, y: ey }: USEMoveHandle.OptionEvent) => {
    if (!startRect) return
    setPoint({ ...startRect, ex, ey })
    startRect = null
  }
}
onMounted(() => {
  useMoveHandle(colorPanelRef.value!, moveOption)
})
</script>

<template>
  <div class="color-panel" :style="`background-color:${background};`" ref="colorPanelRef">
    <div class="color-panel__btn" :style="`left:${point.x}%;top:${point.y}%;`"></div>
  </div>
</template>
