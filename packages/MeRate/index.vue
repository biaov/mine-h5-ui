<template>
  <!-- 评分机制 -->
  <div class="me-rate" :style="`font-size:${size};`" :data-disabled="disabled">
    <me-icon v-for="item in listData" :key="item.id" :name="item.state ? iconSelect : icon" size="inherit" :color="item.state ? color : '#949494'" @on-click="onClick(item)"></me-icon>
    <span class="u-tips" v-if="tips.length > 0 && modelValue > 0" :style="`color:${tipsColor};`">{{ tips[modelValue - 1] }}</span>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import MeIcon from '../MeIcon'
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', id: number): void
  (event: 'on-change'): void
}>()

const props = defineProps({
  // v-model绑定值
  modelValue: {
    type: Number,
    validator: (value: number) => !String(value).includes('.'),
    default: 0
  },
  // 自定义未选中图标
  icon: {
    type: String,
    default: 'icon-star4'
  },
  // 自定义选中图标
  iconSelect: {
    type: String,
    default: 'icon-star3'
  },
  // 自定义图标颜色
  color: {
    type: String,
    default: '#fed835'
  },
  // 自定义数量
  count: {
    type: Number,
    default: 5
  },
  // 只读状态
  readonly: {
    type: Boolean,
    default: false
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 自定义提示语
  tips: {
    type: Array as PropType<string[]>,
    default: () => ['非常不满意', '不满意', '一般', '满意', '非常满意']
  },
  // 自定义提示语颜色
  tipsColor: {
    type: String,
    default: ''
  },
  // 评分大小
  size: {
    type: String,
    default: ''
  }
})

const { listData, onClick } = useHandler(props, emit)
</script>
