/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { ListDataItem } from './interfaces'

// 当前 vue props
export type Props = PublicProps<{
  current: number
  list: ListDataItem[]
  width: string
  height: string
  theme: string
  themeText: string
  angleRange: number
}>

// calcSize name
export type CalcSizeName = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
