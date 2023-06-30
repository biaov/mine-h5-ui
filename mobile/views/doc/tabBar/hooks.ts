import { ref } from 'vue'
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
   * 点击标签栏项
   */
  const onChange = ({ id }: ChildListItem, item: ListDataItem) => {
    // 遍历设置每一项的数据
    item.list.forEach(elem => {
      elem.state = elem.id === id
    })
  }

  return { listData, onChange }
}
