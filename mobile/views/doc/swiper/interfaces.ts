/* eslint-disable no-unused-vars */

// 子列表
export interface ChildListItem {
  url?: string
  text?: string
  background?: string
}
// 列表项
export interface ListDataItem {
  label: string
  children: ChildListItem[]
  dot?: boolean
  height?: number
  loop?: boolean
}
