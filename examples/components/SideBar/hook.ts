import NavData from '@/config/nav.config'
import type { SidebarListItem } from './types'

/**
 * 使用页面数据
 */
export const useWebData = () => {
  const sidebarList: SidebarListItem[] = [
    {
      name: 'overview',
      meta: {
        title: '组件总览'
      }
    }
  ]

  Object.keys(NavData).forEach(title => {
    sidebarList.push({
      title,
      children: NavData[title as keyof typeof NavData]
    })
  })

  return { sidebarList }
}
