import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据

  // 点击关闭按钮
  const onClose = () => {
    $MeToast('点击关闭按钮')
  }

  return { listData, onClose }
}
