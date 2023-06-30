import type { Ref } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'change', resultBool: boolean): void
}

/**
 * slideStyle
 */
export interface SlideStyle {
  height: string
  background: string
  dotBackground: string
  tips: string
}

/**
 * props
 */
export interface Props {
  /**
   * 图片地址
   */
  url: string
  /**
   * 图片宽度
   */
  width?: string
  /**
   * 图片高度
   */
  height?: string
  /**
   * 随机位置
   */
  random?: boolean
  /**
   * 滑块样式
   */
  slideStyle?: SlideStyle
  /**
   * 提示语
   */
  tips?: string
  /**
   * 容错值
   */
  range?: number
}

/**
 * 横向点
 */
export interface XPoint {
  x: number
}

/**
 * shareData
 */
export interface ShareData {
  dragPoint: Ref<XPoint>
  missingPoint: Ref<XPoint>
}

/**
 * imgRect
 */
export interface ImgRect {
  width: number
  height: number
}
