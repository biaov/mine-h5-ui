import type { PickNotRequiredUnion } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'close', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 类型
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  /**
   * 空心
   */
  plain?: boolean
  /**
   * 倒角
   */
  radius?: number
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  /**
   * 标签颜色
   */
  color?: string
  /**
   * 标签内容
   */
  text?: string
  /**
   * 文本颜色
   */
  textColor?: string
  /**
   * 关闭状态
   */
  closeable?: boolean
}

/**
 * hook
 */
export type PropsHookParam = PickNotRequiredUnion<Props, 'width'>
