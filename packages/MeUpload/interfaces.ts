/* eslint-disable no-unused-vars */

// listData
export type ListDataItem = {
  id: number
  url: string
}

// emits
export interface Emits {
  (event: 'update:fileList', list: ListDataItem[]): void
  (event: 'update:file-list', list: ListDataItem[]): void
  (event: 'on-change', list: ListDataItem[]): void
}
