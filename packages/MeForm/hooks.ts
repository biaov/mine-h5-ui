import { MeToast } from '../MeToast'
import type { Props, Emits, Option } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 点击提交按钮按钮
   */
  const onSubmit = (e: Event) => {
    /**
     * 取消默认行为，防止 form 提交
     */
    e.preventDefault()

    /**
     * 需要校验的属性数组
     */
    const arr = Object.keys(props.model)

    /**
     * 回调参数
     */
    const option: Option = {
      valid: true,
      message: '',
      type: '',
      value: props.model
    }

    for (let i = 0; i < props.rules.length; i++) {
      const { type, required, message, validator, pattern } = props.rules[i]

      /**
       * 判断是否该存在属性
       */
      if (arr.includes(type)) {
        /**
         * 是否存在校验规则
         */
        if (validator !== undefined || pattern !== undefined || required !== undefined) {
          /**
           * 是否通过校验
           */
          const valid = validator !== undefined ? validator(props.model[type]) : pattern !== undefined ? pattern.test(props.model[type]) : String(props.model[type]).trim() !== ''

          /**
           * 只要存在校验不通过则结束此次循环
           */
          if (!valid) {
            /**
             * 校验规则
             */
            option.valid = valid
            /**
             * 提示信息
             */
            option.message = message || ''
            option.type = type
            /**
             * 是否显示提示
             */
            message && MeToast(message)
            break
          }
        }
      }
    }

    emit('submit', option)
  }

  return { onSubmit }
}
