/* eslint-disable no-unused-vars */

// props
export interface Props {
  name: string
  color?: string
  size?: string
}

// emits
export interface Emits {
  (event: 'on-click', e: MouseEvent): void
}
