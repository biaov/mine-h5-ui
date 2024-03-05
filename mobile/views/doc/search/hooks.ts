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
   * 点击键盘搜索或者回车按钮
   */
  const onSearch = () => {
    MeToast('搜索中...')
  }

  /**
   * 点击右侧按钮
   */
  const onClick = () => {
    MeToast('点击了取消按钮')
  }

  return { listData, onSearch, onClick }
}
