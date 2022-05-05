/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', name: string | number): void
  (event: 'on-change', name: string | number): void
}

// props
export interface Props {
  modelValue: string | number
  direction: string
}
