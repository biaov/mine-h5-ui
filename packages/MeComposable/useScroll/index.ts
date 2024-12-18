import type { ScrollAnimationOption } from './types'

/**
 * 滚动动画
 * @example
 * ```ts
 * import { useScroll } from 'mine-h5-ui'

 * const { scrollTo } = useScroll()
 * scrollTo(document.body, 0) // 返回顶部
 * const customDomNode = document.querySelector('.customDomNode') // 自定义节点
 * scrollTo(customDomNode, 0) // 滚动到指定位置
 * ```
 */
export const useScroll = ({ duration = 300 }: ScrollAnimationOption = {}) => {
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const scrollTo = (node: Element, to: number) => {
    const start = node.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment
      node.scrollTop = easeInOutQuad(currentTime, start, change, duration)
      currentTime < duration && requestAnimationFrame(animateScroll)
    }

    animateScroll()
  }

  return { scrollTo }
}
