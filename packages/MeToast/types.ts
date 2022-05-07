/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { Option, Props as DefaultProps } from './interfaces'

export type Props = PublicProps<DefaultProps> // 当前 vue props
export type Options = string | number | Option // 参数
