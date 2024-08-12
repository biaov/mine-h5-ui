import { MeShowLoading, MeHideLoading } from '@/plugins'
import initData from './data'
import type { ListDataItem, ChildListItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const listData = Object.freeze<ListDataItem[]>(initData)

  /**
   * 点击取消按钮
   */
  const onClick = (subItem: ChildListItem) => {
    MeShowLoading(subItem.content)
    setTimeout(() => {
      MeHideLoading()
    }, 3000)
  }

  return { listData, onClick }
}
