/* eslint-disable no-unused-vars */

// 三级选项
export interface GrandsonListItem {
  icon: string;
  value: string;
  color: string;
}

// 子选项
export interface ChildrenListItem {
  id: number;
  value: string;
  visible: boolean;
  list: GrandsonListItem[];
}
// 列表项
export interface ListDataItem {
  id: number;
  label: string;
  list: ChildrenListItem[];
}
