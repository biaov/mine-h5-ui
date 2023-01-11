import { Ref } from 'vue'

// emits
export interface Emits {
  (event: 'change', resultBool: boolean): void
}

// slideStyle
export interface SlideStyle {
  height: string
  background: string
  dotBackground: string
  tips: string
}

// props
export interface Props {
  url: string
  width: string
  height: string
  random: boolean
  slideStyle: SlideStyle
  tips: string
  range: number
}

// 横向点
export interface XPoint {
  x: number
}

// shareData
export interface ShareData {
  dragPoint: Ref<XPoint>
  missingPoint: Ref<XPoint>
}

// imgRect
export interface ImgRect {
  width: number
  height: number
}
