/**
 * 子列表项
 */
export interface ChildListItem {
  id: number
  label: string
  content: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  active: number
  label: string
  children: ChildListItem[]
  color?: string
  activeColor?: string
  lineColor?: string
}
