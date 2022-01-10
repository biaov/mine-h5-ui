import { mount } from '@vue/test-utils'
import MeNavBar from '~/MeNavBar/index.vue'

describe('MeNavBar', () => {
  test('props title', () => {
    const title = '测试标题'
    // 向组件里传参
    const wrapper = mount(MeNavBar, {
      props: { title }
    })
    const viewer = wrapper.find('.me-nav-bar') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const titleEl = wrapper.find('.u-tit') // 获取 DOM
    expect(titleEl.exists()).toBeTruthy()
    expect(titleEl.text()).toBe(title)
  })
  test('props leftArrow', () => {
    // 向组件里传参
    const wrapper = mount(MeNavBar, {
      props: { leftArrow: true }
    })
    const viewer = wrapper.find('.me-nav-bar .u-lf .iconfont') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-left')).toBe(true)
  })
  test('props leftText', () => {
    const leftText = '测试左侧按钮内容'
    // 向组件里传参
    const wrapper = mount(MeNavBar, {
      props: { leftText }
    })
    const viewer = wrapper.find('.me-nav-bar .u-lf>span') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(leftText)
  })
  test('props rightText', () => {
    const rightText = '测试右侧按钮内容'
    // 向组件里传参
    const wrapper = mount(MeNavBar, {
      props: { rightText }
    })
    const viewer = wrapper.find('.me-nav-bar .u-rt .u-btn') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(rightText)
  })
  test('emit click-left', async () => {
    // 向组件里传参
    const wrapper = mount(MeNavBar)
    const viewer = wrapper.find('.me-nav-bar .u-lf') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('click-left')).toBeDefined()
  })
  test('emit click-right', async () => {
    // 向组件里传参
    const wrapper = mount(MeNavBar, {
      props: { rightText: '右侧按钮内容' }
    })
    const viewer = wrapper.find('.me-nav-bar .u-rt .u-btn') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('click-right')).toBeDefined()
  })
})
