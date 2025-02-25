/**
 * 子列表项
 */
export interface ChildListItem {
  value: string
  visible: boolean
  modelValue?: string
  themeColor?: string
  closable?: boolean
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list: ChildListItem[]
}
