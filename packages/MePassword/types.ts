// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'focus', e: MouseEvent): void
  (event: 'blur', e: MouseEvent): void
}

// props
export interface Props {
  modelValue: string
  type: string
  num: number
  skinType: string
  isFocus: boolean
}
