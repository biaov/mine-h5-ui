<template>
  <!-- 滑块 -->
  <div class="me-slider" :data-disabled="disabled">
    <!-- 颜色线条 -->
    <p class="line" :style="`height:${styles.height};border-radius:${styles.radius};`"><span :style="`background:${styles.lineBgc};transform:translateX(-${currentValue}%);`"></span></p>
    <!-- 拖拽div -->
    <div class="drag" :style="`left:${100 - currentValue}%;`" @touchstart.prevent="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown.prevent="onMousedown">
      <!-- 圆点 -->
      <span class="round" v-if="!isBtn"></span>
      <!-- 自定义按钮 -->
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeSlider'
})

defineSlots<Partial<DefaultSlots>>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  max: 100,
  min: 0,
  styles: () => ({
    height: '',
    radius: '',
    lineBgc: ''
  }),
  disabled: false,
  isBtn: false
})

const { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandler(props, emit)
</script>
