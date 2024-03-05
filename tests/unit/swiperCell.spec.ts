import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeSwiperCell from '~/MeSwiperCell/index.vue'

describe('MeSwiperCell 滑动单元格', () => {
  test('exists', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwiperCell)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSwiperCell)

    expect(viewer.exists()).toBeTruthy()
  })
})
