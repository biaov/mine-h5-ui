/**
 * 当前 type 类型的 name 所有值
 */
export interface TypeName extends Record<string, string> {
  circle: string
  circle2: string
  circle3: string
  circle4: string
  circle5: string
  circle6: string
}

/**
 * props
 */
export interface Props {
  /**
   * 类型
   */
  type?: 'circle' | 'circle2' | 'circle3' | 'circle4' | 'circle5' | 'circle6'
  /**
   * 图标大小
   */
  size?: string
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 自定义图标名称
   */
  icon?: string
}
