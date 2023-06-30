import { mount } from '@vue/test-utils'
import MeImg from '~/MeImg/index.vue'

describe('MeImg', () => {
  /**
   * 图片地址
   */
  const src = 'http://dummyimage.com/100x100/0079cb/fff'

  test('props src', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-img')

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('img')

    expect(viewer.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(src)
  })

  test('props fill', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src, fill: 'contain' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-img>span')

    expect(viewer.exists()).toBeTruthy()
  })

  test('props alt', () => {
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
    const viewer = wrapper.find('.me-img>img')

    expect(viewer.attributes('alt')).toBe(alt)
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-img')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('emit load', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-img>img')

    await viewer.trigger('load')

    expect(wrapper.emitted('load')).toBeDefined()
  })

  test('emit error', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeImg, {
      props: { src }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-img>img')

    await viewer.trigger('error')

    expect(wrapper.emitted('error')).toBeDefined()
  })
})
