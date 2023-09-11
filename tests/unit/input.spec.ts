import { mount } from '@vue/test-utils'
import MeInput from '~/MeInput/index.vue'

describe('MeInput', () => {
  test('props type', () => {
    const type = 'search'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { type }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input')

    expect(viewer.exists()).toBeTruthy()

    const inputEl = viewer.find('.input')

    expect(inputEl.exists()).toBeTruthy()
    expect(inputEl.attributes('type')).toBe(type)
  })

  test('props placeholder', () => {
    const placeholder = '测试占位符'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { placeholder }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    expect(viewer.attributes('placeholder')).toBe(placeholder)
  })

  test('props readonly', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { readonly: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    expect(viewer.attributes('readonly')).toBeDefined()
  })

  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    expect(viewer.attributes('disabled')).toBeDefined()
  })

  test('props label', () => {
    const label = '测试'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { label }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .label')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(label)
  })

  test('props label-icon', () => {
    const labelIcon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { labelIcon, label: '测试' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .label .me-icon')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(labelIcon)).toBe(true)
  })

  test('props icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .me-icon')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })

  test('props password', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { password: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    expect(viewer.attributes('type')).toBe('password')
  })

  test('props digit', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { digit: true, password: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    expect(viewer.attributes('type')).toBe('text')
  })

  test('props sms-msg', () => {
    const smsMsg = '短信验证码'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { smsMsg }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .sms')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(smsMsg)
  })

  test('props sms-is', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { smsMsg: '短信验证码', smsIs: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .sms')

    expect(viewer.classes('countdown')).toBe(true)
  })

  test('emit click-sms', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { smsMsg: '短信验证码' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .sms')

    await viewer.trigger('click')

    expect(wrapper.emitted('click-sms')).toBeDefined()
  })

  test('emit click-icon', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput, {
      props: { icon: 'icon-github' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .me-icon')

    await viewer.trigger('click')

    expect(wrapper.emitted('click-icon')).toBeDefined()
  })

  test('emit focus', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    await viewer.trigger('focus')

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('emit blur', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    await viewer.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
  })

  test('emit change', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    await viewer.trigger('change')

    expect(wrapper.emitted('change')).toBeDefined()
  })

  test('emit input', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeInput)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-input .input')

    await viewer.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
  })
})
