import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
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
    const viewer = getViewer(wrapper, MeAddressPicker)

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
    const viewer = getViewer(wrapper, MeAddressPicker).find('button.sure')

    /**
     * 点击确定按钮
     */
    await viewer.trigger('click')

    /**
     * 是否为真
     */
    expect(wrapper.emitted('sure')).toBeTruthy()
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
    const viewer = getViewer(wrapper, MeAddressPicker).find('button.cancel')
    /**
     * 点击取消按钮
     */
    await viewer.trigger('click')

    /**
     * 是否为真
     */
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })
})
