import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const grids = Object.freeze<ListDataItem[]>(initData) // 列表数据
  // 点击格子项
  const handleLi = ({ text }: ListDataItem) => {
    $MeToast(text)
  }
  return { grids, handleLi }
}
