/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListDataItem } from './interfaces'
import { Props as DefaultProps } from './interfaces'

export type BeforeRead = (item: File[]) => boolean // props beforeRead
export type BfterRead = (arr: File[]) => boolean // props bfterRead
export type BeforeDelete = (item: ListDataItem) => boolean // props beforeDelete
export type Props = PublicProps<DefaultProps> // 当前 vue props
