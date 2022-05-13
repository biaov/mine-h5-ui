<template>
  <!-- 下拉刷新 -->
  <div class="me-pull-refresh">
    <div
      class="cont"
      :style="`transform: translateY(${transY - showValue}px);transition-duration: ${duration}ms;`"
      @touchstart.prevent="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      @mousedown.prevent="onMousedown"
    >
      <div class="hd" :style="`transform:scale(${scale});`">
        <me-loading type="circle" v-if="loadIcon && activeState === 2"></me-loading>
        {{ loadText[activeState] }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MeLoading from '../MeLoading'
import { useHandMove } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', bool: boolean): void
  (event: 'refresh'): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue: boolean // v-model 绑定值
    loadText?: string[] // 自定义状态文本
    loadIcon?: boolean // 是否要显示加载图标
  }>(),
  {
    loadText: () => ['下拉即可刷新...', '释放即可刷新...', '加载中...', '刷新成功'],
    loadIcon: true
  }
)

const { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit)
</script>
