import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeDialog from '~/MeDialog/index.vue'

describe('MeDialog', () => {
  const visible = true

  test('props visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDialog, {
      props: { visible }
    })

    await Retarder()

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-dialog')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('props tips', () => {
    const tips = '提示文本'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDialog, {
      props: { visible, tips }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-dialog .picker .tips')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(tips)
  })
})
