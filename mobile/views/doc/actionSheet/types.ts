/**
 * 三级 list 项
 */
export interface GrandsonListItem {
  id: number
  value: string
  label: string
}

/**
 * 二级 list 项
 */
export interface ChildListItem {
  id: number
  value: string
  visible: boolean
  list: GrandsonListItem[]
}

/**
 * 一级列表项
 */
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
