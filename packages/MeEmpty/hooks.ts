import { ref } from 'vue'
import { Props, Names } from './types'

// 图标名称
export const useIconName = (props: Readonly<Props>) => {
  // 类型对应图标名称
  const names: Names = {
    default: 'jigou_wushuju',
    network: 'wangluocuowu',
    search: 'wushuju'
  }
  const icon = ref(props.iconName || names[props.type]) // 图标名称

  return { icon }
}
