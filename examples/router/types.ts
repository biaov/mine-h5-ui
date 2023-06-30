import { RouteComponent } from 'vue-router'
import { SidebarChildItem } from '@/components/SideBar'

/**
 * 懒加载
 */
export type Lazy<T> = () => Promise<T>

/**
 * 文档
 */
export interface Docs extends SidebarChildItem {
  component?: Lazy<RouteComponent>
}
