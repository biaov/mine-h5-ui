import { mount } from '@vue/test-utils'
import MeToast from '~/MeToast/index.vue'

describe('MeToast', () => {
  test('props message', () => {
    const message = '提示语'
    // 向组件里传参
    const wrapper = mount(MeToast, {
      props: { message }
    })
    const viewer = wrapper.find('.me-toast') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()

    const messageEl = wrapper.find('span') // 获取 DOM

    expect(messageEl.exists()).toBeTruthy()
    expect(messageEl.text()).toBe(message)
  })

  test('props icon', () => {
    const icon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeToast, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-toast .iconfont') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(icon)).toBe(true)
  })
})
