// 当前 type 类型的 name 所有值
export interface TypeName extends Record<string, string> {
  circle: string
  circle2: string
  circle3: string
  circle4: string
  circle5: string
  circle6: string
}

// props
export interface Props {
  type: string
  size: string
  color: string
  icon: string
}
