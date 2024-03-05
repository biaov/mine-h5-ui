import { ref } from 'vue'
import { MeToast } from '@/plugins'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 页面数据
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  const onClick = (item: ListDataItem) => {
    MeToast(`点击了${item.label}按钮`)
  }

  return { listData, onClick }
}
