import { mount } from '@vue/test-utils'
import { Retarder, getViewer } from '@/utils/functions'
import MeShareSheet from '~/MeShareSheet/index.vue'

describe('MeShareSheet 分享面板', () => {
  const icon = 'icon-github'
  /**
   * 列表
   */
  const list = [
    {
      icon,
      color: '#f60',
      value: 0
    }
  ]

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeShareSheet, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeShareSheet)

    expect(viewer.exists()).toBeTruthy()

    const iconEl = viewer.find('.list-li>li:first-child .iconfont')

    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes(icon)).toBe(true)
  })

  test('属性 visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeShareSheet, {
      props: { list, visible: true }
    })
    await Retarder()

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeShareSheet)

    expect(viewer.classes('show')).toBe(true)
  })

  test('属性 tips', async () => {
    const tips = '提示文本'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeShareSheet, {
      props: { list, tips }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-share-sheet .tips')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(tips)
  })
})
