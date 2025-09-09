/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list: {
    inputWidth?: number
    height?: number
    color?: string
    borderColor?: string
    disabledColor?: string
    step?: number
    disabled?: boolean
  }[]
}
