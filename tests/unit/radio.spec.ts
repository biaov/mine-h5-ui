import { mount } from '@vue/test-utils'
import MeRadio from '~/MeRadio/index.vue'
import MeRadioGroup from '~/MeRadioGroup/index.vue'

describe('MeRadio 单选框', () => {
  test('属性 shape', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRadio, {
      props: { shape: 'square' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio')

    expect(viewer.exists()).toBeTruthy()

    const iconEl = viewer.find('.iconfont')

    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes('icon-baseline-check_box_outline_blank-px')).toBe(true)
  })

  test('属性 icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRadio, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio .iconfont')

    expect(viewer.classes(icon)).toBe(true)
  })

  test('属性 icon-select', () => {
    const iconSelect = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRadio, {
      props: { modelValue: true, iconSelect }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio .iconfont')

    expect(viewer.classes(iconSelect)).toBe(true)
  })

  test('属性 disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRadio, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio')

    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeRadio)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})

describe('MeRadioGroup 单选框组', () => {
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

  test('属性 direction', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { direction: 'horizontal' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-radio-group')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('inline')).toBe(true)
  })
})
