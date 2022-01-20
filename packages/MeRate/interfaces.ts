/* eslint-disable no-unused-vars */
// 列表项目
export interface ListDataItem {
  id: number
  state: boolean
}

// emits
export interface Emits {
  (event: 'update:modelValue', id: number): void
  (event: 'on-change'): void
}
