import { mount } from '@vue/test-utils'
import MeRadio from '~/MeRadio/index.vue'
import MeRadioGroup from '~/MeRadioGroup/index.vue'

describe('MeRadio', () => {
  test('props shape', () => {
    // 向组件里传参
    const wrapper = mount(MeRadio, {
      props: { shape: 'square' }
    })
    const viewer = wrapper.find('.me-radio') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const iconEl = viewer.find('.iconfont')
    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes('icon-baseline-check_box_outline_blank-px')).toBe(true)
  })
  test('props icon', () => {
    const icon = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeRadio, {
      props: { icon }
    })
    const viewer = wrapper.find('.me-radio .iconfont') // 获取 DOM
    expect(viewer.classes(icon)).toBe(true)
  })
  test('props iconSelect', () => {
    const iconSelect = 'icon-github'
    // 向组件里传参
    const wrapper = mount(MeRadio, {
      props: { modelValue: true, iconSelect }
    })
    const viewer = wrapper.find('.me-radio .iconfont') // 获取 DOM
    expect(viewer.classes(iconSelect)).toBe(true)
  })
  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeRadio, {
      props: { disabled: true }
    })
    const viewer = wrapper.find('.me-radio') // 获取 DOM
    expect(viewer.attributes('data-disabled')).toBe('true')
  })
  test('emit on-click', async () => {
    // 向组件里传参
    const wrapper = mount(MeRadio)
    const viewer = wrapper.find('.me-radio') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click')).toBeDefined()
  })
})

describe('MeRadioGroup', () => {
  const TestComponent = {
    template: `<MeRadioGroup>
      <MeRadio name="1">1</MeRadio>
      <MeRadio name="2">2</MeRadio>
    </MeRadioGroup>`,
    components: {
      MeRadio,
      MeRadioGroup
    }
  }
  test('props direction', () => {
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { direction: 'horizontal' }
    })
    const viewer = wrapper.find('.me-radio-group') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('inline')).toBe(true)
  })
})
