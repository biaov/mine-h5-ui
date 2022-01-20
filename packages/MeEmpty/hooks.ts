import { ref } from 'vue'
import { Props } from './types'
import { Names } from './interfaces'

// 图标名称
export const useIconName = (props: Props) => {
  // 类型对应图标名称
  const names: Names = {
    default: 'jigou_wushuju',
    network: 'wangluocuowu',
    search: 'wushuju'
  }
  const icon = ref(props.iconName || names[props.type]) // 图标名称
  return { icon }
}
