import { getCurrentInstance, ref } from 'vue'
import { ListDataItem, GrandsonListItem } from './interfaces'
import initData from './data'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击列表按钮
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item))
  }

  // 点击取消按钮
  const onCancel = () => {
    $MeToast('点击了取消按钮')
  }

  return { listData, onChange, onCancel }
}
