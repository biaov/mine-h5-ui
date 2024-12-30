import { MeToast, MeMessageBox } from '@/plugins'
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
   * 删除按钮
   */
  const onDelete = () => {
    MeMessageBox.confirm({
      tips: '警告',
      message: '你确定要删除此项吗？',
      onOk() {
        MeToast('删除成功')
      }
    })
  }

  /**
   * 点击收藏按钮
   */
  const onCollect = () => {
    MeToast('收藏成功')
  }

  return { listData, onDelete, onCollect }
}
