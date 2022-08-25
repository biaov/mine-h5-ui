// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

// props
export interface Props {
  name: string
  color: string
  size: string
}
