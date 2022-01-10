import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem, ChildListItem, GrandsonListItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击列表项
  const onClick = (item: ChildListItem) => {
    item.visible = true
  }
  // 点击分享面板列表
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item))
  }
  // 点击分享面板取消按钮
  const onCancel = () => {
    $MeToast('你点击了取消按钮')
  }
  return { listData, onClick, onChange, onCancel }
}
