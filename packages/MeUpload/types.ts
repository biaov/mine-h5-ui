/**
 * listData
 */
export type ListDataItem = {
  id: number
  url: string
}

/**
 * props beforeRead
 */
export type BeforeRead = (item: File[]) => boolean
/**
 * props bfterRead
 */
export type BfterRead = (arr: File[]) => boolean
/**
 * props beforeDelete
 */
export type BeforeDelete = (item: ListDataItem) => boolean

/**
 * emits
 */
export interface Emits {
  (event: 'update:fileList', list: ListDataItem[]): void
  (event: 'update:file-list', list: ListDataItem[]): void
  (event: 'change', list: ListDataItem[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model:fileList 绑定值
   */
  fileList?: ListDataItem[]
  /**
   * 图片是否可预览
   */
  preview?: boolean
  /**
   * 最大上传数量
   */
  maxCount?: number
  /**
   * 文件大小设置
   */
  maxSize?: number
  /**
   * 是否多选
   */
  multiple?: boolean
  /**
   * 是否展示删除按钮
   */
  deletable?: boolean
  /**
   * 禁止状态
   */
  disabled?: boolean
  /**
   * 文件读取前钩子函数
   */
  beforeRead?: BeforeRead
  /**
   * 文件读取完钩子函数
   */
  afterRead?: BfterRead
  /**
   * 文件删除前钩子函数
   */
  beforeDelete?: BeforeDelete
}
