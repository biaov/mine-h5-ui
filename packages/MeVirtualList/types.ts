import type { DefaultSlotProp } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'load-more'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 列表数据
   */
  list?: Record<string, any>[]
  /**
   * 节流时间
   */
  interval?: number
  /**
   * 虚拟列表高度
   */
  height?: string
  /**
   * 固定选项高度
   */
  itemHeight?: number
  /**
   * 距离底部的距离
   */
  distance?: number
  /**
   * 前后各渲染几屏
   */
  screen?: number[]
  /**
   * 每屏可见的数据条数
   */
  remain?: number
}

/**
 * Slots
 */
export interface Slots {
  default: (props: { item: Record<string, any> }) => ReturnType<DefaultSlotProp>
  more: DefaultSlotProp
}
