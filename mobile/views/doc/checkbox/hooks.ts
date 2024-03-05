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
   * 点击组选框里的单选框
   */
  const onChange = (value: number) => {
    MeToast(`你当前值为 ${JSON.stringify(value)}`)
  }

  /**
   * 点击单独选框
   */
  const onClick = (value: boolean) => {
    MeToast(value ? '选中' : '取消选中')
  }

  return { listData, onChange, onClick }
}
