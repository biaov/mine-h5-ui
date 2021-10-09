/* eslint-disable no-unused-vars */

// 子项目
export interface ChildrenListItem {
  id: number;
  text: string;
  state: boolean;
  icon?: string;
  badge?: string;
  dot?: boolean;
  img?: string;
  imgSelected?: string;
}

// 列表项
export interface ListDataItem {
  label: string;
  list: ChildrenListItem[];
  color?: string;
  colorSelected?: string;
  background?: string;
  borderColor?: string;
}
