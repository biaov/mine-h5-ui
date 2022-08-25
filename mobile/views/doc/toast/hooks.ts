import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据

  // 点击取消按钮
  const onClick = () => {
    $MeToast('显示信息')
  }

  return { listData, onClick }
}
