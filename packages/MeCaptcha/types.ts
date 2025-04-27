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

interface SizeType {
  width: number
  height: number
}

interface DataPropsType {
  bgImg: {
    url: string
    size: SizeType
  }
  sprite: {
    initPosition: {
      x: number
      y: number
    }
    size: SizeType
  }
}

/**
 * props
 */
export interface Props {
  /**
   * 显示状态
   */
  visible: boolean
  /**
   * 图片宽度
   */
  data?: DataPropsType
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
