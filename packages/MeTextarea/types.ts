/**
 * emits
 */
export interface Emits {
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'change', e: Event): void
  (event: 'input', e: Event): void
}

/**
 * props
 */
export interface Props {
  /**
   * 可见的列数
   */
  cols?: number
  /**
   * 可见的行数
   */
  rows?: number
  /**
   * 只读状态
   */
  readonly?: boolean
  /**
   * 禁用状态
   */
  disabled?: boolean
  /**
   * 最大长度
   */
  maxlength?: number
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 显示计数
   */
  showCount?: boolean
}
