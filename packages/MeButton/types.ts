export type NativeType = 'button' | 'submit' | 'reset' // props nativeType

// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

// props
export interface Props {
  nativeType: NativeType
  width: string
  type: string
  plain?: boolean
  disabled?: boolean
  icon: string
  color: string
}
