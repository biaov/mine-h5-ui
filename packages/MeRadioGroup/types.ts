/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', name: string | number): void
  (event: 'change', name: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 值
   */
  modelValue?: string | number
  /**
   * 排列方向,
   */
  direction?: 'vertical' | 'horizontal'
}
