import { getCurrentInstance } from 'vue'
import { CityItem } from './interfaces'

// 点击项
export const useClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  // 点击右侧按钮
  const onClick = ({ cn }: CityItem) => {
    $MeToast(cn)
  }
  return { onClick }
}
