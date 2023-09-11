/**
 * 参数
 */
export interface Params {
  cols: number
  borderColor: string
}

/**
 * 父组件参数
 */
export interface GridContext {
  name: string
  params: Params
}

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
   * 图标
   */
  icon?: string
  /**
   * 图标的颜色
   */
  iconColor?: string
  /**
   * 文本
   */
  text?: string
  /**
   * 文本颜色
   */
  textColor?: string
}
