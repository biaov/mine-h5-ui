<script lang="ts" setup>
import { useTemplateRef } from 'vue'
import type { ColorPanel } from './types'
import { pxToPercentage,rangeInside } from './utils'

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
 * 触摸开始
 */
const onTouchstart = (e: TouchEvent) => {
  const { clientX: sx, clientY: sy } = e.changedTouches[0]
  const { x: rx, y: ry, width, height } = colorPanelRef.value?.getBoundingClientRect() as DOMRect
  const iw = sx - rx // 触摸位置距离左边的距离
  const ih = sy - ry // 触摸位置位置距离上边的距离
  startRect = { sx, sy, iw, ih, width, height }
  point.value = { x: pxToPercentage(iw, width), y: pxToPercentage(ih, height) }
}
/**
 * 触摸移动
 */
const onTouchmove = (e: TouchEvent) => {
  if (!startRect) return
  const { clientX: ex, clientY: ey } = e.changedTouches[0]
  setPoint({ ...startRect, ex, ey })
}
/**
 * 触摸结束
 */
const onTouchend = (e: TouchEvent) => {
  if (!startRect) return
  const { clientX: ex, clientY: ey } = e.changedTouches[0]
  setPoint({ ...startRect, ex, ey })
  startRect = null
}





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

/**
 * 鼠标按下
 */
const onMousedown = (e: MouseEvent) => {
  const { clientX: sx, clientY: sy } = e
  const { x: rx, y: ry, width, height } = colorPanelRef.value?.getBoundingClientRect() as DOMRect
  const iw = sx - rx // 鼠标按下位置距离左边的距离
  const ih = sy - ry // 鼠标按下位置距离上边的距离

  point.value = { x: Math.round(pxToPercentage(iw, width)), y: Math.round(pxToPercentage(ih, height)) }

  document.onmousemove = ({ clientX: ex, clientY: ey }: MouseEvent) => {
    setPoint({ sx, sy, ex, ey, iw, ih, width, height })
  }

  document.onmouseup = ({ clientX: ex, clientY: ey }: MouseEvent) => {
    setPoint({ sx, sy, ex, ey, iw, ih, width, height })
    document.onmousemove = null
    document.onmouseup = null
  }
}
</script>

<template>
  <div class="color-panel" :style="`background-color:${background};`" ref="colorPanelRef" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown="onMousedown">
    <div class="color-panel__btn" :style="`left:${point.x}%;top:${point.y}%;`"></div>
  </div>
</template>
