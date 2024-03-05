<script lang="ts" setup>
import { onUnmounted, useAttrs, watch } from 'vue'
import { useBind, useUtils } from '../MeComposable'
import { useHandler } from './hooks'
import type { DefaultSlots } from '../types'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeFloatButton'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const attrs = useAttrs()

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  scrollTop: 0,
  scrollNode: () => document.body
})

const { addBind, removeBind } = useBind()
const { throttle } = useUtils()
const { visible, onClick, onScroll } = useHandler(props, emit)
const callThrottle = throttle(onScroll, 100)

watch(
  () => props.scrollNode,
  value => {
    if (props.type !== 'backTop') return
    if (!value) return
    addBind(value, 'scroll', callThrottle)
  },
  {
    immediate: true
  }
)

onUnmounted(() => {
  props.scrollNode && removeBind(props.scrollNode, 'scroll', callThrottle)
})
</script>

<template>
  <!-- 悬浮按钮 -->
  <div class="me-float-button" :class="{ show: visible }" v-bind="attrs" @click="onClick">
    <slot></slot>
  </div>
</template>
