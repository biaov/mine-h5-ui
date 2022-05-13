// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'load', e: Event): void
  (event: 'error', e: Event): void
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
