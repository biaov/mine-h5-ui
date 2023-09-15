import { mount } from '@vue/test-utils'
import MeAddressPicker from '~/MeAddressPicker/index.vue'

describe('MeAddressPicker 地址选择器', () => {
  test('属性 visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-address-picker')

    expect(viewer.exists()).toBeTruthy()
  })

  test('事件 sure', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-address-picker')
    const sureBtn = viewer.find('button.sure')

    await sureBtn.trigger('click') // 点击确定按钮

    expect(wrapper.emitted('sure')).toBeTruthy() // 是否为真
  })

  test('事件 cancel', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-address-picker')
    const cancelBtn = viewer.find('button.cancel')

    await cancelBtn.trigger('click') // 点击取消按钮

    expect(wrapper.emitted('cancel')).toBeTruthy() // 是否为真
  })
})
