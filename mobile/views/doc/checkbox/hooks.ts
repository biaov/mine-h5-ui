import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击组选框里的单选框
  const onChange = (value: number) => {
    $MeToast(`你当前值为 ${JSON.stringify(value)}`)
  }

  // 点击单独选框
  const onClick = (value: boolean) => {
    $MeToast(value ? '选中' : '取消选中')
  }

  return { listData, onChange, onClick }
}
