/* eslint-disable no-unused-vars */
export interface ChildrenListItem {
  text: string;
}
// list item
export interface ListItem {
  id: number;
  label: string;
  itemHeight: number;
  list: ChildrenListItem[];
  loadStatus?: string;
  auto?: boolean;
}
