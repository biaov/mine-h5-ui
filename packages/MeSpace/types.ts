import type { VNode, RendererNode, RendererElement } from 'vue'

/**
 * props
 */
export interface Props {
  /**
   * 间距大小
   */
  size?: string
  /**
   * 间距方向
   */
  direction?: 'horizontal' | 'vertical'
}

/**
 *  VNodes item
 */
export type VNodeItem = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any
  }
>

export interface DefineSlots {
  default: () => VNodeItem[]
}
