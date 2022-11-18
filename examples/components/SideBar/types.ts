// meta类型
export interface SidebarMeta {
  title: string
}

// 导航子栏目
export interface SidebarItem {
  name: string
  path: string
  meta: SidebarMeta
}

// 导航子类型
export interface SidebarChildItem extends Partial<Pick<SidebarItem, 'name' | 'path'>>, Pick<SidebarItem, 'meta'> {
  items?: SidebarItem[]
}

// 导航类型
export interface SidebarListItem {
  title: string
  children: SidebarChildItem[]
}
