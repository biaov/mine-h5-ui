import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeDatetimePicker from '~/MeDatetimePicker/index.vue'

describe('MeDatetimePicker 时间选择器', () => {
  const visible = true

  test('属性 visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker)

    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 type', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, type: 'date' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker).findAll('.bd>li')

    expect(viewer[0].exists()).toBeTruthy()
    expect(viewer.length).toBe(3)
  })

  test('属性 min-date', async () => {
    const year = new Date().getFullYear() - 6
    const minDate = new Date()
    minDate.setFullYear(year)

    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, minDate }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker).find('.bd>li:first-child>ol>li:first-child')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(`${year}`)
  })

  test('属性 max-date', async () => {
    const year = new Date().getFullYear() + 6
    const maxDate = new Date()
    maxDate.setFullYear(year)

    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, maxDate }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker).find('.bd>li:first-child>ol>li:last-child')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(`${year}`)
  })

  test('事件 cancel', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker).find('.hd .cancel')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('cancel')).toBeDefined()
  })

  test('事件 sure', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDatetimePicker).find('.hd .sure')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('sure')).toBeDefined()
  })
})
