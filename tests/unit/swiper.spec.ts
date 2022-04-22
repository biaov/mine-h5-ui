import { mount } from '@vue/test-utils'
import MeSwiper from '~/MeSwiper/index.vue'
import MeSwiperItem from '~/MeSwiperItem/index.vue'

describe('MeSwiper', () => {
  test('props dot', () => {
    // 向组件里传参
    const wrapper = mount(MeSwiper, {
      props: { dot: true }
    })
    const viewer = wrapper.find('.me-swiper') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const dotEl = viewer.find('.m-dot')
    expect(dotEl.exists()).toBeTruthy()
  })
})

describe('MeSwiperItem', () => {
  const name = 1
  test('props url', () => {
    const url = 'https://dummyimage.com/750x350/4BC7F5/fff&text=1'
    // 向组件里传参
    const wrapper = mount(MeSwiperItem, {
      props: { name, url }
    })
    const viewer = wrapper.find('.me-swiper-item') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const imgEl = viewer.find('.u-img')
    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })
  test('props text', () => {
    const text = '测试文本'
    // 向组件里传参
    const wrapper = mount(MeSwiperItem, {
      props: { name, text }
    })
    const viewer = wrapper.find('.me-swiper-item .u-text') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })
})
