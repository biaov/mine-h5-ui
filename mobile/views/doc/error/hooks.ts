import { ref } from 'vue'
import initData from './data'
import type { ListDataItem, ShareData } from './types'

/**
 * 初始化页面
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  return { listData }
}

/**
 * 页面操作
 */
export const useSwitch = ({ listData }: ShareData) => {
  const onClickSwitch = () => {
    listData.value[0].position = listData.value[0].position === 'fixed' ? 'relative' : 'fixed'
  }

  return { onClickSwitch }
}
