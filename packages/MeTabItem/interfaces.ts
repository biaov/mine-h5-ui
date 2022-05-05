/* eslint-disable no-unused-vars */
import { Ref } from 'vue'

// 设置的 item
export interface LabelName {
  label: string
  name: string | number
}

// 父组件参数
export interface TabContext {
  name: string
  currentValue: Ref<number>
  getLabelName: (item: LabelName) => void
}

// props
export interface Props {
  label: string
  name: string | number
}
