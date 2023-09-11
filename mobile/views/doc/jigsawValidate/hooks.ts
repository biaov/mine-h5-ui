import { ref, getCurrentInstance } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useData = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 改变
   */
  const onChange = (e: boolean) => {
    e && $MeToast('验证通过')
  }

  return { listData, onChange }
}
