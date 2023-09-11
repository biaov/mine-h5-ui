import { onMounted, watch, ref, onUnmounted } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import type { Props, Emits } from './types'

/**
 * 点击操作
 */
export const useHandler = (emit: Emits) => {
  /**
   * 点击数字
   */
  const onClick = (num: number) => {
    emit('click', num)
  }

  /**
   * 点击删除按钮
   */
  const onDelete = (e: MouseEvent) => {
    emit('delete', e)
  }

  /**
   * 点击完成按钮
   */
  const onComplate = (e: MouseEvent) => {
    emit('update:visible', false)
    emit('complate', e)
  }

  return { onClick, onDelete, onComplate }
}

/**
 * 页面 padding
 */
export const usePadding = (props: Readonly<Props>, emit: Emits) => {
  /**
   * 是否处于激活状态
   */
  const isActive = ref(false)

  /**
   * 改变页面 padding
   */
  const setPadding = () => {
    // 判断是否可设置padding
    if (props.isPadding) {
      // 判断是否处于激活状态
      if (props.visible) {
        document.body.className += ' me-keyboard-padding' // 设置className
      } else {
        /**
         * 获取 className
         */
        const { className } = document.body
        let index: number | undefined = className.indexOf('me-keyboard-padding')
        index = index > 0 ? index : undefined // 判断是否存在padding
        document.body.className = className.slice(0, index) // 设置className
      }
    }
  }

  /**
   * 点击 Document
   */
  const clickDocument = () => {
    emit('update:visible', false)
  }

  onMounted(() => {
    setPadding()
    // 点击非键盘区域
    Bind(document, 'click', clickDocument)
  })

  onUnmounted(() => {
    // document 移除绑定点击事件
    Unbind(document, 'click', clickDocument)
  })

  watch(() => props.visible, setPadding)

  return { isActive }
}
