/* eslint-disable no-unused-vars */
// 子列表
export interface ChildrenListItem {
  name: string;
  color?: string;
  size?: string;
}
// list item
export interface ListItem {
  id: number;
  label: string;
  list: ChildrenListItem[];
}
