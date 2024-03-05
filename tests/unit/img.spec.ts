import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeImg from '~/MeImg/index.vue'

describe('MeImg 图片', () => {
  /**
   * 图片地址
   */
  const src = 'https://biaov.cn/logo.svg'

  test('属性 src', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg)

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('img')

    expect(viewer.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(src)
  })

  test('属性 fill', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src, fill: 'contain' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg).find('span')

    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 alt', () => {
    const alt = '测试图片'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src, alt }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg).find('img')

    expect(viewer.attributes('alt')).toBe(alt)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg)

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('事件 load', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg).find('img')

    await viewer.trigger('load')

    expect(wrapper.emitted('load')).toBeDefined()
  })

  test('事件 error', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeImg).find('img')

    await viewer.trigger('error')

    expect(wrapper.emitted('error')).toBeDefined()
  })
})
