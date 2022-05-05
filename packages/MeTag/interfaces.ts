/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-close', e: MouseEvent): void
}

// props
export interface Props {
  type: string
  plain: boolean
  radius: number
  width?: number
  height: number
  color: string
  text: string
  textColor: string
  closeable: boolean
}
