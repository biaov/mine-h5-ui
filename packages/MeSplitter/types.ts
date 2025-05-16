/**
 * emits
 */
export interface Emits {
  (event: 'load', value: Base64DataItem[]): void
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
   * 开启动画状态
   */
  openAnimation?: boolean
  /**
   * 容器宽度
   */
  width?: string | number
  /**
   * 容器高度
   */
  height?: string | number
  /**
   * 碎片排列, [行数, 列数]
   */
  gutter?: number[]

  /**
   * 边框颜色
   */
  lineColor?: string

  /**
   * 最小碎片尺寸
   */
  minSize?: number

  /**
   * 边框大小
   */
  lineWidth?: number
}

export interface TempData {
  id: number
  circle1: [string, number]
  circle2?: [string, number]
}

export interface DrawImgData {
  circle1: [string, number]
  circle2?: [string, number]
  w: number
  h: number
  x: number
  y: number
}

export interface Base64DataItem {
  base64: string
  animation: string
}

export interface DrawCircleOpton {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  w: number
  h: number
  x: number
  y: number
}

export interface CircleLineOption {
  ctx: CanvasRenderingContext2D
  r: number
  tx: number
  ty: number
  x: number
  y: number
  cx: number
  cy: number
}
