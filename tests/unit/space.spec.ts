import { mount } from '@vue/test-utils'
import MeSpace from '~/MeSpace/index.vue'

describe('MeSpace 间距', () => {
  test('属性 size', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSpace, {
      props: { size: '20px' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-space')
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 direction', () => {
    const direction = 'vertical'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSpace, {
      props: { direction }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-space')
    expect(viewer.classes(direction)).toBeTruthy()
  })
})
