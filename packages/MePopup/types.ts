/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'cancel'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 是否显示弹出层
   */
  visible?: boolean
  /**
   * 是否显示模态框
   */
  modal?: boolean
  /**
   * 弹出位置
   */
  position?: string
  /**
   * 是否显示关闭图标
   */
  closeable?: boolean
  /**
   * 倒角数值
   */
  radius?: string
}
