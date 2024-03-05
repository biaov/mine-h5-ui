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
   * 按钮类型
   */
  type?: 'default' | 'backTop'

  /**
   * 滚动高度
   */
  scrollTop?: number

  /**
   * 滚动元素的节点对象
   */
  scrollNode?: Element
}
