// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'cancel'): void
}

// props
export interface Props {
  visible: boolean
  modal: boolean
  position: string
  closeable: boolean
  radius: string
}
