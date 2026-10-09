/**
 * 子项目
 */
export interface ChildListItem {
  type?: string
  plain?: boolean
  color?: string
  radius?: number
  width?: number
  height?: number
  text?: string
  textColor?: string
  closeable?: boolean
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  children: ChildListItem[]
}
