import { mount } from '@vue/test-utils'
import MeCell from '~/MeCell/index.vue'

describe('MeCell', () => {
  test('props title', async () => {
    const title = '标题'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCell, {
      props: { title }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-cell')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(title)
  })

  test('props value', async () => {
    const value = '标题'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCell, {
      props: { value }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-cell')

    expect(viewer.text()).toBe(value)
  })

  test('props icon', async () => {
    const icon = 'icon-xiangji'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCell, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-cell .me-icon')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })

  test('props placeholder', async () => {
    const placeholder = '占位符'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCell, {
      props: { placeholder }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-cell')

    expect(viewer.text()).toBe(placeholder)
  })
})
