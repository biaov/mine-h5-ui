/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'change', value: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue: number | string
}
