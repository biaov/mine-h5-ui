// 父组件参数
export interface SwiperContext {
  name: string
  getName: (name: string | number) => void
}

// props
export interface Props {
  name: string | number
  url: string
  text: string
  background: string
}
