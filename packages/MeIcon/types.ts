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
   * class 名称
   */
  name: string
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 图标大小
   */
  size?: string
}
