interface SlideStyle {
  height: string
  background: string
  dotBackground: string
  tips: string
}

// 列表项
export interface ListDataItem {
  id: number
  label: string
  url: string
  width?: string // 图片宽度
  height?: string // 图片高度
  random?: boolean // 是否随机位置
  slideStyle?: SlideStyle // 滑块样式
  tips?: string // 提示语
  range?: number // 容错值
}
