/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  url: string
  openAnimation?: boolean
  width?: string | number
  height?: string | number
  gutter?: number[]
  switchAnimation?: boolean
}
