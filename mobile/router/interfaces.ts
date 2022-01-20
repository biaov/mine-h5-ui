import { RouteComponent } from 'vue-router'
import { SidebarChildItem } from '@/components/SideBar/interfaces'

declare type Lazy<T> = () => Promise<T>

export interface Docs extends SidebarChildItem {
  component?: Lazy<RouteComponent>
}
