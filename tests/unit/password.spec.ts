import { mount } from '@vue/test-utils'
import MePassword from '~/MePassword/index.vue'

describe('MePassword', () => {
  test('props type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword, {
      props: { type: 'number' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-password')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('me-password-number')).toBe(true)
  })

  test('props num', () => {
    const num = 4
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword, {
      props: { num }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.findAll('.me-password>li')

    expect(viewer[0].exists()).toBeTruthy()
    expect(viewer.length).toBe(num)
  })

  test('props skin-type', () => {
    const skinType = 'dark'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword, {
      props: { skinType }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-password')

    expect(viewer.classes(`me-password-${skinType}`)).toBe(true)
  })

  test('emit focus', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-password')

    await viewer.trigger('click', { stop: true })

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('emit blur', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-password')

    await viewer.trigger('click', { stop: true })
    await viewer.trigger('click', { stop: true })

    expect(wrapper.emitted('blur')).toBeDefined()
  })
})
