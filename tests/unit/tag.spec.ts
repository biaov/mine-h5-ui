import { mount } from '@vue/test-utils'
import MeTag from '~/MeTag/index.vue'

describe('MeTag', () => {
  test('props type', () => {
    const type = 'success'
    // 向组件里传参
    const wrapper = mount(MeTag, {
      props: { type }
    })
    const viewer = wrapper.find('.me-tag') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(type)).toBe(true)
  })
  test('props plain', () => {
    // 向组件里传参
    const wrapper = mount(MeTag, {
      props: { plain: true }
    })
    const viewer = wrapper.find('.me-tag') // 获取 DOM
    expect(viewer.classes('plain')).toBe(true)
  })
  test('props text', () => {
    const text = '测试文本'
    // 向组件里传参
    const wrapper = mount(MeTag, {
      props: { text }
    })
    const viewer = wrapper.find('.me-tag .u-txt>span') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })
  test('props closeable', () => {
    // 向组件里传参
    const wrapper = mount(MeTag, {
      props: { closeable: true }
    })
    const viewer = wrapper.find('.me-tag .iconfont') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-baseline-close-px')).toBe(true)
  })
  test('emit on-close', async () => {
    // 向组件里传参
    const wrapper = mount(MeTag, {
      props: { closeable: true }
    })
    const viewer = wrapper.find('.me-tag .iconfont') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-close')).toBeDefined()
  })
})
