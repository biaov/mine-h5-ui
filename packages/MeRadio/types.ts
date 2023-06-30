import type { Ref } from 'vue'
import type { PickNotRequiredUnion } from '../types'

/**
 * 父组件参数
 */
export interface RadioGroupContext {
  name: string
  currentValue: Ref<string | number>
  onChange: (name: string | number) => void
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'click'): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 的值
   */
  modelValue?: boolean
  /**
   * 单选框索引名称
   */
  name?: string | number
  /**
   * 图标形状
   */
  shape?: 'square' | 'round'
  /**
   * 自定义图标
   */
  icon?: string
  /**
   * 自定义选中图标
   */
  iconSelect?: string
  /**
   * 图标大小
   */
  iconSize?: string
  /**
   * 选中状态颜色
   */
  checkedColor?: string
  /**
   * 禁用状态
   */
  disabled?: boolean
}

/**
 * hook
 */
export type PropsHookParam = PickNotRequiredUnion<Props, 'name'>
