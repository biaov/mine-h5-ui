/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-change', value: string | number): void
}

// props
export interface Props {
  loop: boolean
  delay: number
  height?: number
  dot: boolean
  radius: number
}
