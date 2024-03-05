import { ref } from 'vue'
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
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击
   */
  const onClick = (index: number) => {
    MeToast(`你点击了第${index + 1}项`)
  }

  return { listData, onClick }
}
