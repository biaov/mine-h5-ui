/* eslint-disable no-unused-vars */
import { Ref } from 'vue'

// onChange 参数
export interface OnChangeParams {
  name: string | number
  isChecked: Ref<boolean>
}

// emits
export interface Emits {
  (event: 'update:modelValue', arr: (string | number)[]): void
  (event: 'on-change', arr: (string | number)[]): void
}
