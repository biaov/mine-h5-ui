import MeToast from '../MeToast'
import { Props, Emits, Option } from './types'

// 操作
export const useHandler = (props: Readonly<Props>, emit: Emits) => {
  // 点击提交按钮按钮
  const onSubmit = (e: Event) => {
    e.preventDefault() // 取消默认行为，防止form提交
    const arr = Object.keys(props.model) // 需要校验的属性数组
    // 回调参数
    const option: Option = {
      valid: true,
      message: '',
      type: '',
      value: props.model
    }

    for (let i = 0; i < props.rules.length; i++) {
      const { type, required, message, validator, pattern } = props.rules[i]

      // 判断是否该存在属性
      if (arr.includes(type)) {
        // 是否存在校验规则
        if (validator !== undefined || pattern !== undefined || required !== undefined) {
          // 是否通过校验
          const valid = validator !== undefined ? validator(props.model[type]) : pattern !== undefined ? pattern.test(props.model[type]) : String(props.model[type]).trim() !== ''

          // 只要存在校验不通过则结束此次循环
          if (!valid) {
            option.valid = valid // 校验规则
            option.message = message || '' // 提示信息
            option.type = type
            message && MeToast(message) // 是否显示提示
            break
          }
        }
      }
    }

    emit('submit', option)
  }

  return { onSubmit }
}
