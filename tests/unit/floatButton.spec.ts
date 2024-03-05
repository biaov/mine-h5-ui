import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeFloatButton from '~/MeFloatButton/index.vue'

describe('MeFloatButton 悬浮按钮', () => {
  test('属性 type', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeFloatButton, {
      props: {}
    })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeFloatButton)
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('插槽 default', async () => {
    const slot = 'text'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeFloatButton, {
      slots: {
        default: slot
      }
    })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeFloatButton)
    expect(viewer.text()).toBe(slot)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeFloatButton, {
      props: {}
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeFloatButton)

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
