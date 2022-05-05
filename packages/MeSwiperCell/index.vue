<template>
  <!-- 滑动单元格 -->
  <div class="me-swiper-cell">
    <div
      class="m-swiper"
      :class="{ active: isActive }"
      :style="`transform:translateX(${currentValue}px);`"
      @click.prevent.stop
      @touchstart.prevent="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      @mousedown.prevent="onMousedown"
    >
      <!-- 内容 -->
      <div class="u-content">
        <slot name="content"></slot>
      </div>
      <!-- 右侧隐藏部分 -->
      <div class="u-hidden" ref="hidden" :style="`right:-${maxDistance}px;`">
        <slot name="hidden"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandMove } from './hooks'

const { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove()
</script>
