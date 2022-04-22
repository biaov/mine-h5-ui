/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'

// 当前 vue props
export type Props = PublicProps<
  {
    loop: boolean
    delay: number
    dot: boolean
    radius: number
  },
  {
    height?: number
  }
>
