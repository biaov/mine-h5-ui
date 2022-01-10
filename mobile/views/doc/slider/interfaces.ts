/* eslint-disable no-unused-vars */

// 子列表项
export interface Styles {
  height: string
  radius: string
  lineBgc: string
}
// 列表项
export interface ListDataItem {
  id: number
  label: string
  value: number
  max?: number
  min?: number
  styles?: Styles
  isBtn?: boolean
  disabled?: boolean
}
