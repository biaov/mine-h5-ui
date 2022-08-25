// 子项目
export interface ChildListItem {
  id: number
  text: string
  state: boolean
  icon?: string
  badge?: string
  dot?: boolean
  img?: string
  imgSelected?: string
}

// 列表项
export interface ListDataItem {
  label: string
  list: ChildListItem[]
  color?: string
  colorSelected?: string
  background?: string
  borderColor?: string
}
