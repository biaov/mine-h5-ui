import { mount } from '@vue/test-utils'
import MeDivider from '~/MeDivider/index.vue'

describe('MeDivider', () => {
  test('props list', () => {
    const list = ['缥缈']
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDivider, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-divider')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(list[0])
  })
})
