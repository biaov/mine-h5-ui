import { ref } from 'vue'
import type { Props, Names } from './types'

/**
 * 图标名称
 */
export const useIconName = (props: Readonly<Required<Props>>) => {
  /**
   * 类型对应图标名称
   */
  const names: Names = {
    default: 'jigou_wushuju',
    network: 'wangluocuowu',
    search: 'wushuju'
  }
  /**
   * 图标名称
   */
  const icon = ref(props.iconName || names[props.type])

  return { icon }
}
