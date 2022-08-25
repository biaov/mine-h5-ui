// emits
export interface Emits {
  (event: 'close', e: MouseEvent): void
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
