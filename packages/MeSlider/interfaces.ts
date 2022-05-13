// prop styles
export type PropStyles = {
  height: string
  radius: string
  lineBgc: string
}

// emits
export interface Emits {
  (event: 'update:modelValue', num: number): void
  (event: 'start', e: TouchEvent | MouseEvent): void
  (event: 'move', e: TouchEvent | MouseEvent): void
  (event: 'end', e: TouchEvent | MouseEvent): void
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
