/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', bool: boolean): void
  (event: 'refresh'): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue: boolean
  /**
   * 自定义状态文本
   */
  loadText?: string[]
  /**
   * 是否要显示加载图标
   */
  loadIcon?: boolean
}
