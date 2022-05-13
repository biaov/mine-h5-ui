// props line
export interface Line {
  radius?: number
  color: string
  size?: number
}
// props text
export interface Text {
  color: string
  size: number
}
// fieldsetList item
export interface FieldsetListItem {
  text: string
  deg: number
}

// props
export interface Props {
  list: string[]
  line: Line
  text: Text
  left?: number
  right?: number
  width?: number
  height?: number
  origin?: number
}
