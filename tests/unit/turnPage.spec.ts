import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeTurnPage from '~/MeTurnPage/index.vue'

describe('TurnPage 仿真翻页', () => {
  const list = Array.from({ length: 3 })

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTurnPage, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTurnPage)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.findAll('.item').length).toBe(list.length)
  })

  test('属性 current', () => {
    const current = 1
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTurnPage, {
      props: { list, current }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTurnPage)

    expect(viewer.findAll('.item')[current].classes('active')).toBeTruthy()
  })

  test('属性 width', () => {
    const width = '500px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTurnPage, {
      props: { list, width }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTurnPage)
    const renderWidth = getComputedStyle(viewer.element).getPropertyValue('width')
    expect(renderWidth).toBe(width)
  })

  test('属性 height', () => {
    const height = '500px'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTurnPage, {
      props: { list, height }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTurnPage)
    const renderWidth = getComputedStyle(viewer.element).getPropertyValue('height')
    expect(renderWidth).toBe(height)
  })
})
