import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem, ChildListItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击取消按钮
  const onCancel = (item: ChildListItem) => {
    item.visible = false
    $MeToast('你点击了取消按钮')
  }
  // 点击确定按钮
  const onConfirm = (item: ChildListItem) => {
    item.visible = false
    $MeToast('你点击了确定按钮')
  }
  return { listData, onConfirm, onCancel }
}
