// props list
export interface ListItem extends Record<string, number | string | undefined> {
  id?: number | string
  label: string
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
