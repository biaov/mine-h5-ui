<template>
  <!-- 按钮 -->
  <button
    :type="nativeType"
    class="me-btn"
    :class="`me-btn-${type} ${plain ? 'me-btn-plain' : ''} ${disabled ? 'disabled' : ''}`"
    :style="`width:${width}; color:${type === 'default' || plain ? color : '#fff'}; background:${!plain ? color : '#fff'}; border-color:${color};`"
    @click="onClick"
  >
    <me-icon :name="icon" :color="`${type === 'default' || plain ? color : '#fff'}`" size="16px" v-if="icon"></me-icon>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import MeIcon from '../MeIcon'
import { useHandler } from './hooks'
import { NativeType } from './types'

const emit = defineEmits<{
  (event: 'on-click', e: MouseEvent): void
}>()

const props = defineProps({
  // 原生 button 标签的 type 属性
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button' // button|reset|submit
  },
  // 宽度
  width: {
    type: String,
    default: ''
  },
  // 类型
  type: {
    type: String,
    validator: (value: string) => value === 'default' || value === 'primary' || value === 'success' || value === 'info' || value === 'warning' || value === 'danger',
    default: 'default'
  },
  // 朴素按钮
  plain: {
    type: Boolean
  },
  // 禁用状态
  disabled: {
    type: Boolean
  },
  // 图标按钮
  icon: {
    type: String,
    default: ''
  },
  // 自定义颜色
  color: {
    type: String,
    default: ''
  }
})

const { onClick } = useHandler(emit)
</script>
