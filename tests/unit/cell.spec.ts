import { mount } from '@vue/test-utils'
import MeCell from '~/MeCell/index.vue'

describe('MeCell', () => {
  test('props title', async () => {
    const title = '标题'
    // 向组件里传参
    const wrapper = mount(MeCell, {
      props: { title }
    })
    const viewer = wrapper.find('.me-cell') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(title)
  })

  test('props value', async () => {
    const value = '标题'
    // 向组件里传参
    const wrapper = mount(MeCell, {
      props: { value }
    })
    const viewer = wrapper.find('.me-cell') // 获取 DOM

    expect(viewer.text()).toBe(value)
  })

  test('props icon', async () => {
    const icon = 'icon-xiangji'
    // 向组件里传参
    const wrapper = mount(MeCell, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-cell .me-icon') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })

  test('props placeholder', async () => {
    const placeholder = '占位符'
    // 向组件里传参
    const wrapper = mount(MeCell, {
      props: { placeholder }
    })
    const viewer = wrapper.find('.me-cell') // 获取 DOM

    expect(viewer.text()).toBe(placeholder)
  })
})
