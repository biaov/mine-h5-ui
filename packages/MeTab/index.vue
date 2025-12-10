<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useInitSlots } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeTab'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  color: '#949494',
  activeColor: '#494949',
  lineColor: '#f56c6c'
})

const currentValue = defineModel<string | number>({ default: '' })
const { tabsDom, tabList, transX, duration, curIndex, onClick } = useInitSlots({ emit, currentValue })
</script>

<template>
  <!-- 标签页 -->
  <div class="me-tab">
    <!-- 标签组 -->
    <div ref="tabsDom" class="tabs">
      <div
        v-for="item in tabList"
        :key="item.name"
        class="tab-item"
        :class="{ active: modelValue === item.name }"
        :style="`color:${modelValue === item.name ? activeColor : color};`"
        @click="onClick(item)"
      >
        {{ item.label }}
      </div>
      <div class="line-bt" :style="`transform:translateX(${transX * (curIndex * 2 + 1)}px) translateX(-50%);transition-duration:${duration}s;background:${lineColor};`"></div>
    </div>
    <!-- slot 内容 -->
    <slot></slot>
  </div>
</template>
