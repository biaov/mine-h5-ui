<script lang="ts" setup>
import MeLoading from '../MeLoading/index.vue'
import type { DefaultSlots } from '../types'
import { useHandMove } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MePullRefresh'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  loadText: () => ['下拉即可刷新...', '释放即可刷新...', '加载中...', '刷新成功'],
  loadIcon: true
})

const { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit)
</script>

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
