import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MePassword from '~/MePassword/index.vue'

describe('MePassword 密码输入框', () => {
  test('属性 type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword, {
      props: { type: 'number' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePassword)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('me-password-number')).toBe(true)
  })

  test('属性 num', () => {
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

  test('属性 skin-type', () => {
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
    const viewer = getViewer(wrapper, MePassword)

    expect(viewer.classes(`me-password-${skinType}`)).toBe(true)
  })

  test('事件 focus', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePassword)

    await viewer.trigger('click', { stop: true })

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('事件 blur', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePassword)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePassword)

    await viewer.trigger('click', { stop: true })
    await viewer.trigger('click', { stop: true })

    expect(wrapper.emitted('blur')).toBeDefined()
  })
})
