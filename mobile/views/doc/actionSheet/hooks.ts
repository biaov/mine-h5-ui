import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem, GrandsonListItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击列表按钮
   */
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item))
  }

  /**
   * 点击取消按钮
   */
  const onCancel = () => {
    $MeToast('点击了取消按钮')
  }

  return { listData, onChange, onCancel }
}
