/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  modelValue: boolean
  size: string
  activeColor: string
  inactiveColor: string
  async: boolean
  disabled: boolean
}>
