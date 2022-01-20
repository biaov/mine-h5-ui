/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  active: (string | number)[]
  direction: string
  type: string
  color: string
  activeColor: string
  icon: string
  activeIcon: string
}>
