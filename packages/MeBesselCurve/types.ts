/**
 * props
 */
export interface ListItem {
  /**
   * 开始点的横坐标
   */
  sx: number
  /**
   * 开始点的纵坐标
   */
  sy: number
  /**
   * 开始点的宽度
   */
  sw: number
  /**
   * 开始点的高度
   */
  sh: number
  /**
   * 结束点的横坐标
   */
  ex: number
  /**
   * 结束点的纵坐标
   */
  ey: number
  /**
   * 结束点的宽度
   */
  ew: number
  /**
   * 结束点的高度
   */
  eh: number
  /**
   * 线的唯一值
   */
  group: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'resize', e: Event): void
}

/**
 * 方向
 */
export type Direction = 'horizontal' | 'vertical'

// props
export interface Props {
  /**
   * 数据列表
   */
  list: ListItem[]
  /**
   * 对齐方式, [startDirection, endDirection]: 开始点和结束点对齐方式
   */
  direction?: Direction | Direction[]
  /**
   * 线的颜色
   */
  color?: string
  /**
   * 线的大小
   */
  strokeWidth?: number
  /**
   * 是否需要箭头
   */
  arrow?: boolean
}

/**
 * rect
 */
export interface Rect extends ListItem {
  cx: number
  cy: number
  center: string
  text: string
}

/**
 * CalcTargetRefRecord
 */
export interface CalcTargetRefRecord extends Record<string, any> {
  group: string | number
  type: 'start' | 'end'
}

/**
 * calcTargetRef
 */
export interface CalcTargetRef {
  (e: Element | null, record: CalcTargetRefRecord): void
}
