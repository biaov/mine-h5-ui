import { mount } from '@vue/test-utils'
import { Retarder, getViewer } from '@/utils/functions'
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

    const viewer = getViewer(wrapper, MeActionSheet)

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

    const viewer = getViewer(wrapper, MeActionSheet)

    expect(viewer.classes('show')).toBe(true)
  })

  test('属性 label', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeActionSheet, {
      props: { list, label: 'label' }
    })

    const viewer = getViewer(wrapper, MeActionSheet)

    expect(viewer.html()).toContain(list[0].label)
  })
})
