import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeSplitter from '~/MeSplitter/index.vue'

describe('MeSplitter 图片碎片', () => {
  const url = 'https://biaov.cn/logo.svg'

  test('属性 url', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.html().includes(url)).toBe(true)
  })

  test('属性 width', () => {
    const width = '100px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, width }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    expect(viewer.attributes('style')?.includes(`width: ${width};`)).toBe(true)
  })

  test('属性 height', () => {
    const height = '100px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, height }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    /**
     * img 节点
     */
    const imgNode = viewer.find('.jigsaw-img')
    expect(imgNode.attributes('style')?.includes(`height: ${height};`)).toBe(true)
  })

  test('属性 slideStyle', () => {
    const slideStyle = {
      height: '30px',
      background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
      dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
      tips: '#fff'
    }
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, slideStyle }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    /**
     * slide 节点
     */
    const slideNode = viewer.find('.jigsaw-slide')
    expect(slideNode.attributes('style')?.includes(`height: ${slideStyle.height};`)).toBe(true)
  })

  test('属性 tips', () => {
    const tips = '这是一段提示文字'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, tips }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    /**
     * tips 节点
     */
    const tipsNode = viewer.find('.slide-tips')
    expect(tipsNode.text()).toBe(tips)
  })
})
