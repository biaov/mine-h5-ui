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
  const listData = Object.freeze<ListDataItem[]>(initData)

  /**
   * 点击关闭按钮
   */
  const onClose = () => {
    MeToast('点击关闭按钮')
  }

  return { listData, onClose }
}
