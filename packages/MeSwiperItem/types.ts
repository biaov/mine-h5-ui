/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<{
  name: string | number
  url: string
  text: string
  background: string
}>
