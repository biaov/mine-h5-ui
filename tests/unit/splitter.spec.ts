import { mount } from '@vue/test-utils'
import { getViewer, Retarder, renderImage } from '@/utils/functions'
import MeSplitter from '~/MeSplitter/index.vue'

renderImage()

describe('MeSplitter 图片碎片', () => {
  const url = 'https://dummyimage.com/600x600/f60'

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

  test('属性 openAnimation', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, openAnimation: true }
    })
    await Retarder(50)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    expect(viewer.html().includes('animate__')).toBe(true)
  })

  test('属性 width', async () => {
    const width = '500px'
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
    const renderWidth = getComputedStyle(viewer.element).getPropertyValue('width')
    expect(renderWidth).toBe(width)
  })

  test('属性 height', async () => {
    const height = '500px'
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
    const renderHeight = getComputedStyle(viewer.element).getPropertyValue('height')
    expect(renderHeight).toBe(height)
  })

  test('属性 gutter', async () => {
    const row = 5
    const cols = 4

    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url, gutter: [row, cols] }
    })
    await Retarder(50)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSplitter)
    const imgs = viewer.findAll(`.${MeSplitter.name}-img`)
    expect(imgs.length).toBe(row * cols)
  })

  test('事件 load', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSplitter, {
      props: { url }
    })
    await Retarder(50)
    expect(wrapper.emitted('load')).toBeDefined()
  })
})
