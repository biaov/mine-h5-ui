import { mount } from '@vue/test-utils'
import MeLoading from '~/MeLoading/index.vue'

describe('MeLoading', () => {
  test('是否存在', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeLoading, {
      props: {}
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-loading')

    expect(viewer.exists()).toBeTruthy()
  })
})
