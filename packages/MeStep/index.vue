<template>
  <!-- 标签页 -->
  <div class="me-step" :class="direction">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useInitSlots } from './hooks'

const props = withDefaults(
  defineProps<{
    active: (string | number)[] // 激活状态
    direction?: string // 显示方向, horizontal | vertical
    type?: string // 主题类型, primary | success | warning | danger
    color?: string // 置灰颜色
    activeColor?: string // 激活颜色
    icon?: string // 置灰图标
    activeIcon?: string // 激活图标
  }>(),
  {
    direction: 'horizontal',
    type: 'primary',
    color: '',
    activeColor: '',
    icon: 'dot',
    activeIcon: 'radio'
  }
)

useInitSlots(props)
</script>
