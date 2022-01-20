/* eslint-disable no-unused-vars */

// 文件列表
export interface FileListItem {
  id: number
  url: string
}

// 列表项
export interface ListDataItem {
  id: number
  label: string
  fileList: FileListItem[]
  maxCount?: number
  maxSize?: number
  multiple?: boolean
  deletable?: boolean
}
