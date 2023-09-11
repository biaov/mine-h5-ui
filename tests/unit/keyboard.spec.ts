import { mount } from '@vue/test-utils'
import MeKeyboard from '~/MeKeyboard/index.vue'

describe('MeKeyboard', () => {
  test('props visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeKeyboard, {
      props: { visible: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-keyboard')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('props skin-type', () => {
    const skinType = 'dark'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeKeyboard, {
      props: { skinType }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-keyboard')

    expect(viewer.classes(`me-keyboard-${skinType}`)).toBe(true)
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeKeyboard)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-keyboard>li:first-child')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('emit delete', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeKeyboard)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-keyboard>li:last-child')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('delete')).toBeDefined()
  })

  test('emit complate', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeKeyboard)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-keyboard>li.complate')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('complate')).toBeDefined()
  })
})
