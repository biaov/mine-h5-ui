// props list
export interface ListItem {
  id?: number | string
  label: string
  [key: string]: number | string | undefined
}

// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'change', item: ListItem): void
  (event: 'cancel', item: MouseEvent): void
}

// props
export interface Props {
  visible: boolean
  list: ListItem[]
  index: string
  label: string
}
