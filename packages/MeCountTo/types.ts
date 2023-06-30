/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'end'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 开始状态
   */
  modelValue?: boolean
  /**
   * 开始数字
   */
  startValue?: number
  /**
   * 结束数字
   */
  endValue: number
  /**
   * 持续时间
   */
  duration?: number
  /**
   * 千分符
   */
  thousand?: boolean
}
