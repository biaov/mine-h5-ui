// 列表项目
export interface ListDataItem {
  id: number
  state: boolean
}

// emits
export interface Emits {
  (event: 'update:modelValue', id: number): void
  (event: 'change'): void
}

// props
export interface Props {
  modelValue: number
  color: string
  size: string
  icon: string
  iconSelect: string
  count: number
  readonly: boolean
  disabled: boolean
  tips: string[]
  tipsColor: string
}
