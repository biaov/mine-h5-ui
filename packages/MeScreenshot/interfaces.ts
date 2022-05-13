// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'end', url: string, canvas: HTMLCanvasElement): void
}

// props
export interface Props {
  start: boolean
  allowDown: boolean
  imageName: string
}
