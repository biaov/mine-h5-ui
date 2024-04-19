import { mount } from '@vue/test-utils'
import { getViewer, Retarder } from '@/utils/functions'
import MeBesselCurve from '~/MeBesselCurve/index.vue'

describe('MeBesselCurve 拖拽', () => {
  const list = [{ sx: 0, sy: 0, sw: 0, sh: 0, ex: 0, ey: 0, ew: 0, eh: 0, group: '1' }]

  test('属性 list', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeBesselCurve, { props: { list } })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeBesselCurve)
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 color', async () => {
    const color = '#f60'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeBesselCurve, { props: { list, color } })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeBesselCurve).findAll('path')[1]
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('stroke')).toBe(color)
  })

  test('属性 strokeWidth', async () => {
    const strokeWidth = 2
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeBesselCurve, { props: { list, strokeWidth } })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeBesselCurve).findAll('path')[1]
    expect(viewer.attributes('stroke-width')).toBe(`${strokeWidth}`)
  })

  test('属性 arrow', async () => {
    const arrow = false
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeBesselCurve, { props: { list, arrow } })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeBesselCurve).findAll('path')[1]
    expect(viewer.attributes('marker-end')).toBe('')
  })
})
