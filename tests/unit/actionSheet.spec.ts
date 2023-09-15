import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeActionSheet from '~/MeActionSheet/index.vue'

describe('MeActionSheet 动作面板', () => {
  /**
   * 列表数据
   */
  const list = [
    { id: 1, label: '内容一一', value: '内容一' },
    { id: 2, label: '内容二二', value: '内容二' }
  ]

  test('属性 list', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeActionSheet, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-action-sheet')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.isVisible()).toBe(false)
  })

  test('属性 visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeActionSheet, {
      props: { list, visible: true }
    })

    await Retarder()

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-action-sheet')

    expect(viewer.classes('show')).toBe(true)
  })

  test('属性 label', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeActionSheet, {
      props: { list, label: 'label' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-action-sheet')

    expect(viewer.html()).toContain(list[0].label)
  })
})
