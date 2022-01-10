/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListItem } from './interfaces'
// 当前 vue props
export type Props = PublicProps<{
  visible: boolean
  list: ListItem[]
  index: string
  label: string
}>
