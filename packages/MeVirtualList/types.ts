// emits
export interface Emits {
  (event: 'load-more'): void
}

// props
export interface Props {
  list: Record<string, any>[]
  interval: number
  height: string
  itemHeight: number
  distance: number
  screen: number[]
  remain: number
}
