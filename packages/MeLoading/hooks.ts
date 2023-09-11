import { ref } from 'vue'
import './iconfont'
import type { Props } from './types'

/**
 * 操作
 */
export const useData = (props: Readonly<Required<Props>>) => {
  /**
   * 自定义图标名称
   */
  const iconName = ref(props.icon || 'icon-Loading')

  return { iconName }
}
