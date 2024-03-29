import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeJigsawValidate from '~/MeJigsawValidate/index.vue'

describe('MeJigsawValidate 拼图校验', () => {
  const url = 'https://biaov.cn/logo.svg'

  test('属性 url', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeJigsawValidate, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeJigsawValidate)
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.html().includes(url)).toBe(true)
  })

  test('属性 width', () => {
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
    const viewer = getViewer(wrapper, MeJigsawValidate)
    expect(viewer.attributes('style')?.includes(`width: ${width};`)).toBe(true)
  })

  test('属性 height', () => {
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
    const viewer = getViewer(wrapper, MeJigsawValidate)
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
    const wrapper = mount(MeJigsawValidate, {
      props: { url, slideStyle }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeJigsawValidate)
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
    const wrapper = mount(MeJigsawValidate, {
      props: { url, tips }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeJigsawValidate)
    /**
     * tips 节点
     */
    const tipsNode = viewer.find('.slide-tips')
    expect(tipsNode.text()).toBe(tips)
  })
})
