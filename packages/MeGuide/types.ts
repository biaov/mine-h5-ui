/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'step', index: number): void
  (event: 'finish'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 显示状态
   */
  visible?: boolean
  /**
   * 引导图片数据
   */
  list: string[]
  /**
   * 禁止完成关闭
   */
  disabledClose?: boolean
}
