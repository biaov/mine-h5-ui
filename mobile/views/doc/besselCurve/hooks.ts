import { ref } from 'vue'
import initData from './data'
import { useMeBesselCurve } from '@/plugins'
import type { ChildListItem } from './types'

/**
 * 操作
 */
export const useWebData = () => {
  const { renderBesselCurve, calcTargetRef } = useMeBesselCurve()

  /**
   * 列表数据
   */
  const listData = ref(initData)

  const targetRef = async (e: Element, it: ChildListItem, type: 'start' | 'end') => {
    if (!e) return
    await calcTargetRef(e, { group: it.id, type })
    renderBesselCurve.value.forEach(item => {
      item.group === it.id && (it.rect = Object.assign(it.rect ?? {}, item))
    })
  }

  return { listData, targetRef }
}
