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

    const inputEl = viewer.find('.input')

    expect(inputEl.attributes('placeholder')).toBe(placeholder)
  })

  test('props btnText', () => {
    const btnText = '测试右侧按钮内容'
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText }
    })
    const viewer = wrapper.find('.me-search .btn') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(btnText)
  })

  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, disabled: true }
    })
    const viewer = wrapper.find('.me-search .input') // 获取 DOM

    expect(viewer.attributes('disabled')).toBeDefined()
  })

  test('emit focus', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .input') // 获取 DOM

    await viewer.trigger('focus')

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('emit blur', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .input') // 获取 DOM

    await viewer.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
  })

  test('emit input', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .input') // 获取 DOM

    await viewer.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
  })

  test('emit change', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-search .input') // 获取 DOM

    await viewer.trigger('change')

    expect(wrapper.emitted('change')).toBeDefined()
  })

  test('emit click', async () => {
    // 向组件里传参
    const wrapper = mount(MeSearch, {
      props: { modelValue, btnText: '按钮' }
    })
    const viewer = wrapper.find('.me-search .btn') // 获取 DOM

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
