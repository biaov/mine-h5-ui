import { ref } from 'vue'
import '../styles/fonts/iconfont.js'
import type { Props, TypeName } from './types'

/**
 * 操作
 */
export const useData = (props: Readonly<Required<Props>>) => {
  /**
   * 默认图标名称
   */
  const typeName: TypeName = {
    circle: 'icon-loading',
    circle2: 'icon-Loading',
    circle3: 'icon-loading_flat',
    circle4: 'icon-loading04',
    circle5: 'icon-financial_loading',
    circle6: 'icon-loading_ico'
  }
  /**
   * 自定义图标名称
   */
  const iconName = ref(typeName[props.type] || 'icon-loading')

  return { iconName }
}
