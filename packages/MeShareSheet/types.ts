/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListItem } from './interfaces'

// 当前 vue props
export type Props = PublicProps<{
  visible: boolean
  tips: string
  list: ListItem[]
}>
