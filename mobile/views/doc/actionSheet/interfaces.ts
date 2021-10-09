/* eslint-disable no-unused-vars */
// 三级 list 项
export interface GrandsonListItem {
  id: number;
  value: string;
  label: string;
}
// 子 list 项
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
