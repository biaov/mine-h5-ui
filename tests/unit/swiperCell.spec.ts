import { mount } from '@vue/test-utils'
import MeSwiperCell from '~/MeSwiperCell/index.vue'

describe('MeSwiperCell', () => {
  test('exists', () => {
    // 向组件里传参
    const wrapper = mount(MeSwiperCell)
    const viewer = wrapper.find('.me-swiper-cell') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
  })
})
