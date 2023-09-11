import { mount } from '@vue/test-utils'
import MeVirtualList from '~/MeVirtualList/index.vue'

describe('MeVirtualList', () => {
  /**
   * 列表数据
   */
  const list = [{ text: '内容一' }, { text: '内容二' }]

  test('props list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeVirtualList, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-virtual-list')

    expect(viewer.exists()).toBeTruthy()

    const liEl = viewer.find('.list-scroll>li:first-child')

    expect(liEl.exists()).toBeTruthy()
    expect(liEl.attributes('data-index')).toBe('0')
  })
})
