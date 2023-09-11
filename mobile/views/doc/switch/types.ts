/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  value: boolean
  size?: string
  inactiveColor?: string
  activeColor?: string
  async?: boolean
  disabled?: boolean
}
