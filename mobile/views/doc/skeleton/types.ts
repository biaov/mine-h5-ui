/**
 * 组件参数
 */
interface ComponentProps {
  visible: boolean
  active?: boolean
  title?: boolean
  titleWidth?: string
  row?: number
  rowWidth?: string
  avatar?: boolean
  avatarSize?: string
}

/**
 * 列表项
 */
export interface ListDataItem extends ComponentProps {
  label: string
  rows?: string[]
}
