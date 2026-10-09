/**
 * 子列表项
 */
export interface ChildListItem {
  text: string
}

/**
 * list item
 */
export interface ListDataItem {
  id: number
  label: string
  itemHeight: number
  list: ChildListItem[]
  loadStatus?: string
  auto?: boolean
}

/**
 * loadMoreText
 */
export interface LoadMoreText extends Record<string, string> {
  nomore: string
  more: string
  loading: string
}
