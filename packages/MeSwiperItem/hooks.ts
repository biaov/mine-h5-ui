import { inject } from 'vue'
import { MeSwiperKey } from '../MeSwiper/token'
import { Props } from './types'
import { SwiperContext } from './interfaces'

// name
export const useName = (props: Props) => {
  const { name, getName } = inject(MeSwiperKey, {} as SwiperContext)
  name === MeSwiperKey && getName(props.name)
  return {}
}
