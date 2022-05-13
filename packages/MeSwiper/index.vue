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
      <li v-for="(item, index) in dots" :key="index" :class="{ on: dotIndex === index }"></li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useHandMove } from './hooks'

const emit = defineEmits<{
  (event: 'change', value: string | number): void
}>()

const props = withDefaults(
  defineProps<{
    loop?: boolean // 自动
    delay?: number // 延迟时间
    height?: number // 组件高度
    dot?: boolean // 指示点
    radius?: number // 倒角
  }>(),
  {
    loop: false,
    delay: 3000,
    dot: false,
    radius: 4
  }
)

const { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit)
</script>
