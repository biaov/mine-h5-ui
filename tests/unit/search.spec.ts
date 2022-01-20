import { mount } from '@vue/test-utils'
import MeSearch from '~/MeSearch/index.vue'

describe('MeSearch', () => {
  const modelValue = ''
  test('props placeholder', () => {
    const placeholder = '测试占位符'
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, placeholder }
    })
    const viewer = wrapper.find('.me-search') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const inputEl = viewer.find('.u-input')
    expect(inputEl.attributes('placeholder')).toBe(placeholder)
  })
  test('props btnText', () => {
    const btnText = '测试右侧按钮内容'
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText }
    })
    const viewer = wrapper.find('.me-search .u-btn') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(btnText)
  })
  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, disabled: true }
    })
    const viewer = wrapper.find('.me-search .u-input') // 获取 DOM
    expect(viewer.attributes('disabled')).toBeDefined()
  })
  test('emit on-focus', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .u-input') // 获取 DOM
    await viewer.trigger('focus')
    expect(wrapper.emitted('on-focus')).toBeDefined()
  })
  test('emit on-blur', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .u-input') // 获取 DOM
    await viewer.trigger('blur')
    expect(wrapper.emitted('on-blur')).toBeDefined()
  })
  test('emit on-input', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .u-input') // 获取 DOM
    await viewer.trigger('input')
    expect(wrapper.emitted('on-input')).toBeDefined()
  })
  test('emit on-change', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .u-input') // 获取 DOM
    await viewer.trigger('change')
    expect(wrapper.emitted('on-change')).toBeDefined()
  })
  test('emit on-click', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText: '按钮' }
    })
    const viewer = wrapper.find('.me-search .u-btn') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click')).toBeDefined()
  })
})
