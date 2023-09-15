import { mount } from '@vue/test-utils'
import MeSwiper from '~/MeSwiper/index.vue'
import MeSwiperItem from '~/MeSwiperItem/index.vue'

describe('MeSwiper 轮播图', () => {
  test('属性 dot', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwiper, {
      props: { dot: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-swiper')

    expect(viewer.exists()).toBeTruthy()

    const dotEl = viewer.find('.dot')

    expect(dotEl.exists()).toBeTruthy()
  })
})

describe('MeSwiperItem 轮播图选项', () => {
  const name = 1

  test('属性 url', () => {
    const url = 'https://biaov.cn/logo.svg'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwiperItem, {
      props: { name, url }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-swiper-item')

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('.img')

    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })

  test('属性 text', () => {
    const text = '测试文本'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwiperItem, {
      props: { name, text }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-swiper-item .text')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })
})
