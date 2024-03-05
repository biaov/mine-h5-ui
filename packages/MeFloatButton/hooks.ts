import { ref } from 'vue'
import { useVisible, useScroll } from '../MeComposable'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Pick<Props, 'type' | 'scrollTop'>> & Props>, emit: Emits) => {
  const { scrollTo } = useScroll()
  const initVisible = !(props.type === 'backTop' && props.scrollTop)
  const [visible, setVisible] = useVisible(initVisible)
  const onClick = (e: MouseEvent) => {
    props.type === 'backTop' && props.scrollNode && scrollTo(props.scrollNode, 0)
    emit('click', e)
  }

  const scrollTop = ref(props.scrollTop)

  const onScroll = (e: Event) => {
    setVisible((e.target as Element).scrollTop >= scrollTop.value)
  }

  return { visible, onClick, onScroll }
}
