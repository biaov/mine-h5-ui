<template>
  <!-- 标签选项 -->
  <div class="me-step-item" :class="[parentProps.direction, parentProps.type, isActive ? 'active' : '']" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
    <!-- 点 -->
    <div class="u-dot" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
      <i class="iconfont" :class="`icon-${parentProps[isActive ? 'activeIcon' : 'icon']}`"></i>
    </div>
    <!-- 线 -->
    <div class="u-line" :style="`background:${isActive ? parentProps.activeColor : parentProps.color};`"></div>
    <!-- 文本 -->
    <div class="u-text" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`"><slot></slot></div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const props = defineProps<{
  name: string | number // 索引名称
}>()

const { isActive, parentProps } = useHandler(props)
</script>
