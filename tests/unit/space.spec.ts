import { mount } from '@vue/test-utils'
import MeSpace from '~/MeSpace/index.vue'

describe('MeSpace', () => {
  test('props size', () => {
    // 向组件里传参
    const wrapper = mount(MeSpace, {
      props: { size: '20px' }
    })
    const viewer = wrapper.find('.me-space') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
  })

  test('props direction', () => {
    const direction = 'vertical'
    // 向组件里传参
    const wrapper = mount(MeSpace, {
      props: { direction }
    })
    const viewer = wrapper.find('.me-space') // 获取 DOM
    expect(viewer.classes(direction)).toBeTruthy()
  })
})
