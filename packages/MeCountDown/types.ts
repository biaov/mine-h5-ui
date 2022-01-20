/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  time: number
  format: string
  isStart: boolean
  isSuspend: boolean
  isReset: boolean
}>
