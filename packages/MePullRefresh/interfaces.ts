/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'on-refresh'): void
}

// props
export interface Props {
  modelValue: boolean
  loadText: string[]
  loadIcon: boolean
}
