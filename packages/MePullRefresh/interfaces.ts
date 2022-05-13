// emits
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'refresh'): void
}

// props
export interface Props {
  modelValue: boolean
  loadText: string[]
  loadIcon: boolean
}
