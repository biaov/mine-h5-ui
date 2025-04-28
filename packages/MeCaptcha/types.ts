import type { Ref } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'check', [x, y]: number[]): void
  (event: 'refresh'): void
}

interface DataPropsType {
  bgElem: {
    url: string
    size: number[]
  }
  elem: {
    initPos: number[]
    url: string
    size: number[]
  }
}

/**
 * props
 */
export interface Props {
  /**
   * 图片宽度
   */
  item?: DataPropsType
}

/**
 * 共享数据
 */
export interface ShareData {
  visible: Ref<boolean>
  statusCode: Ref<number>
}
