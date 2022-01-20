import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem, SubmitCallBackParams } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast, $Validator } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  listData.value[0].rules[1].pattern = $Validator.validPwd
  // 点击提交按钮
  const onSubmit = ({ valid, value }: SubmitCallBackParams) => {
    // 判断是否通过验证
    if (valid) {
      console.log(value) // form验证的值
      $MeToast('提交成功')
    }
  }
  return { listData, onSubmit }
}
