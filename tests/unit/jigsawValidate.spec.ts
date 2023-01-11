import { mount } from '@vue/test-utils'
import MeJigsawValidate from '~/MeJigsawValidate/index.vue'

describe('MeJigsawValidate', () => {
  const url = 'https://dummyimage.com/340x300/f60'

  test('props url', () => {
    // 向组件里传参
    const wrapper = mount(MeJigsawValidate, {
      props: { url }
    })
    const viewer = wrapper.find('.me-jigsaw-validate') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.html().includes(url)).toBe(true)
  })

  test('props width', () => {
    const width = '100px'
    // 向组件里传参
    const wrapper = mount(MeJigsawValidate, {
      props: { url, width }
    })
    const viewer = wrapper.find('.me-jigsaw-validate') // 获取 DOM
    expect(viewer.attributes('style')?.includes(`width: ${width};`)).toBe(true)
  })

  test('props height', () => {
    const height = '100px'
    // 向组件里传参
    const wrapper = mount(MeJigsawValidate, {
      props: { url, height }
    })
    const viewer = wrapper.find('.me-jigsaw-validate') // 获取 DOM
    const imgNode = viewer.find('.jigsaw-img') // img 节点
    expect(imgNode.attributes('style')?.includes(`height: ${height};`)).toBe(true)
  })

  test('props slideStyle', () => {
    const slideStyle = {
      height: '30px',
      background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
      dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
      tips: '#fff'
    }
    // 向组件里传参
    const wrapper = mount(MeJigsawValidate, {
      props: { url, slideStyle }
    })
    const viewer = wrapper.find('.me-jigsaw-validate') // 获取 DOM
    const slideNode = viewer.find('.jigsaw-slide') // slide 节点
    expect(slideNode.attributes('style')?.includes(`height: ${slideStyle.height};`)).toBe(true)
  })

  test('props tips', () => {
    const tips = '这是一段提示文字'
    // 向组件里传参
    const wrapper = mount(MeJigsawValidate, {
      props: { url, tips }
    })
    const viewer = wrapper.find('.me-jigsaw-validate') // 获取 DOM
    const tipsNode = viewer.find('.slide-tips') // tips 节点
    expect(tipsNode.text()).toBe(tips)
  })
})
