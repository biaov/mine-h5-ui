/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-click', e: MouseEvent): void
  (event: 'on-end', url: string, canvas: HTMLCanvasElement): void
}

// props
export interface Props {
  start: boolean
  allowDown: boolean
  imageName: string
}
