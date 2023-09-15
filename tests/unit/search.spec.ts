import { mount } from '@vue/test-utils'
import MeSearch from '~/MeSearch/index.vue'

describe('MeSearch 搜索', () => {
  const modelValue = ''

  test('属性 placeholder', () => {
    const placeholder = '测试占位符'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue, placeholder }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search')

    expect(viewer.exists()).toBeTruthy()

    const inputEl = viewer.find('.input')

    expect(inputEl.attributes('placeholder')).toBe(placeholder)
  })

  test('属性 btn-text', () => {
    const btnText = '测试右侧按钮内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .btn')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(btnText)
  })

  test('属性 disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue, disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .input')

    expect(viewer.attributes('disabled')).toBeDefined()
  })

  test('事件 focus', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .input')

    await viewer.trigger('focus')

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('事件 blur', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .input')

    await viewer.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
  })

  test('事件 input', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .input')

    await viewer.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
  })

  test('事件 change', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .input')

    await viewer.trigger('change')

    expect(wrapper.emitted('change')).toBeDefined()
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText: '按钮' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-search .btn')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
