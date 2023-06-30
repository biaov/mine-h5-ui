<template>
  <!-- 标签选项 -->
  <div class="me-step-item" :class="[parentProps.direction, parentProps.type, isActive ? 'active' : '']" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
    <!-- 点 -->
    <div class="dot" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
      <i class="iconfont" :class="`icon-${parentProps[isActive ? 'activeIcon' : 'icon']}`"></i>
    </div>
    <!-- 线 -->
    <div class="line" :style="`background:${isActive ? parentProps.activeColor : parentProps.color};`"></div>
    <!-- 文本 -->
    <div class="text" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`"><slot></slot></div>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeStepItem'
})

defineSlots<DefaultSlots>()

const props = defineProps<Props>()

const { isActive, parentProps } = useHandler(props)
</script>
