/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  visible?: boolean
  /**
   * 提示文本
   */
  tips?: string
}
