/**
 * emits
 */
export interface Emits {}

/**
 * props
 */
export interface Props<T = unknown> {
  /**
   * 列表数据
   */
  list: T[]
  /**
   * 宽度
   */
  width?: number | string
  /**
   * 高度
   */
  height?: number | string
}

export namespace USEComputeStyle {
  export interface Option {
    point: {
      x: number
      y: number
      corner: string
    }
    width: number
    height: number
  }
}

export interface Point {
  x: number
  y: number
}

export interface Slots<T> {
  default?: (props: { item: T; index: number }) => unknown
}

export interface AnimateFrameOption {
  from: number
  to: number
  duration: number
  fps?: number
  frame: (value: number) => void
  complete: () => void
  easing?: (t: number, b: number, c: number, duration: number) => number
}

export interface AnimateDataType {
  effect?: NodeJS.Timeout
}

export interface RectType {
  width: number
  height: number
}
