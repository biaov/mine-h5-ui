import { mount } from '@vue/test-utils'
import MeEmpty from '~/MeEmpty/index.vue'

describe('MeEmpty', () => {
  test('props text', () => {
    const text = '文本内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeEmpty, {
      props: { text }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-empty')

    expect(viewer.exists()).toBeTruthy()

    const textEl = viewer.find('.txt')

    expect(textEl.exists()).toBeTruthy()
    expect(textEl.text()).toBe(text)
  })

  test('props type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeEmpty, {
      props: { type: 'network' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-empty .img>.iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-wangluocuowu')).toBe(true)
  })

  test('props icon-name', () => {
    const url = 'http://dummyimage.com/200x200/f60/fff'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeEmpty, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-empty .img>img')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('src')).toBe(url)
  })
})
