// 子列表项
export interface ChildListItem {
  id?: number
  src?: string
  width?: string
  height?: string
  fill?: string
  radius?: string
}
// 列表项
export interface ListItem {
  id?: number
  label?: string
  list: ChildListItem[]
}
