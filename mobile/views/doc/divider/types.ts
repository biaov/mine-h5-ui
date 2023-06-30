/**
 * 线
 */
export interface Line {
  radius?: number
  color?: string
  size?: number
}

/**
 * 文本
 */
export interface Text {
  color?: string
  size?: number
}

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  list?: string[]
  left?: number
  line?: Line
  text?: Text
  width?: number
  height?: number
  origin?: number
}
