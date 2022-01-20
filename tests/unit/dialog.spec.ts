import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeDialog from '~/MeDialog/index.vue'

describe('MeDialog', () => {
  const visible = true
  test('props visible', async () => {
    // 向组件里传参
    const wrapper = mount(MeDialog, {
      props: { visible }
    })
    await Retarder()
    const viewer = wrapper.find('.me-dialog') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)
  })
  test('props tips', () => {
    const tips = '提示文本'
    // 向组件里传参
    const wrapper = mount(MeDialog, {
      props: { visible, tips }
    })
    const viewer = wrapper.find('.me-dialog .m-picker .u-tips') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(tips)
  })
})
