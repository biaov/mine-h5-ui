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
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  name: 'MeStepItem',
  props: {
    // 索引名称
    name: {
      type: [String, Number],
      required: true
    }
  },
  setup(prop) {
    const { isActive, parentProps } = useHandler(prop)
    return { isActive, parentProps }
  }
})
</script>
