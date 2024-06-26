import type { Ref, ModelRef } from 'vue'
import { OnChangeParams } from '../MeCheckboxGroup/types'

/**
 * 父组件参数
 */
export interface CheckboxGroupContext {
  name: string
  currentValue: Ref<(string | number)[]>
  onChange: (params: OnChangeParams) => void
}

/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   *  单选框索引名称
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
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    isChecked: ModelRef<boolean>
  }
}
