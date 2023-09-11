<template>
  <!-- 轮播图 -->
  <div
    class="me-swiper"
    :style="`height:${height}px;border-radius:${radius}px;`"
    ref="swiperDom"
    @touchstart.prevent="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
    @mousedown.prevent="onMousedown"
  >
    <div class="imgs" :class="{ active: isActive }" :style="`transform:translateX(${currentValue}px);`">
      <slot></slot>
    </div>
    <!-- 指示点 -->
    <ul class="dot" v-if="dot">
      <li v-for="(_, index) in dots" :key="index" :class="{ on: dotIndex === index }"></li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandMove } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeSwiper'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  loop: false,
  delay: 3000,
  dot: false,
  radius: 4
})

const { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit)
</script>
