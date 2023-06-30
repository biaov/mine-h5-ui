/**
 * 子选项
 */
export interface ChildListItem {
  id: number
  value: string
  type: 'alert' | 'confirm' | 'prompt' | 'custom'
  tips?: string
  message?: string
  cancelButtonText?: string
  confirmButtonText?: string
  html?: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
