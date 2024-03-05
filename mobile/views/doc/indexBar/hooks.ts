import { MeToast } from '@/plugins'
import type { CityItem } from './types'

/**
 * 操作
 */
export const useClick = () => {
  /**
   * 点击右侧按钮
   */
  const onClick = ({ cn }: CityItem) => {
    MeToast(cn)
  }

  return { onClick }
}
