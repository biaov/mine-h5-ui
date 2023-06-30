/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'end', url: string, canvas: HTMLCanvasElement): void
}

/**
 * props
 */
export interface Props {
  /**
   * 开始截图状态
   */
  start?: boolean
  /**
   * 允许下载状态
   */
  allowDown?: boolean
  /**
   * 下载图片名称
   */
  imageName?: string
}
