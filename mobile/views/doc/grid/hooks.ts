import { MeToast } from '@/plugins'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const grids = Object.freeze<ListDataItem[]>(initData)

  /**
   * 点击格子项
   */
  const handleLi = ({ text }: ListDataItem) => {
    MeToast(text)
  }

  return { grids, handleLi }
}
