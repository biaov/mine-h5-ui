/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'on-focus', e: FocusEvent): void
  (event: 'on-blur', e: FocusEvent): void
  (event: 'on-change', e: Event): void
  (event: 'on-input', e: Event): void
  (event: 'on-click-sms', e: MouseEvent): void
  (event: 'on-click-icon', e: MouseEvent): void
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
