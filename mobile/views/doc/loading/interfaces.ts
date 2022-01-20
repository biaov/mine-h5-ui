/* eslint-disable no-unused-vars */

// 子列表项
export interface ChildListItem {
  id: number
  type?: string
  size?: string
  color?: string
  icon?: string
  text?: string
}

// 列表项
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
