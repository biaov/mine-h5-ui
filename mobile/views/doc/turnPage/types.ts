export interface childListItem {
  text: string | number
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list: childListItem[]
}
