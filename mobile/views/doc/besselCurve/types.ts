export interface Rect {
  sx: number
  sy: number
  sw: number
  sh: number
  ex: number
  ey: number
  ew: number
  eh: number
  group: string
}

interface PointStyle extends Record<string, string> {
  top: string
  left: string
  width: string
  height: string
}

/**
 * 子列表项
 */
export interface ChildListItem {
  id: string
  startPointStyle: PointStyle
  endPointStyle: PointStyle
  color?: string
  strokeWidth?: number
  direction?: 'horizontal' | 'vertial'
  arrow?: boolean
  rect?: Rect
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: string
  label: string
  list: ChildListItem[]
}
