import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeNoticeBar from '~/MeNoticeBar/index.vue'

describe('MeNoticeBar 公告栏', () => {
  const list = '测试公告文本内容'

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeNoticeBar)

    expect(viewer.exists()).toBeTruthy()

    const liEl = wrapper.find('.notice-horizontal>li:first-child')

    expect(liEl.exists()).toBeTruthy()
    expect(liEl.text()).toBe(list)
  })

  test('属性 scroll', () => {
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

  test('属性 preappend-icon', () => {
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

  test('属性 append-icon', () => {
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

  test('事件 click', async () => {
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

  test('事件 click:preappend', async () => {
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

  test('事件 click:append', async () => {
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
