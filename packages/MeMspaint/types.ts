import type { PickNotRequiredUnion } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', node: HTMLCanvasElement): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue?: HTMLCanvasElement
  /**
   * 宽度
   */
  width?: string
  /**
   * 高度
   */
  height?: string
  /**
   * 背景色
   */
  background?: string
  /**
   * 边框样式
   */
  borderStyle?: boolean | string
  /**
   * 线条颜色
   */
  strokeStyle?: string
  /**
   * 线条粗细
   */
  lineWidth?: number
  /**
   * 显示操作
   */
  visible?: boolean
}

/**
 * hook
 */
export type PropsHookParam = PickNotRequiredUnion<Props, 'modelValue'>
