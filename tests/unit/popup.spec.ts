import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MePopup from '~/MePopup/index.vue'

describe('MePopup', () => {
  test('props visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePopup, {
      props: { visible: true }
    })

    await Retarder()

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-popup')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('props position', async () => {
    const position = 'left'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePopup, {
      props: { position }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-popup>div')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(position)).toBe(true)
  })

  test('emit cancel', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePopup)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-popup')

    await viewer.trigger('click')
    await Retarder()

    expect(wrapper.emitted('cancel')).toBeDefined()
  })
})
