/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { Option } from './interfaces'
// 当前 vue props
export type Props = PublicProps<{
  message: string | number
  bgColor: string
  icon: string
  durction: number
}>

// 参数
export type Options = string | number | Option
