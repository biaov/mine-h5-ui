import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeSwitch from '~/MeSwitch/index.vue'

describe('MeSwitch 开关', () => {
  test('属性 disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwitch, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSwitch)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSwitch)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSwitch)

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
