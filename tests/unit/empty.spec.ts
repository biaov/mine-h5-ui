import { mount } from '@vue/test-utils'
import MeEmpty from '~/MeEmpty/index.vue'

describe('MeEmpty', () => {
  test('props text', () => {
    const text = '文本内容'
    // 向组件里传参
    const wrapper = mount(MeEmpty, {
      props: { text }
    })
    const viewer = wrapper.find('.me-empty') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()

    const textEl = viewer.find('.txt')

    expect(textEl.exists()).toBeTruthy()
    expect(textEl.text()).toBe(text)
  })

  test('props type', () => {
    // 向组件里传参
    const wrapper = mount(MeEmpty, {
      props: { type: 'network' }
    })
    const viewer = wrapper.find('.me-empty .img>.iconfont') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-wangluocuowu')).toBe(true)
  })

  test('props iconName', () => {
    const url = 'http://dummyimage.com/200x200/f60/fff'
    // 向组件里传参
    const wrapper = mount(MeEmpty, {
      props: { url }
    })
    const viewer = wrapper.find('.me-empty .img>img') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('src')).toBe(url)
  })
})
