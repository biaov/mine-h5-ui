/* eslint-disable no-unused-vars */

// 子列表
export interface ChildrenListItem {
  name: string;
  label: string;
  time?: string;
}
// 列表项
export interface ListDataItem {
  id: number;
  label: string;
  active: string[];
  children: ChildrenListItem[];
  direction?: string;
  type?: string;
  color?: string;
  activeColor?: string;
  icon?: string;
  activeIcon?: string;
}
