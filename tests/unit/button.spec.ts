import { mount } from '@vue/test-utils'
import MeButton from '~/MeButton/index.vue'

describe('MeButton 按钮', () => {
  test('属性 native-type', () => {
    const nativeType = 'submit'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { nativeType }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn')
    /**
     * 是否存在组件
     */
    expect(viewer.exists()).toBeTruthy()
    /**
     * 是否存在值
     */
    expect(viewer.attributes('type')).toBe(nativeType)
  })

  test('属性 type', () => {
    const type = 'primary'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { type }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn')
    /**
     * 是否存在值
     */
    expect(viewer.classes(`me-btn-${type}`)).toBe(true)
  })

  test('属性 plain', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { plain: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn')
    /**
     * 是否存在值
     */
    expect(viewer.classes('me-btn-plain')).toBe(true)
  })

  test('属性 disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn')
    /**
     * 是否存在值
     */
    expect(viewer.classes('disabled')).toBe(true)
  })

  test('属性 icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn .me-icon')
    /**
     * 是否存在组件
     */
    expect(viewer.exists()).toBeTruthy()
    /**
     * 是否存在值
     */
    expect(viewer.classes(icon)).toBe(true)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeButton, {
      props: { type: 'primary' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-btn')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
