/* eslint-disable no-unused-vars */

// emits
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'on-end'): void
}

// props
export interface Props {
  modelValue: boolean
  startValue: number
  endValue: number
  duration: number
  thousand: boolean
}
