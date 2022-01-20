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
    <div class="m-imgs" :class="{ active: isActive }" :style="`transform:translateX(${currentValue}px);`">
      <slot></slot>
    </div>
    <!-- 指示点 -->
    <ul class="m-dot" v-if="dot">
      <li v-for="(item, index) in dots" :key="index" :class="{ on: dotIndex === index }"></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandMove } from './hooks'

export default defineComponent({
  name: 'MeSwiper',
  emits: ['on-change'],
  props: {
    // 自动
    loop: {
      type: Boolean,
      default: false
    },
    // 延迟时间
    delay: {
      type: Number,
      default: 3000
    },
    // 组件高度
    height: {
      type: Number
    },
    // 指示点
    dot: {
      type: Boolean,
      default: false
    },
    // 倒角
    radius: {
      type: Number,
      default: 4
    }
  },
  setup(props, { emit }) {
    const { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit)
    return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown }
  }
})
</script>
