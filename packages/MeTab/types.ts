/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  modelValue: string | number
  color: string
  activeColor: string
  lineColor: string
}>
