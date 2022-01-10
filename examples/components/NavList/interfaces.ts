// 列表项
export interface ListItem {
  path?: string
  text?: string
  href?: string
  url?: string
  name?: string
}

// props 参数
export interface Props {
  list: ListItem[]
}
