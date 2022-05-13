// emits
export interface Emits {
  (event: 'end'): void
  (event: 'progress', time: number): void
}

// props
export interface Props {
  time: number
  format: string
  isStart: boolean
  isSuspend: boolean
  isReset: boolean
}
