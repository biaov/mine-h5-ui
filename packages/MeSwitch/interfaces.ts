// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'update:modelValue', bool: boolean): void
}

// props
export interface Props {
  modelValue: boolean
  size: string
  activeColor: string
  inactiveColor: string
  async: boolean
  disabled: boolean
}
