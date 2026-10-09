/**
 * 子项目
 */
export interface ChildListItem {
  id: number
  value: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
