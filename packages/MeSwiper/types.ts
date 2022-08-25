// emits
export interface Emits {
  (event: 'change', value: string | number): void
}

// props
export interface Props {
  loop: boolean
  delay: number
  height?: number
  dot: boolean
  radius: number
}
