/**
 * 子项目
 */
export interface ChildListItem {
  value: string
  content?: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list: ChildListItem[]
}
