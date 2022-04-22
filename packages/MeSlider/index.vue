<template>
  <!-- 滑块 -->
  <div class="me-slider" :data-disabled="disabled">
    <!-- 颜色线条 -->
    <p class="u-line" :style="`height:${styles.height};border-radius:${styles.radius};`"><span :style="`background:${styles.lineBgc};transform:translateX(-${currentValue}%);`"></span></p>
    <!-- 拖拽div -->
    <div
      class="m-drag"
      :style="`left:${100 - currentValue}%;`"
      v-on="{
        touchmove: onTouchmove,
        touchend: onTouchend
      }"
      @touchstart.prevent="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      @mousedown.prevent="onMousedown"
    >
      <!-- 圆点 -->
      <span class="u-round" v-if="!isBtn"></span>
      <!-- 自定义按钮 -->
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useHandler } from './hooks'
import { PropStyles } from './interfaces'

export default defineComponent({
  name: 'MeSlider',
  emits: ['update:modelValue', 'on-start', 'on-move', 'on-end'],
  props: {
    // v-model绑定值
    modelValue: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 自定义样式
    styles: {
      type: Object as PropType<PropStyles>,
      default: () => ({
        height: '', // 大小
        radius: '', // 倒角
        lineBgc: '' // 线背景色
      })
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 自定义按钮状态
    isBtn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandler(props, emit)
    return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown }
  }
})
</script>
