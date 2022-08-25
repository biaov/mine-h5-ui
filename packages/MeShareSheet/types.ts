// props list
export interface ListItem {
  icon: string
  color: string
  value: string | number
}

// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'change', e: ListItem): void
  (event: 'cancel', e: MouseEvent): void
}

// props
export interface Props {
  visible: boolean
  tips: string
  list: ListItem[]
}
