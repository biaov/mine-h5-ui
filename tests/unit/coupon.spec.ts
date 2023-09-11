import { mount } from '@vue/test-utils'
import MeCoupon from '~/MeCoupon/index.vue'

describe('MeCoupon', () => {
  test('exist', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCoupon)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-coupon')

    expect(viewer.exists()).toBeTruthy()
  })
})
