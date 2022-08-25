// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'cancel'): void
  (event: 'sure', currentValue: string[]): void
}

// props
export interface Props {
  modelValue: string
  visible: boolean
  separator: string
}
