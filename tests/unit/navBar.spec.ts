import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeNavBar from '~/MeNavBar/index.vue'

describe('MeNavBar 导航栏', () => {
  test('属性 title', () => {
    const title = '测试标题'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar, {
      props: { title }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeNavBar)

    expect(viewer.exists()).toBeTruthy()

    const titleEl = wrapper.find('.tit')

    expect(titleEl.exists()).toBeTruthy()
    expect(titleEl.text()).toBe(title)
  })

  test('属性 left-arrow', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar, {
      props: { leftArrow: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-nav-bar .lf .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-left')).toBe(true)
  })

  test('属性 left-text', () => {
    const leftText = '测试左侧按钮内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar, {
      props: { leftText }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-nav-bar .lf>span')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(leftText)
  })

  test('属性 right-text', () => {
    const rightText = '测试右侧按钮内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar, {
      props: { rightText }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-nav-bar .rt .btn')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(rightText)
  })

  test('事件 click-left', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-nav-bar .lf')

    await viewer.trigger('click')

    expect(wrapper.emitted('click-left')).toBeDefined()
  })

  test('事件 click-right', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNavBar, {
      props: { rightText: '右侧按钮内容' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-nav-bar .rt .btn')

    await viewer.trigger('click')

    expect(wrapper.emitted('click-right')).toBeDefined()
  })
})
