// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'click'): void
  (event: 'search'): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'input', e: Event): void
  (event: 'change', e: Event): void
}

// props
export interface Props {
  modelValue: string
  placeholder: string
  btnText: string
  align: string
  radius: string
  background: string
  color: string
  disabled: boolean
}
