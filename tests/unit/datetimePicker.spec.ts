import { mount } from '@vue/test-utils'
import MeDatetimePicker from '~/MeDatetimePicker/index.vue'

describe('MeDatetimePicker', () => {
  const visible = true

  test('props visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-datetime-picker')

    expect(viewer.exists()).toBeTruthy()
  })

  test('props type', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, type: 'date' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.findAll('.me-datetime-picker .bd>li')

    expect(viewer[0].exists()).toBeTruthy()
    expect(viewer.length).toBe(3)
  })

  test('props min-date', async () => {
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
    const viewer = wrapper.find('.me-datetime-picker .bd>li:first-child>ol>li:first-child')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(`${year}`)
  })

  test('props max-date', async () => {
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
    const viewer = wrapper.find('.me-datetime-picker .bd>li:first-child>ol>li:last-child')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(`${year}`)
  })

  test('emit cancel', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-datetime-picker .hd .cancel')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('cancel')).toBeDefined()
  })

  test('emit sure', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-datetime-picker .hd .sure')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('sure')).toBeDefined()
  })
})
