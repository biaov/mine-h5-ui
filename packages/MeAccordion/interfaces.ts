/* eslint-disable no-unused-vars */

// props
export interface Props {
  modelValue: number | string
}

// emits
export interface Emits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'on-change', value: string | number): void
}
