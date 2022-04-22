import { mount } from '@vue/test-utils'
import MeTabBar from '~/MeTabBar/index.vue'

describe('MeTabBar', () => {
  const text = '测试文本'
  // 列表数据
  const list = [
    {
      text,
      state: false
    }
  ]
  test('props list', () => {
    // 向组件里传参
    const wrapper = mount(MeTabBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-tab-bar') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const textEl = viewer.find('li:first-child .u-txt')
    expect(textEl.exists()).toBeTruthy()
    expect(textEl.text()).toBe(text)
  })
  test('emit on-change', async () => {
    // 向组件里传参
    const wrapper = mount(MeTabBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-tab-bar>li:first-child') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    await viewer.trigger('click')
    expect(wrapper.emitted('on-change')).toBeDefined()
  })
})
