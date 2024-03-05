import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeEmpty from '~/MeEmpty/index.vue'

describe('MeEmpty 空状态', () => {
  test('属性 text', () => {
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
    const viewer = getViewer(wrapper, MeEmpty)

    expect(viewer.exists()).toBeTruthy()

    const textEl = viewer.find('.txt')

    expect(textEl.exists()).toBeTruthy()
    expect(textEl.text()).toBe(text)
  })

  test('属性 type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeEmpty, {
      props: { type: 'network' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeEmpty).find('.img>.iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-wangluocuowu')).toBe(true)
  })

  test('属性 icon-name', () => {
    const url = 'https://biaov.cn/logo.svg'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeEmpty, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeEmpty).find('.img>img')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('src')).toBe(url)
  })
})
