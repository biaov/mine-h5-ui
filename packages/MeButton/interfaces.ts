/* eslint-disable no-unused-vars */
import { NativeType } from './types'

// emits
export interface Emits {
  (event: 'on-click', e: MouseEvent): void
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
