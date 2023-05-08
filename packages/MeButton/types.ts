export type NativeType = 'button' | 'submit' | 'reset' // props nativeType

// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

// props
export interface Props {
  nativeType: NativeType
  width: string
  type: ButtonType
  plain?: boolean
  disabled?: boolean
  icon: string
  color: string
}
