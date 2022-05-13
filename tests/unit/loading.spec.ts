import { mount } from '@vue/test-utils'
import MeLoading from '~/MeLoading/index.vue'

describe('MeLoading', () => {
  test('props type', () => {
    // 向组件里传参
    const wrapper = mount(MeLoading, {
      props: { type: 'circle2' }
    })
    const viewer = wrapper.find('.me-loading') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()

    const useEl = viewer.find('.svg-icon>use')

    expect(useEl.exists()).toBeTruthy()
    expect(useEl.html()).toContain('#icon-Loading')
  })

  test('props icon', () => {
    const icon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeLoading, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-loading .svg-icon>use') // 获取 DOM

    expect(viewer.html()).toContain(`#${icon}`)
  })
})
