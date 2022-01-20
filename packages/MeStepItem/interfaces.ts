/* eslint-disable no-unused-vars */
import { Ref } from 'vue'
import { Props } from '../MeStep/types'

// 父组件参数
export interface StepContext {
  name: string
  parentProps: Ref<Props>
}
