/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'focus', e: MouseEvent): void
  (event: 'blur', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 的值
   */
  modelValue?: string
  /**
   * 输入框模式
   */
  type?: 'number' | 'password'
  /**
   * 输入框数量
   */
  num?: number
  /**
   * 系统皮肤样式
   */
  skinType?: 'white' | 'dark'
  /**
   * 聚焦状态
   */
  isFocus?: boolean
}
