/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { Props as DefaultProps } from './interfaces'

export type Props = PublicProps<DefaultProps> // 当前 vue props
export type CalcSizeName = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' // calcSize name
