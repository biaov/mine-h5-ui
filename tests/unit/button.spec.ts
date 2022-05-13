import { mount } from '@vue/test-utils'
import MeButton from '~/MeButton/index.vue'

describe('MeButton', () => {
  test('props nativeType', () => {
    const nativeType = 'submit'
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { nativeType }
    })
    const viewer = wrapper.find('.me-btn') // 获取 DOM
    expect(viewer.exists()).toBeTruthy() // 是否存在组件
    expect(viewer.attributes('type')).toBe(nativeType) // 是否存在值
  })

  test('props type', () => {
    const type = 'primary'
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { type }
    })
    const viewer = wrapper.find('.me-btn') // 获取 DOM
    expect(viewer.classes(`me-btn-${type}`)).toBe(true) // 是否存在值
  })

  test('props plain', () => {
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { plain: true }
    })
    const viewer = wrapper.find('.me-btn') // 获取 DOM
    expect(viewer.classes('me-btn-plain')).toBe(true) // 是否存在值
  })

  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { disabled: true }
    })
    const viewer = wrapper.find('.me-btn') // 获取 DOM

    expect(viewer.classes('disabled')).toBe(true) // 是否存在值
  })

  test('props icon', () => {
    const icon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-btn .me-icon') // 获取 DOM

    expect(viewer.exists()).toBeTruthy() // 是否存在组件
    expect(viewer.classes(icon)).toBe(true) // 是否存在值
  })

  test('emit click', async () => {
    // 向组件里传参
    const wrapper = mount(MeButton, {
      props: { type: 'primary' }
    })
    const viewer = wrapper.find('.me-btn') // 获取 DOM

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
