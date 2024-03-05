/**
 * 子列表项
 */
export interface ChildListItem {
  value: string
  visible: boolean
  list?: string[]
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list: ChildListItem[]
}
