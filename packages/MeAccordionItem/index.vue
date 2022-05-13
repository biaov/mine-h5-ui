<template>
  <!-- 手风琴选项 -->
  <div class="me-accordion-item">
    <!-- 头部区域 -->
    <div class="hd" @click="onClick" :style="`border-bottom-color:${borderColor};`">
      <h3>{{ label }}</h3>
      <i class="iconfont icon-right1" :class="{ open: isShow }"></i>
    </div>
    <!-- 内容区域 -->
    <div class="bd" :style="`height:${curHeight}px;`">
      <div ref="accordionItemCont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    label: string // 标题
    name: string | number // index 值
    borderColor?: string // 下边框颜色
  }>(),
  { borderColor: '#dcdfe6' }
)

const { accordionItemCont, isShow, curHeight, onClick } = useHandler(props, emit)
</script>
