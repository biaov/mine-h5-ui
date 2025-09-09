/**
 * props
 */
export interface Props {
  /**
   * 最大值
   */
  max?: number
  /**
   * 最小值
   */
  min?: number
  /**
   * 步长
   */
  step?: number

  /**
   * 输入框最大长度
   */
  maxlength?: number

  /**
   * 高度
   */
  height?: number | string

  /**
   * 输入框宽度
   */
  inputWidth?: number | string

  /**
   * 颜色
   */
  color?: string
  /**
   * 边框颜色
   */
  borderColor?: string

  /**
   * 边框倒角
   */
  borderRadius?: number | string

  /**
   * 禁用颜色
   */
  disabledColor?: string

  /**
   * 禁用
   */
  disabled?: boolean

  /**
   * 字体大小
   */
  fontSize?: number | string
}
