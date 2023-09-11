/**
 * props styles
 */
export interface Styles {
  /**
   * 边框颜色
   */
  borderColor: string
  /**
   * 背景颜色
   */
  background: string
  /**
   * 标题颜色
   */
  titleColor: string
  /**
   * 左侧按钮颜色
   */
  leftColor: string
  /**
   * 右侧按钮颜色
   */
  rightColor: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'click-left', e: MouseEvent): void
  (event: 'click-right', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 标题
   */
  title?: string
  /**
   * 左侧按钮箭头显示状态
   */
  leftArrow?: boolean
  /**
   * 左侧按钮文本
   */
  leftText?: string
  /**
   * 右侧按钮文本
   */
  rightText?: string
  /**
   * 组件样式
   */
  styles?: Styles
}
