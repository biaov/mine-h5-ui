/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListItem } from './interfaces'

// 当前 vue props
export type Props = PublicProps<{
  list: ListItem[]
  borderColor: string
  background: string
  color: string
  colorSelected: string
}>
