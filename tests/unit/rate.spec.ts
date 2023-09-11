import { mount } from '@vue/test-utils'
import MeRate from '~/MeRate/index.vue'

describe('MeRate', () => {
  test('props icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRate, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-rate')

    expect(viewer.exists()).toBeTruthy()

    const iconEl = viewer.find('.iconfont:first-child')

    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes(icon)).toBe(true)
  })

  test('props icon-select', async () => {
    const iconSelect = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRate, {
      props: { iconSelect }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-rate .iconfont:first-child')

    await viewer.trigger('click')

    expect(viewer.classes(iconSelect)).toBe(true)
  })

  test('props count', () => {
    const count = 4
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRate, {
      props: { count }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.findAll('.me-rate .iconfont')

    expect(viewer.length).toBe(count)
  })

  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRate, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-rate')

    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('emit change', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRate)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-rate .iconfont:first-child')

    await viewer.trigger('click')

    expect(wrapper.emitted('change')).toBeDefined()
  })
})
