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
  modelValue: string | number
  /**
   * 未聚焦时的颜色
   */
  color?: string
  /**
   * 聚焦时显示的颜色
   */
  activeColor?: string
  /**
   * 位移边框颜色
   */
  lineColor?: string
}
