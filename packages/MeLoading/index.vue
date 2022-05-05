<template>
  <!-- 加载 -->
  <div class="me-loading">
    <svg class="icon svg-icon" data-hidden="true" :style="`color:${color};font-size:${size};`">
      <use :xlink:href="`#${icon || iconName}`"></use>
    </svg>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useData } from './hooks'

const props = withDefaults(
  defineProps<{
    type?: string // 类型, circle | circle2 | circle3 | circle4 | circle5 | circle6
    size?: string // 图标大小
    color?: string // 图标颜色
    icon?: string // 自定义图标名称
  }>(),
  {
    type: 'circle',
    size: '30px',
    color: '#949494',
    icon: ''
  }
)

const { iconName } = useData(props)
</script>
