/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'on-focus', e: MouseEvent): void
  (event: 'on-blur', e: MouseEvent): void
}

// props
export interface Props {
  modelValue: string
  type: string
  num: number
  skinType: string
  isFocus: boolean
}
