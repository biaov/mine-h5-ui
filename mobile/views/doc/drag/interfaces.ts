// 矩形区域
export interface Rect {
  w: number
  h: number
  x: number
  y: number
  r: number
}
// 列表项
export interface ListDataItem {
  rect: Rect
  url: string
}
