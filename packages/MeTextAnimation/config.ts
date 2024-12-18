import type { Props } from './types'

/**
 * 组件名称
 */
export const name = 'me-text-animation'

/**
 * 类型枚举
 */
export const typeGroup = {
  /**
   * 默认
   */
  default: 'default',
  /**
   * 边框
   */
  border: 'border',
  options() {
    return [
      {
        value: this.default
      },
      {
        value: this.border
      }
    ]
  },
  some(value: unknown) {
    return this.options().some(item => item.value === value)
  }
}

/**
 * 容器字体大小
 */
export const viewBoxSize = 50

/**
 * 合并默认和传参
 */
export const mergeDefaultWithProps = (param: Props) => {
  const option = JSON.parse(JSON.stringify(param))

  option.type = typeGroup.some(option.type) ? option.type : typeGroup.default
  option.size ||= 24
  option.size ||= 24
  option.family ||= 'Arial'
  option.color ||= '#409eff'
  option.background ||= '#fff'

  return option as Required<Props>
}
