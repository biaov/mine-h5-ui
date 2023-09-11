import { mount } from '@vue/test-utils'
import MeNoticeBar from '~/MeNoticeBar/index.vue'

describe('MeNoticeBar', () => {
  const list = '测试公告文本内容'

  test('props list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar')

    expect(viewer.exists()).toBeTruthy()

    const liEl = wrapper.find('.notice-horizontal>li:first-child')

    expect(liEl.exists()).toBeTruthy()
    expect(liEl.text()).toBe(list)
  })

  test('props scroll', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list, scroll: 'vertical' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .notice-vertical')

    expect(viewer.exists()).toBeTruthy()
  })

  test('props preappend-icon', () => {
    const preappendIcon = 'github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list, preappendIcon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .icon-preappend .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(`icon-${preappendIcon}`)).toBe(true)
  })

  test('props append-icon', () => {
    const appendIcon = 'github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list, appendIcon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .icon-append .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(`icon-${appendIcon}`)).toBe(true)
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .notice-horizontal>li:first-child')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('emit click:preappend', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .icon-preappend')

    await viewer.trigger('click')

    expect(wrapper.emitted('click:preappend')).toBeDefined()
  })

  test('emit click:append', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-notice-bar .icon-append')

    await viewer.trigger('click')

    expect(wrapper.emitted('click:append')).toBeDefined()
  })
})
