import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据
  // 点击取消按钮
  const onClick = () => {
    $MeToast('显示信息')
  }
  return { listData, onClick }
}
