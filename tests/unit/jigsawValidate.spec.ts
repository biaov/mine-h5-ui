import { mount } from '@vue/test-utils'
import MeJigsawValidate from '~/MeJigsawValidate/index.vue'

describe('MeJigsawValidate', () => {
  const url = 'https://dummyimage.com/340x300/f60'

  test('props url', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-jigsaw-validate')
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.html().includes(url)).toBe(true)
  })

  test('props width', () => {
    const width = '100px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url, width }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-jigsaw-validate')
    expect(viewer.attributes('style')?.includes(`width: ${width};`)).toBe(true)
  })

  test('props height', () => {
    const height = '100px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url, height }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-jigsaw-validate')
    /**
     * img 节点
     */
    const imgNode = viewer.find('.jigsaw-img')
    expect(imgNode.attributes('style')?.includes(`height: ${height};`)).toBe(true)
  })

  test('props slideStyle', () => {
    const slideStyle = {
      height: '30px',
      background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
      dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
      tips: '#fff'
    }
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url, slideStyle }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-jigsaw-validate')
    /**
     * slide 节点
     */
    const slideNode = viewer.find('.jigsaw-slide')
    expect(slideNode.attributes('style')?.includes(`height: ${slideStyle.height};`)).toBe(true)
  })

  test('props tips', () => {
    const tips = '这是一段提示文字'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url, tips }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-jigsaw-validate')
    /**
     * tips 节点
     */
    const tipsNode = viewer.find('.slide-tips')
    expect(tipsNode.text()).toBe(tips)
  })
})
