import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeVirtualList from '~/MeVirtualList/index.vue'

describe('MeVirtualList 虚拟列表', () => {
  /**
   * 列表数据
   */
  const list = [{ text: '内容一' }, { text: '内容二' }]

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeVirtualList, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeVirtualList)

    expect(viewer.exists()).toBeTruthy()

    const liEl = viewer.find('.list-scroll>li:first-child')

    expect(liEl.exists()).toBeTruthy()
    expect(liEl.attributes('data-index')).toBe('0')
  })
})
