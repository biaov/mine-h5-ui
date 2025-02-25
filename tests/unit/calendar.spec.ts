import { mount } from '@vue/test-utils'
import { getViewer, Retarder } from '@/utils/functions'
import MeCalendar from '~/MeCalendar/index.vue'

describe('MeCalendar 日历', () => {
  const visible = true
  test('属性 visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCalendar, { props: { visible } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCalendar)
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 modeValue', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCalendar, { props: { visible } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCalendar)
    const firstItem = viewer.find('.calendar-day .item:nth-child(1)')
    await firstItem.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
  })

  test('属性 themeColor', () => {
    const themeColor = '#f56c6c'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCalendar, { props: { visible, themeColor } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCalendar)
    expect(getComputedStyle(viewer.element).getPropertyValue('--theme')).toBe(themeColor)
  })

  test('属性 style', () => {
    const position = 'absolute'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCalendar, { props: { visible, style: `position:${position};` } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCalendar)
    expect(getComputedStyle(viewer.element).getPropertyValue('position')).toBe(position)
  })

  test('属性 closable', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCalendar, { props: { visible: true, closable: true } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCalendar)
    const firstItem = viewer.find('.calendar-day .item:nth-child(1)')
    await firstItem.trigger('click')
    await Retarder()
    expect(Object.keys(getViewer(wrapper, MeCalendar)).length).toBe(0)
  })
})
