import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useWebData = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  const current = ref<number>(0) // 当前选中项

  // 状态改变
  const onChange = (data: ListDataItem[], name: string): void => {
    console.log(name)
  }

  return { listData, current, onChange }
}
