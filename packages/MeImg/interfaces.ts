/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-click', e: MouseEvent): void
  (event: 'on-load', e: Event): void
  (event: 'on-error', e: Event): void
}

// props
export interface Props {
  src: string
  width: string
  height: string
  fill: string
  radius: string
  alt: string
}
