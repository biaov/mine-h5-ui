import { ref } from 'vue'
import { MeToast } from '@/plugins'
import initData from './data'
import type { ListDataItem, ChildListItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  /**
   * 点击取消按钮
   */
  const onCancel = (item: ChildListItem) => {
    item.visible = false
    MeToast('你点击了取消按钮')
  }
  /**
   * 点击确定按钮
   */
  const onConfirm = (item: ChildListItem) => {
    item.visible = false
    MeToast('你点击了确定按钮')
  }

  return { listData, onConfirm, onCancel }
}
