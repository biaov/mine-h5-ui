import { mount } from '@vue/test-utils'
import MeCheckbox from '~/MeCheckbox/index.vue'
import MeCheckboxGroup from '~/MeCheckboxGroup/index.vue'

describe('MeCheckbox', () => {
  test('props icon', () => {
    const icon = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCheckbox, {
      props: { icon }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-checkbox')

    expect(viewer.exists()).toBeTruthy()

    const iconEl = viewer.find('.me-icon')

    expect(iconEl.exists()).toBeTruthy()
    expect(iconEl.classes()).toContain(icon)
  })

  test('props icon-select', async () => {
    const iconSelect = 'icon-github'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCheckbox, {
      props: { iconSelect, modelValue: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-checkbox .me-icon')

    expect(viewer.classes(iconSelect)).toBe(true)
  })

  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCheckbox, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-checkbox')

    expect(viewer.attributes('data-disabled')).toBe('true')
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCheckbox)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-checkbox')

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})

describe('MeCheckboxGroup', () => {
  const TestComponent = {
    template: `<MeCheckboxGroup>
      <MeCheckbox name="1">1</MeCheckbox>
      <MeCheckbox name="2">2</MeCheckbox>
    </MeCheckboxGroup>`,
    components: {
      MeCheckbox,
      MeCheckboxGroup
    }
  }

  test('props direction', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { direction: 'horizontal' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-checkbox-group')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('inline')).toBe(true)
  })
})
