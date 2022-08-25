// meta类型
export interface SidebarMeta {
  title: string
}

// 导航子栏目
export interface SidebarItems {
  name: string
  path: string
  meta: SidebarMeta
}

// 导航子类型
export interface SidebarChildItem {
  name?: string
  path?: string
  meta: SidebarMeta
  items?: SidebarItems[]
}

// 导航类型
export interface SidebarListItem {
  title: string
  children: SidebarChildItem[]
}
