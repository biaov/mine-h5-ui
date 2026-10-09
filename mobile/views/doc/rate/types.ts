/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  value: number
  icon?: string
  iconSelect?: string
  color?: string
  count?: number
  tips?: string[]
  readonly?: boolean
  disabled?: boolean
  tipsColor?: string
  size?: string
}
