import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const grids = Object.freeze<ListDataItem[]>(initData) // 列表数据

  // 点击格子项
  const handleLi = ({ text }: ListDataItem) => {
    $MeToast(text)
  }

  return { grids, handleLi }
}
