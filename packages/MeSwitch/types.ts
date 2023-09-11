/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
  (event: 'update:modelValue', bool: boolean): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue?: boolean
  /**
   * 自定义大小
   */
  size?: string
  /**
   * 自定义激活颜色
   */
  activeColor?: string
  /**
   * 自定义未激活颜色
   */
  inactiveColor?: string
  /**
   * 异步状态
   */
  async?: boolean
  /**
   * 禁用状态
   */
  disabled?: boolean
}
