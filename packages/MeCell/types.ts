// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

// props
export interface Props {
  title: string
  value: string | number
  icon: string
  iconColor: string
  placeholder: string
  arrow: boolean
  height: string
  bottom: boolean
}
