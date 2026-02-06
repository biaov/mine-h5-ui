<script lang="ts" setup>
import { useHandMove } from './hooks'
import type { Slots } from './types'

defineOptions({
  name: 'MeSwipeCell'
})

defineSlots<Slots>()

const { hidden, maxDistance, currentValue, isActive } = useHandMove()
</script>

<template>
  <!-- 滑动单元格 -->
  <div class="me-swipe-cell">
    <div ref="swiperEventNode" class="swiper" :class="{ active: isActive }" :style="`transform:translateX(${currentValue}px);`" @click.prevent.stop>
      <!-- 内容 -->
      <div class="swiper__content">
        <slot name="content"></slot>
      </div>
      <!-- 右侧隐藏部分 -->
      <div ref="hidden" class="swiper__hidden" :style="`right:-${maxDistance}px;`">
        <slot name="hidden"></slot>
      </div>
    </div>
  </div>
</template>
