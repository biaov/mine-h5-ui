import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'cancel'): void
}

/**
 * props
 */
export interface Props {
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

/**
 * useMask
 */
export namespace USEMask {
  export interface Option {
    emit: Emits
    visibleModel: ModelRef<boolean>
  }
}
