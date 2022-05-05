/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'on-change', value: string | number): void
}

// props
export interface Props {
  modelValue: string | number
  color: string
  activeColor: string
  lineColor: string
}
