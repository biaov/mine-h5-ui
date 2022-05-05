<template>
  <!-- 单选框 -->
  <div class="me-radio" @click="handleClick" :data-checked="isChecked + ''" :data-disabled="disabled + ''">
    <me-icon :name="iconName" :color="isChecked ? checkedColor : ''" :size="iconSize"></me-icon>
    <div class="u-value">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon'
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', bool: boolean): void
  (event: 'on-click'): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: boolean // v-model 的值
    name?: string | number // 单选框索引名称
    shape?: string // 图标形状, square | round
    icon?: string // 自定义图标
    iconSelect?: string // 自定义选中图标
    iconSize?: string // 图标大小
    checkedColor?: string // 选中状态颜色
    disabled?: boolean // 禁用状态
  }>(),
  {
    modelValue: false,
    shape: 'round',
    icon: '',
    iconSelect: '',
    iconSize: '20px',
    checkedColor: '',
    disabled: false
  }
)

const { isChecked, iconName, handleClick, setStatus } = useHandler(props, emit)
</script>
