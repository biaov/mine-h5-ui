import { mount } from '@vue/test-utils'
import MeInput from '~/MeInput/index.vue'

describe('MeInput 按钮', () => {
  test('属性 type', () => {
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

  test('属性 placeholder', () => {
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

  test('属性 readonly', () => {
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

  test('属性 disabled', () => {
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

  test('属性 label', () => {
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

  test('属性 label-icon', () => {
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

  test('属性 icon', () => {
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

  test('属性 password', () => {
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

  test('属性 digit', () => {
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

  test('属性 sms-msg', () => {
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

  test('属性 sms-is', () => {
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

  test('事件 click-sms', async () => {
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

  test('事件 click-icon', async () => {
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

  test('事件 focus', async () => {
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

  test('事件 blur', async () => {
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

  test('事件 change', async () => {
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

  test('事件 input', async () => {
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
