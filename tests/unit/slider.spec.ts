import { mount } from '@vue/test-utils'
import MeSlider from '~/MeSlider/index.vue'

describe('MeSlider', () => {
  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSlider, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-slider')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('props is-btn', () => {
    const TestComponent = {
      template: `<MeSlider><button class="btn-custom"></button></MeSlider>`,
      components: {
        MeSlider
      }
    }
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { isBtn: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-slider .btn-custom')

    expect(viewer.exists()).toBeTruthy()
  })
})
