import { ref } from 'vue'
import { MeToast } from '@/plugins'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 改变
   */
  const onChange = (e: boolean) => {
    e && MeToast('验证通过')
  }

  return { listData, onChange }
}
