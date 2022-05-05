import { ref } from 'vue'
import '../theme-default/fonts/iconfont.js'
import { Props } from './types'
import { TypeName } from './interfaces'

// 操作
export const useData = (props: Props) => {
  // 默认图标名称
  const typeName: TypeName = {
    circle: 'icon-loading',
    circle2: 'icon-Loading',
    circle3: 'icon-loading_flat',
    circle4: 'icon-loading04',
    circle5: 'icon-financial_loading',
    circle6: 'icon-loading_ico'
  }
  const iconName = ref(typeName[props.type] || 'icon-loading') // 自定义图标名称

  return { iconName }
}
