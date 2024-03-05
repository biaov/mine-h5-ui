import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeCoupon from '~/MeCoupon/index.vue'

describe('MeCoupon 优惠券', () => {
  test('是否存在', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCoupon)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCoupon)

    expect(viewer.exists()).toBeTruthy()
  })
})
