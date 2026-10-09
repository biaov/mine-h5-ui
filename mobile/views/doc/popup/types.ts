/**
 * 子列表项
 */
export interface ChildListItem {
  id: number
  visible: boolean
  value: string
  position?: string
  closeable?: boolean
  radius?: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
