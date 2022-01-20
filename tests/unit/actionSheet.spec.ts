import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeActionSheet from '~/MeActionSheet/index.vue'

describe('MeActionSheet', () => {
  // 列表数据
  const list = [
    { id: 1, label: '内容一一', value: '内容一' },
    { id: 2, label: '内容二二', value: '内容二' }
  ]
  test('props list', async () => {
    // 向组件里传参
    const wrapper = mount(MeActionSheet, {
      props: { list }
    })
    const viewer = wrapper.find('.me-action-sheet') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.isVisible()).toBe(false)
  })
  test('props visible', async () => {
    // 向组件里传参
    const wrapper = mount(MeActionSheet, {
      props: { list, visible: true }
    })
    await Retarder()
    const viewer = wrapper.find('.me-action-sheet') // 获取 DOM
    expect(viewer.classes('show')).toBe(true)
  })
  test('props label', async () => {
    // 向组件里传参
    const wrapper = mount(MeActionSheet, {
      props: { list, label: 'label' }
    })
    const viewer = wrapper.find('.me-action-sheet') // 获取 DOM
    expect(viewer.html()).toContain(list[0].label)
  })
})
