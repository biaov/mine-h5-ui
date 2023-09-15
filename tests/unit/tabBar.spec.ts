import { mount } from '@vue/test-utils'
import MeTabBar from '~/MeTabBar/index.vue'

describe('MeTabBar 标签栏', () => {
  const text = '测试文本'
  /**
   * 列表数据
   */
  const list = [
    {
      text,
      state: false
    }
  ]

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTabBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-tab-bar')

    expect(viewer.exists()).toBeTruthy()

    const textEl = viewer.find('li:first-child .txt')

    expect(textEl.exists()).toBeTruthy()
    expect(textEl.text()).toBe(text)
  })

  test('事件 change', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTabBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-tab-bar>li:first-child')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('change')).toBeDefined()
  })
})
