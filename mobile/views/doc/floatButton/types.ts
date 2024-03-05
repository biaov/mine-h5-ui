/**
 * 子列表项
 */
export interface ChildListItem {
  value: string
  type?: string
  style: Record<string, string | undefined>
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  height?: string
  list: ChildListItem[]
}
