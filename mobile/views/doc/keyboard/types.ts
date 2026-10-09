/**
 * skinStyle
 */
export interface SkinStyle {
  bgc: string
  textBgc: string
  color: string
}

/**
 * 子列表项
 */
export interface ChildListItem {
  id: number
  label: string
  value: boolean
  skinType?: string
  skinStyle?: SkinStyle
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
