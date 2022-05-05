/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-end'): void
  (event: 'on-progress', time: number): void
}

// props
export interface Props {
  time: number
  format: string
  isStart: boolean
  isSuspend: boolean
  isReset: boolean
}
