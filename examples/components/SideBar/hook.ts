import NavData from '@/config/nav.config'
import type { SidebarListItem } from './types'

/**
 * 使用页面数据
 */
export const useWebData = () => {
  const sidebarList: SidebarListItem[] = []

  Object.keys(NavData).forEach(title => {
    sidebarList.push({
      title,
      children: (NavData as any)[title]
    })
  })

  return { sidebarList }
}
