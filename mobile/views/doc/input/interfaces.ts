/* eslint-disable no-unused-vars */
// 子列表项
export interface ChildListItem {
  id: number
  value: string
  placeholder?: string
  label?: string
  labelWidth?: string
  labelColor?: string
  labelIcon?: string
  focusType?: string
  focusColor?: string
  password?: boolean
  icon?: string
  smsMsg?: string
  smsIs?: boolean
  smsColor?: string
  readonly?: boolean
  disabled?: boolean
  digit?: boolean
}
// 列表项
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
