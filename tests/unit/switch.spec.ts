import { mount } from '@vue/test-utils'
import MeSwitch from '~/MeSwitch/index.vue'

describe('MeSwitch', () => {
  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwitch, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-switch')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwitch)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-switch')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
