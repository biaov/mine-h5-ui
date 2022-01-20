import { mount } from '@vue/test-utils'
import MeInput from '~/MeInput/index.vue'

describe('MeInput', () => {
  test('props type', () => {
    const type = 'search'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { type }
    })
    const viewer = wrapper.find('.me-input') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const inputEl = viewer.find('.u-input')
    expect(inputEl.exists()).toBeTruthy()
    expect(inputEl.attributes('type')).toBe(type)
  })
  test('props placeholder', () => {
    const placeholder = '测试占位符'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { placeholder }
    })
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    expect(viewer.attributes('placeholder')).toBe(placeholder)
  })
  test('props readonly', () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { readonly: true }
    })
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    expect(viewer.attributes('readonly')).toBeDefined()
  })
  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { disabled: true }
    })
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    expect(viewer.attributes('disabled')).toBeDefined()
  })
  test('props label', () => {
    const label = '测试'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { label }
    })
    const viewer = wrapper.find('.me-input .u-label') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(label)
  })
  test('props labelIcon', () => {
    const labelIcon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { labelIcon, label: '测试' }
    })
    const viewer = wrapper.find('.me-input .u-label .me-icon') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(labelIcon)).toBe(true)
  })
  test('props icon', () => {
    const icon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-input .me-icon') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })
  test('props password', () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { password: true }
    })
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    expect(viewer.attributes('type')).toBe('password')
  })
  test('props digit', () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { digit: true, password: true }
    })
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    expect(viewer.attributes('type')).toBe('text')
  })
  test('props smsMsg', () => {
    const smsMsg = '短信验证码'
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { smsMsg }
    })
    const viewer = wrapper.find('.me-input .u-sms') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(smsMsg)
  })
  test('props smsIs', () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { smsMsg: '短信验证码', smsIs: true }
    })
    const viewer = wrapper.find('.me-input .u-sms') // 获取 DOM
    expect(viewer.classes('countdown')).toBe(true)
  })
  test('emit on-click-sms', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { smsMsg: '短信验证码' }
    })
    const viewer = wrapper.find('.me-input .u-sms') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click-sms')).toBeDefined()
  })
  test('emit on-click-icon', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput, {
      props: { icon: 'icon-github' }
    })
    const viewer = wrapper.find('.me-input .me-icon') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click-icon')).toBeDefined()
  })
  test('emit on-focus', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput)
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    await viewer.trigger('focus')
    expect(wrapper.emitted('on-focus')).toBeDefined()
  })
  test('emit on-blur', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput)
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    await viewer.trigger('blur')
    expect(wrapper.emitted('on-blur')).toBeDefined()
  })
  test('emit on-change', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput)
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    await viewer.trigger('change')
    expect(wrapper.emitted('on-change')).toBeDefined()
  })
  test('emit on-input', async () => {
    // 向组件里传参
    const wrapper = mount(MeInput)
    const viewer = wrapper.find('.me-input .u-input') // 获取 DOM
    await viewer.trigger('input')
    expect(wrapper.emitted('on-input')).toBeDefined()
  })
})
