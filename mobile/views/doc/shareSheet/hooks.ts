import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem, ChildListItem, GrandsonListItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击列表项
   */
  const onClick = (item: ChildListItem) => {
    item.visible = true
  }

  /**
   * 点击分享面板列表
   */
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item))
  }

  /**
   * 点击分享面板取消按钮
   */
  const onCancel = () => {
    $MeToast('你点击了取消按钮')
  }

  return { listData, onClick, onChange, onCancel }
}
