import { mount } from '@vue/test-utils'
import MeIcon from '~/MeIcon/index.vue'

describe('MeIcon', () => {
  test('props name', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIcon, {
      props: { name: 'icon-github' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-icon')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-github')).toBe(true) // 是否存在值
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIcon, {
      props: { name: 'icon-github' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-icon')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
