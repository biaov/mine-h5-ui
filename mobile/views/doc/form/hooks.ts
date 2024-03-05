import { ref } from 'vue'
import { MeToast, useValidator } from '@/plugins'
import initData from './data'
import type { ListDataItem, SubmitCallBackParams } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const vlidator = useValidator()
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  listData.value[0].rules[1].pattern = vlidator.password

  /**
   * 点击提交按钮
   */
  const onSubmit = ({ valid, value }: SubmitCallBackParams) => {
    /**
     * 判断是否通过校验
     */
    if (valid) {
      /**
       * form 校验的值
       */
      console.log(value)
      MeToast('提交成功')
    }
  }

  return { listData, onSubmit }
}
