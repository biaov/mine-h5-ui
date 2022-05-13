<template>
  <!-- 标签页 -->
  <div class="me-tab">
    <!-- 标签组 -->
    <div class="tabs" ref="tabsDom">
      <div
        class="tab-item"
        v-for="item in tabList"
        :key="item.name"
        :class="{ active: modelValue === item.name }"
        @click="onClick(item)"
        :style="`color:${modelValue === item.name ? activeColor : color};`"
      >
        {{ item.label }}
      </div>
      <div class="line-bt" :style="`transform:translateX(${transX * (curIndex * 2 + 1)}px) translateX(-50%);transition-duration:${duration}s;background:${lineColor};`"></div>
    </div>
    <!-- slot 内容 -->
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useInitSlots } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
  (event: 'change', value: string | number): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue: string | number // v-model 绑定值
    color?: string // 未聚焦时的颜色
    activeColor?: string // 聚焦时显示的颜色
    lineColor?: string // 位移边框颜色
  }>(),
  {
    color: '#949494',
    activeColor: '#494949',
    lineColor: '#f56c6c'
  }
)

const { tabsDom, tabList, transX, duration, curIndex, onClick } = useInitSlots(props, emit)
</script>
