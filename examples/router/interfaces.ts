import { RouteComponent } from 'vue-router'
import { SidebarChildItem } from '@/components/SideBar'
import { Lazy } from './types'

// 文档
export interface Docs extends SidebarChildItem {
  component?: Lazy<RouteComponent>
}
