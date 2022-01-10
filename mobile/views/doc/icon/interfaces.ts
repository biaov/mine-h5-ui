/* eslint-disable no-unused-vars */
// 子列表
export interface ChildListItem {
  name: string
  color?: string
  size?: string
}
// list item
export interface ListItem {
  id: number
  label: string
  list: ChildListItem[]
}
