/* eslint-disable no-unused-vars */
import { Ref } from 'vue'

// 父组件参数
export interface RadioGroupContext {
  name: string
  currentValue: Ref<string | number>
  onChange: (name: string | number) => void
}

// emits
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'on-click'): void
}

// props
export interface Props {
  modelValue: boolean
  name?: string | number
  shape: string
  icon: string
  iconSelect: string
  iconSize: string
  checkedColor: string
  disabled: boolean
}
