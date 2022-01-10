/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListDataItem } from './interfaces'

// props beforeRead
export type BeforeRead = (item: File[]) => boolean
// props bfterRead
export type BfterRead = (arr: File[]) => boolean
// props beforeDelete
export type BeforeDelete = (item: ListDataItem) => boolean
// 当前 vue props
export type Props = PublicProps<{
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
}>
