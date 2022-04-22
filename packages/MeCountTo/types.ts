/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  modelValue: boolean
  startValue: number
  endValue: number
  duration: number
  thousand: boolean
}>
