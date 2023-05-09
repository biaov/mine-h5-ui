<template>
  <!-- 宫格选项 -->
  <div class="me-grid-item" @click="handleClick" :style="`width:${widthValue}%;border-color:${borderColor};`">
    <i class="iconfont icon" :class="icon" :style="`color:${iconColor};`" v-if="icon"></i>
    <span class="desc" :style="`color:${textColor};`" v-if="text">{{ text }}</span>
    <div class="custom" v-if="!icon && !text">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
}>()

withDefaults(
  defineProps<{
    icon?: string // 图标
    iconColor?: string // 图标的颜色
    text?: string // 文本
    textColor?: string // 文本颜色
  }>(),
  {
    icon: '',
    iconColor: '',
    text: '',
    textColor: ''
  }
)

const { widthValue, borderColor, handleClick } = useHandler(emit)
</script>
