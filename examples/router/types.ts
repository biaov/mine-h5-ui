import { RouteComponent } from 'vue-router'
import { SidebarChildItem } from '@/components/SideBar'

export type Lazy<T> = () => Promise<T> // 懒加载

// 文档
export interface Docs extends SidebarChildItem {
  component?: Lazy<RouteComponent>
}
