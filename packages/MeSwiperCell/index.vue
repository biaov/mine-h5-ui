<script lang="ts" setup>
import { useHandMove } from './hooks'
import type { Slots } from './types'

defineOptions({
  name: 'MeSwiperCell'
})

defineSlots<Slots>()

const { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove()
</script>

<template>
  <!-- 滑动单元格 -->
  <div class="me-swiper-cell">
    <div
      class="swiper"
      :class="{ active: isActive }"
      :style="`transform:translateX(${currentValue}px);`"
      @click.prevent.stop
      @touchstart.prevent="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      @mousedown.prevent="onMousedown"
    >
      <!-- 内容 -->
      <div class="content">
        <slot name="content"></slot>
      </div>
      <!-- 右侧隐藏部分 -->
      <div class="hidden" ref="hidden" :style="`right:-${maxDistance}px;`">
        <slot name="hidden"></slot>
      </div>
    </div>
  </div>
</template>
