// names
export interface Names extends Record<string, string> {
  default: string
  network: string
  search: string
}

// props
export interface Props {
  text: string
  type: string
  height: number
  iconName: string
  url: string
}
