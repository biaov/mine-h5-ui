/* eslint-disable no-unused-vars */
// prop styles
export type PropStyles = {
  height: string
  radius: string
  lineBgc: string
}

// emits
export interface Emits {
  (event: 'update:modelValue', num: number): void
  (event: 'on-start', e: TouchEvent | MouseEvent): void
  (event: 'on-move', e: TouchEvent | MouseEvent): void
  (event: 'on-end', e: TouchEvent | MouseEvent): void
}

// props
export interface Props {
  modelValue: number
  max: number
  min: number
  styles: PropStyles
  disabled: boolean
  isBtn: boolean
}
