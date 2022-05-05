/* eslint-disable no-unused-vars */

// props list
export interface ListItem {
  text: string
  state: boolean
  icon?: string
  dot?: string
  badge?: string
  img?: string
  imgSelected?: string
}

// emits
export interface Emits {
  (event: 'on-change', item: ListItem): void
}

// props
export interface Props {
  list: ListItem[]
  borderColor: string
  background: string
  color: string
  colorSelected: string
}
