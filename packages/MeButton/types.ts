/* eslint-disable no-unused-vars */

import { PublicProps } from '../types'
import { Props as DefaultProps } from './interfaces'

export type NativeType = 'button' | 'submit' | 'reset' // props nativeType
export type Props = PublicProps<DefaultProps> // 当前 vue props
