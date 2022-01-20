/* eslint-disable no-unused-vars */

// 子列表项
export interface ChildListItem {
  id: number
  value: string
  type: string
  plain?: boolean
  disabled?: boolean
  icon?: string
  color?: string
}
// 列表项
export interface ListDataItem {
  id: number
  label: string
  btns: ChildListItem[]
}
