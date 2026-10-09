/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'load', e: Event): void
  (event: 'error', e: Event): void
}

/**
 * props
 */
export interface Props {
  /**
   * 图片地址
   */
  src: string
  /**
   * 宽度
   */
  width?: string
  /**
   * 高度
   */
  height?: string
  /**
   * 填充方式
   */
  fill?: string
  /**
   * 倒角
   */
  radius?: string
  /**
   * 错误显示 alt
   */
  alt?: string
}
