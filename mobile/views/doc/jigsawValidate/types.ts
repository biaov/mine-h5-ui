interface SlideStyle {
  height: string
  background: string
  dotBackground: string
  tips: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
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
   * 是否随机位置
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
