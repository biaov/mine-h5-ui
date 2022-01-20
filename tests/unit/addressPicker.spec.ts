import { mount } from '@vue/test-utils'
import MeAddressPicker from '~/MeAddressPicker/index.vue'

describe('MeAddressPicker', () => {
  test('props visible', () => {
    // 向组件里传参
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    const viewer = wrapper.find('.me-address-picker') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
  })
  test('emit on-sure', async () => {
    // 向组件里传参
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    const viewer = wrapper.find('.me-address-picker') // 获取 DOM
    const sureBtn = viewer.find('button.u-sure')
    await sureBtn.trigger('click') // 点击确定按钮
    expect(wrapper.emitted('on-sure')).toBeTruthy() // 是否为真
  })
  test('emit on-cancel', async () => {
    // 向组件里传参
    const wrapper = mount(MeAddressPicker, {
      props: { visible: true }
    })
    const viewer = wrapper.find('.me-address-picker') // 获取 DOM
    const cancelBtn = viewer.find('button.u-cancel')
    await cancelBtn.trigger('click') // 点击取消按钮
    expect(wrapper.emitted('on-cancel')).toBeTruthy() // 是否为真
  })
})
