import type { DefaultSlotProp } from '../types'

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
   * 标题
   */
  title?: string
  /**
   * 内容
   */
  value?: string | number
  /**
   * 图标名称
   */
  icon?: string
  /**
   * 图标颜色
   */
  iconColor?: string
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 箭头的显示状态
   */
  arrow?: boolean
  /**
   * 高度
   */
  height?: string
  /**
   * 底部边框的显示状态
   */
  bottom?: boolean
}

/**
 * slots
 */
export interface Slots {
  left: DefaultSlotProp
  right: DefaultSlotProp
}
