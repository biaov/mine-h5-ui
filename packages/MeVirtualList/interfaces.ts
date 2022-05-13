// listItem
export interface ListItem {
  [key: string]: any
}

// emits
export interface Emits {
  (event: 'load-more'): void
}

// props
export interface Props {
  list: ListItem[]
  interval: number
  height: string
  itemHeight: number
  distance: number
  screen: number[]
  remain: number
}
