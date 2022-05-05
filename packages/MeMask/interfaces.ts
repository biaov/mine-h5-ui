/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
}

// props
export interface Props {
  visible: boolean
  maskClose: boolean
}
