import { mount } from '@vue/test-utils'
import { Retarder, getViewer } from '@/utils/functions'
import MeDialog from '~/MeDialog/index.vue'

describe('MeDialog 对话框', () => {
  const visible = true

  test('属性 visible', async () => {
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
    const viewer = getViewer(wrapper, MeDialog)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })

  test('属性 tips', async () => {
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
    const viewer = getViewer(wrapper, MeDialog).find('.picker .tips')
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(tips)
  })
})
