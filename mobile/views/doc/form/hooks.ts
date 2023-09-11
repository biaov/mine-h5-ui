import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem, SubmitCallBackParams } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast, $Validator } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  listData.value[0].rules[1].pattern = $Validator.validPwd

  /**
   * 点击提交按钮
   */
  const onSubmit = ({ valid, value }: SubmitCallBackParams) => {
    // 判断是否通过校验
    if (valid) {
      console.log(value) // form 校验的值
      $MeToast('提交成功')
    }
  }

  return { listData, onSubmit }
}
