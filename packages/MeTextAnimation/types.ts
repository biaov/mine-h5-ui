/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 动画类型
   */
  type?: string
  /**
   * 字体大小
   */
  size?: number
  /**
   * 字体
   */
  family?: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 背景色
   */
  background?: string
  /**
   * 文本
   */
  text: string
}
