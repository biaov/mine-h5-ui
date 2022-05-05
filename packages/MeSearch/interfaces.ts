/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'on-click'): void
  (event: 'on-search'): void
  (event: 'on-focus', e: FocusEvent): void
  (event: 'on-blur', e: FocusEvent): void
  (event: 'on-input', e: Event): void
  (event: 'on-change', e: Event): void
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
