import { mount } from '@vue/test-utils'
import MeSwiperCell from '~/MeSwiperCell/index.vue'

describe('MeSwiperCell', () => {
  test('exists', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwiperCell)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-swiper-cell')

    expect(viewer.exists()).toBeTruthy()
  })
})
