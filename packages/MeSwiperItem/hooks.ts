import { inject } from 'vue'
import { MeSwiperKey } from '../MeSwiper/token'
import type { Props, SwiperContext } from './types'

/**
 * name
 */
export const useName = (props: Readonly<Required<Props>>) => {
  const { name, getName } = inject(MeSwiperKey, {} as SwiperContext)
  name === MeSwiperKey && getName(props.name)

  return {}
}
