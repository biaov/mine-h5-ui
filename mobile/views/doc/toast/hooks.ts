import { getCurrentInstance } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = Object.freeze<ListDataItem[]>(initData)

  /**
   * 点击取消按钮
   */
  const onClick = () => {
    $MeToast('显示信息')
  }

  return { listData, onClick }
}
