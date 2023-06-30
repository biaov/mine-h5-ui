/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'cancel'): void
  (event: 'sure', currentValue: string[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue?: string
  /**
   * 是否显示时间选择器
   */
  visible?: boolean
  /**
   * 分割符
   */
  separator?: string
}
