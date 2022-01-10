/* eslint-disable no-unused-vars */

import { PublicProps } from '../types'

export type NativeType = 'button' | 'submit' | 'reset' // props nativeType

// 当前 vue props
export type Props = PublicProps<{
  color: string
  type: string
  nativeType: NativeType
  width: string
  plain: boolean
  disabled: boolean
  icon: string
}>
