// emits
export interface Emits {
  (event: 'update:modelValue', name: string | number): void
  (event: 'change', name: string | number): void
}

// props
export interface Props {
  modelValue: string | number
  direction: string
}
