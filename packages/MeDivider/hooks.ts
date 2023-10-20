import { ref } from 'vue'
import type { PropsHookParam, FieldsetListItem } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<PropsHookParam>) => {
  /**
   * 分割线
   */
  const fieldsetList = ref<FieldsetListItem[]>([])
  /**
   * 数组长度
   */
  const len = props.list.length
  /**
   * 是否小于 3
   */
  const flagBool = len < 3
  const curLine = ref(props.line)

  /**
   * 设置默认值
   */
  if (flagBool) {
    curLine.value.radius = curLine.value.radius ?? 0
    curLine.value.size = curLine.value.size ?? 1
  }

  /**
   * 循环遍历
   */
  fieldsetList.value = props.list.map((item, index) => {
    /**
     * 旋转角度
     */
    let deg = (360 / len) * index
    deg = flagBool ? 0 : deg
    return {
      text: item,
      deg
    }
  })

  return { fieldsetList, curLine }
}
