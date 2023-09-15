import { mount } from '@vue/test-utils'
import MeToast from '~/MeToast/index.vue'

describe('MeToast 消息提示', () => {
  test('属性 message', () => {
    const message = '提示语'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeToast, {
      props: { message }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-toast')

    expect(viewer.exists()).toBeTruthy()

    const messageEl = wrapper.find('span')

    expect(messageEl.exists()).toBeTruthy()
    expect(messageEl.text()).toBe(message)
  })

  test('属性 icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeToast, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-toast .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })
})
