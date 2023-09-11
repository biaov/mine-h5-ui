import type { PickRequiredUnion } from '../types'

/**
 * props line
 */
export interface Line {
  /**
   * 线条倒角
   */
  radius?: number
  /**
   * 线条颜色
   */
  color: string
  /**
   * 线条大小
   */
  size?: number
}

/**
 * props text
 */
export interface Text {
  /**
   * 文本颜色
   */
  color: string
  /**
   * 文本大小
   */
  size: number
}

/**
 * fieldsetList item
 */
export interface FieldsetListItem {
  text: string
  deg: number
}

/**
 * props
 */
export interface Props {
  /**
   * 线条数和文本
   */
  list?: string[]
  /**
   * 线条样式
   */
  line?: Line
  /**
   * 文本样式
   */
  text?: Text
  /**
   * 距离左边的距离
   */
  left?: number
  /**
   * 距离右边的距离
   */
  right?: number
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  /**
   * 旋转元素Y轴的基点位置
   */
  origin?: number
}

/**
 * hook
 */
export type PropsHookParam = PickRequiredUnion<Props, 'list' | 'line' | 'text'>
