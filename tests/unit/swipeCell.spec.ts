import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeSwipeCell from '~/MeSwipeCell/index.vue'

describe('MeSwipeCell 滑动单元格', () => {
  test('exists', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwipeCell)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSwipeCell)

    expect(viewer.exists()).toBeTruthy()
  })
})
