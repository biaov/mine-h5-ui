/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-click', e: MouseEvent): void
}

// props
export interface Props {
  name: string
  color: string
  size: string
}
