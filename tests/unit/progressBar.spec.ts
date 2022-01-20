import { mount } from '@vue/test-utils'
import MeProgressBar from '~/MeProgressBar/index.vue'

describe('MeProgressBar', () => {
  const modelValue = 0
  test('props type', () => {
    // 向组件里传参
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, type: 'circle' }
    })
    const viewer = wrapper.find('.me-progress-bar') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const circleEl = viewer.find('.m-circle')
    expect(circleEl.exists()).toBeTruthy()
  })
  test('props text', () => {
    const text = '测试文本'
    // 向组件里传参
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, text }
    })
    const viewer = wrapper.find('.me-progress-bar .m-line .u-txt') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })
  test('props textShow', () => {
    // 向组件里传参
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, textShow: false }
    })
    const viewer = wrapper.find('.me-progress-bar .m-line .u-txt') // 获取 DOM
    expect(viewer.exists()).toBeFalsy()
  })
})
