/**
 * props nativeType
 */
export type NativeType = 'button' | 'submit' | 'reset'

/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

/**
 * 按钮类型
 */
export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

/**
 * props
 */
export interface Props {
  /**
   * 原生 type
   */
  nativeType?: NativeType
  /**
   * 宽度
   */
  width?: string
  /**
   * 类型
   */
  type?: ButtonType
  /**
   * 是否朴素按钮
   */
  plain?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 图标
   */
  icon?: string
  /**
   * 颜色
   */
  color?: string
}
