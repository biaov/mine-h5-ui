/* eslint-disable no-unused-vars */

// 事件提示语
export interface EventMsg {
  preappend: string
  append: string
  [key: string]: string
}
//  列表项
export interface ListDataItem {
  label: string
  list: string[] | string
  scroll?: string
  preappendIcon?: string
  preappendColor?: string
  appendIcon?: string
  appendColor?: string
  height?: number
  radius?: number
  background?: string
  color?: string
}
