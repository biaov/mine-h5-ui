import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeShareSheet from '~/MeShareSheet/index.vue'

describe('MeShareSheet', () => {
  const icon = 'icon-github'
  // 列表
  const list = [
    {
      icon,
      color: '#f60',
      value: 0
    }
  ]
  test('props list', () => {
    // 向组件里传参
    const wrapper = mount(MeShareSheet, {
      props: { list }
    })
    const viewer = wrapper.find('.me-share-sheet') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const iconEl = viewer.find('.m-list-li>li:first-child .iconfont')
    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes(icon)).toBe(true)
  })
  test('props visible', async () => {
    // 向组件里传参
    const wrapper = mount(MeShareSheet, {
      props: { list, visible: true }
    })
    await Retarder()
    const viewer = wrapper.find('.me-share-sheet') // 获取 DOM
    expect(viewer.classes('show')).toBe(true)
  })
  test('props tips', async () => {
    const tips = '提示文本'
    // 向组件里传参
    const wrapper = mount(MeShareSheet, {
      props: { list, tips }
    })
    const viewer = wrapper.find('.me-share-sheet .u-tips') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(tips)
  })
})
