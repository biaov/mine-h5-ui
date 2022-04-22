/* eslint-disable no-unused-vars */

// 子列表项
export interface ChildListItem {
  id: number
  label: string
  shape?: string
  icon?: string
  iconSelect?: string
  checkedColor?: string
  iconSize?: string
  disabled?: boolean
}
// 列表项
export interface ListDataItem {
  id: number
  label: string
  value: number[] | boolean
  list: ChildListItem[]
  direction?: string
}
