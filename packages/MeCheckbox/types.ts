import { Ref } from 'vue'
import { OnChangeParams } from '../MeCheckboxGroup/types'

// 父组件参数
export interface CheckboxGroupContext {
  name: string
  currentValue: Ref<(string | number)[]>
  onChange: (params: OnChangeParams) => void
}

// emits
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'click', e: MouseEvent): void
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
