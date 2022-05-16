<template>
  <!-- 滑块 -->
  <div class="slider" :data-disabled="disabled">
    <!-- 颜色线条 -->
    <p class="line" :style="`height:${styles.height};border-radius:${styles.radius};`"><span :style="`background:${styles.lineBgc};transform:translateX(-${currentValue}%);`"></span></p>
    <!-- 拖拽div -->
    <div
      class="drag"
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
      <span class="round" v-if="!isBtn"></span>
      <!-- 自定义按钮 -->
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import { PropStyles } from './interfaces'

const emit = defineEmits<{
  (event: 'update:modelValue', num: number): void
  (event: 'start', e: TouchEvent | MouseEvent): void
  (event: 'move', e: TouchEvent | MouseEvent): void
  (event: 'end', e: TouchEvent | MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: number // v-model 绑定值
    max?: number // 最大值
    min?: number // 最小值
    styles?: PropStyles // 自定义样式
    disabled?: boolean // 禁用状态
    isBtn?: boolean // 自定义按钮状态
  }>(),
  {
    modelValue: 0,
    max: 100,
    min: 0,
    styles: () => ({
      height: '', // 大小
      radius: '', // 倒角
      lineBgc: '' // 线背景色
    }),
    disabled: false,
    isBtn: false
  }
)

const { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandler(props, emit)
</script>
