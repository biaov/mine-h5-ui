import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useHandle = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 当标签栏改变时
  const onChange = ({ value }: ListDataItem) => {
    console.log(value)
  }

  return { listData, onChange }
}
