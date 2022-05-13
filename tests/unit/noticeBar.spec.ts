import { mount } from '@vue/test-utils'
import MeNoticeBar from '~/MeNoticeBar/index.vue'

describe('MeNoticeBar', () => {
  const list = '测试公告文本内容'

  test('props list', () => {
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-notice-bar') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()

    const liEl = wrapper.find('.notice-horizontal>li:first-child') // 获取 DOM

    expect(liEl.exists()).toBeTruthy()
    expect(liEl.text()).toBe(list)
  })

  test('props scroll', () => {
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list, scroll: 'vertical' }
    })
    const viewer = wrapper.find('.me-notice-bar .notice-vertical') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
  })

  test('props preappendIcon', () => {
    const preappendIcon = 'github'
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list, preappendIcon }
    })
    const viewer = wrapper.find('.me-notice-bar .icon-preappend .iconfont') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(`icon-${preappendIcon}`)).toBe(true)
  })

  test('props appendIcon', () => {
    const appendIcon = 'github'
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list, appendIcon }
    })
    const viewer = wrapper.find('.me-notice-bar .icon-append .iconfont') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(`icon-${appendIcon}`)).toBe(true)
  })

  test('emit click', async () => {
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-notice-bar .notice-horizontal>li:first-child') // 获取 DOM

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('emit click:preappend', async () => {
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-notice-bar .icon-preappend') // 获取 DOM

    await viewer.trigger('click')

    expect(wrapper.emitted('click:preappend')).toBeDefined()
  })

  test('emit click:append', async () => {
    // 向组件里传参
    const wrapper = mount(MeNoticeBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-notice-bar .icon-append') // 获取 DOM

    await viewer.trigger('click')

    expect(wrapper.emitted('click:append')).toBeDefined()
  })
})
