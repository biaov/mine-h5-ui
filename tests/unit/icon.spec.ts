import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeIcon from '~/MeIcon/index.vue'

describe('MeIcon 图标', () => {
  test('属性 name', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIcon, {
      props: { name: 'icon-github' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeIcon)

    expect(viewer.exists()).toBeTruthy()
    /**
     * 是否存在值
     */
    expect(viewer.classes('icon-github')).toBe(true)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIcon, {
      props: { name: 'icon-github' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeIcon)

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
