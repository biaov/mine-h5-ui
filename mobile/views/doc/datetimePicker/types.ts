/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  title: string
  value: string
  visible: boolean
  type?: string
  minDate?: Date
  maxDate?: Date
}
