import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeMask from '~/MeMask/index.vue'

describe('MeMask', () => {
  test('props visible', async () => {
    // 向组件里传参
    const wrapper = mount(MeMask, {
      props: { visible: true }
    })

    await Retarder()

    const viewer = wrapper.find('.me-mask') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('props mask-close', async () => {
    // 向组件里传参
    const wrapper = mount(MeMask, {
      props: { maskClose: true }
    })

    await Retarder()

    const viewer = wrapper.find('.me-mask') // 获取 DOM

    await viewer.trigger('click')
    await Retarder()

    expect(viewer.isVisible()).toBe(false)
  })
})
