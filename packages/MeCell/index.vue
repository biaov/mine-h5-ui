<template>
  <!-- 单元格 -->
  <div class="me-cell" :class="{ bottom }" :style="getStyle" @click="onClick">
    <div class="lf">
      <slot name="left">
        <me-icon :name="icon" size="20px" v-if="icon"></me-icon>
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="rt">
      <slot name="right">
        <span :class="{ placeholder }">{{ value || placeholder }}</span>
        <me-icon name="icon-right1" v-if="arrow"></me-icon>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useHandle, useStyle } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    title?: string // 标题
    value?: string | number // 内容
    icon?: string // 图标名称
    iconColor?: string // 图标颜色
    placeholder?: string // 占位符
    arrow?: boolean // 箭头的显示状态
    height?: string // 高度
    bottom?: boolean // 底部边框的显示状态
  }>(),
  {
    title: '',
    value: '',
    icon: '',
    iconColor: '#494949',
    placeholder: '',
    arrow: false,
    height: '100%',
    bottom: false
  }
)

const { onClick } = useHandle(emit)
const { getStyle } = useStyle(props)
</script>
