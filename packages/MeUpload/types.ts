// listData
export type ListDataItem = {
  id: number
  url: string
}

export type BeforeRead = (item: File[]) => boolean // props beforeRead
export type BfterRead = (arr: File[]) => boolean // props bfterRead
export type BeforeDelete = (item: ListDataItem) => boolean // props beforeDelete

// emits
export interface Emits {
  (event: 'update:fileList', list: ListDataItem[]): void
  (event: 'update:file-list', list: ListDataItem[]): void
  (event: 'change', list: ListDataItem[]): void
}

// props
export interface Props {
  fileList: ListDataItem[]
  preview: boolean
  maxCount: number
  maxSize: number
  multiple: boolean
  deletable: boolean
  disabled: boolean
  beforeRead: BeforeRead
  afterRead: BfterRead
  beforeDelete: BeforeDelete
}
