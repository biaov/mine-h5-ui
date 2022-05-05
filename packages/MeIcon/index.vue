<template>
  <!-- 图标 -->
  <i class="iconfont me-icon" :class="name" :style="`color:${color};font-size:${size};`" @click="onClick"></i>
</template>
<script lang="ts" setup>
import { useClick } from './hooks'

const emit = defineEmits<{
  (event: 'on-click', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    name: string // class 名称
    color?: string // 图标颜色
    size?: string // 图标大小
  }>(),
  {
    color: '',
    size: ''
  }
)

const { onClick } = useClick(emit)
</script>
