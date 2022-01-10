/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { Model, RuleItem } from './interfaces'
// 当前 vue props
export type Props = PublicProps<{
  model: Model
  rules: RuleItem[]
}>
