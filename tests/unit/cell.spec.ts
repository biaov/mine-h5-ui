import { mount } from '@vue/test-utils'
import MeCell from '~/MeCell/index.vue'

describe('MeCell 单元格', () => {
  test('属性 title', async () => {
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

  test('属性 value', async () => {
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

  test('属性 icon', async () => {
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

  test('属性 placeholder', async () => {
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
