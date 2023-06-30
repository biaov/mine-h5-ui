import type { PickNotRequiredUnion } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'change', value: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * 自动
   */
  loop?: boolean
  /**
   * 延迟时间
   */
  delay?: number
  /**
   * 组件高度
   */
  height?: number
  /**
   * 指示点
   */
  dot?: boolean
  /**
   * 倒角
   */
  radius?: number
}

/**
 * hook
 */
export type PropsHookParam = PickNotRequiredUnion<Props, 'height'>
