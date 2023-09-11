import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem, ChildListItem } from './types'

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
   * 点击 Switch 开关
   */
  const onClick = (item: ChildListItem) => {
    // 循环遍历关闭其他输入键盘
    listData.value.forEach(({ list }) => {
      list.forEach(el => {
        el.value = false
      })
    })
    item.value = true // 设置当前键盘显示
  }

  /**
   * 点击数字
   */
  const handleNum = (e: number) => {
    $MeToast(e)
  }

  /**
   * 点击删除按钮
   */
  const onDelete = () => {
    $MeToast('点击了删除')
  }

  /**
   * 点击关闭
   */
  const onComplate = () => {
    $MeToast('点击了完成')
  }

  return { listData, onClick, handleNum, onDelete, onComplate }
}
