// emits
export interface Emits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'change', e: Event): void
  (event: 'input', e: Event): void
  (event: 'click-sms', e: MouseEvent): void
  (event: 'click-icon', e: MouseEvent): void
}

// props
export interface Props {
  modelValue: string | number
  type: string
  placeholder: string
  readonly: boolean
  disabled: boolean
  label: string
  labelWidth: string
  labelAlign: string
  labelColor: string
  labelIcon: string
  focusType: string
  focusColor: string
  icon: string
  password: boolean
  digit: boolean
  smsMsg: string
  smsColor: string
  smsIs: boolean
}
