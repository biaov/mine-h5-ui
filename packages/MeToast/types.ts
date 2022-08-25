// 对象参数
export interface Option {
  message?: string | number
  bgColor?: string
  icon?: string
  durction?: number
}

export type Options = string | number | Option // 参数

// props
export interface Props {
  message: string | number
  bgColor: string
  icon: string
  durction: number
}
