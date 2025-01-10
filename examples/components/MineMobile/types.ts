/**
 * emits
 */
export interface Emits {
  (event: 'getframe', dom: HTMLIFrameElement): void
}

/**
 * props
 */
export interface Props {
  full?: boolean
}
