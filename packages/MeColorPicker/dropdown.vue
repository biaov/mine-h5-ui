<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue'
import { wrapCls } from './hooks'
import type { DropDown } from './types'

const props = withDefaults(defineProps<DropDown.Props>(), {
  rect: () => ({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })
})
const visible = defineModel('visable', { default: false })
const dropdownRect = { width: 260, height: 260 }
const arrowSize = 10
const gap = 10 // 间隔
const getStyle = computed(() => {
  const { width, height, x: screenX, y: screenY } = props.rect
  let x = screenX
  let y = screenY + height + gap
  const minX = 0
  const maxX = screen.width - width
  const maxY = screen.height - dropdownRect.height
  let arrowDeg = 45
  if (x < minX) {
    x = minX
  } else if (x > maxX) {
    x = maxX
  }

  let arrowX = ~~((width - arrowSize) / 2)
  let arrowY = -5
  if (y > maxY) {
    y -= dropdownRect.height + height + gap * 2
    arrowY = dropdownRect.height + 5
    arrowDeg = 225
  }

  if (arrowX < 0) {
    arrowX = 0
  } else if (arrowX > dropdownRect.width) {
    arrowX = dropdownRect.width
  }

  return `left:${x}px;top:${y}px;width:${dropdownRect.width}px;height:${dropdownRect.height}px;--arrow-x:${arrowX}px;--arrow-y:${arrowY}px;--arrow-size:${arrowSize}px;--arrow-deg:rotate(${arrowDeg}deg);`
})

const onClose = () => {
  visible.value = false
}
</script>
<template>
  <transition name="scale">
    <div :class="`${wrapCls}-mask`" @click="onClose" v-if="visible">
      <div :class="`${wrapCls}-dropdown`" :style="getStyle"></div>
    </div>
  </transition>
</template>
