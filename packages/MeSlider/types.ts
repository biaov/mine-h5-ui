/**
 * prop styles
 */
export type PropStyles = {
  /**
   * 大小
   */
  height: string
  /**
   * 倒角
   */
  radius: string
  /**
   * 线背景色
   */
  lineBgc: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', num: number): void
  (event: 'start', e: TouchEvent | MouseEvent): void
  (event: 'move', e: TouchEvent | MouseEvent): void
  (event: 'end', e: TouchEvent | MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue?: number
  /**
   * 最大值
   */
  max?: number
  /**
   * 最小值
   */
  min?: number
  /**
   * 自定义样式
   */
  styles?: PropStyles
  /**
   * 禁用状态
   */
  disabled?: boolean
  /**
   * 自定义按钮状态
   */
  isBtn?: boolean
}
