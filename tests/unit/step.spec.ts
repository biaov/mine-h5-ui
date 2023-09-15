import { mount } from '@vue/test-utils'
import MeStep from '~/MeStep/index.vue'
import MeStepItem from '~/MeStepItem/index.vue'

describe('MeStep 步骤条', () => {
  const TestComponent = {
    template: `<MeStep>
      <MeStepItem name="first"></MeStepItem>
      <MeStepItem name="second"></MeStepItem>
    </MeStep>`,
    components: {
      MeStep,
      MeStepItem
    }
  }
  const active = ['first']

  test('属性 active', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { active }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-step')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('horizontal')).toBe(true)

    const itemDom = viewer.find('.me-step-item:first-child')

    expect(itemDom.exists()).toBeTruthy()
    expect(itemDom.classes('active')).toBe(true)
  })

  test('属性 direction', () => {
    const direction = 'vertical'
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { active, direction }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-step')

    expect(viewer.classes(direction)).toBe(true)
  })

  test('属性 type', () => {
    const type = 'danger'
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { active, type }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-step .me-step-item:first-child')

    expect(viewer.classes(type)).toBe(true)
  })
})

describe('MeStepItem', () => {
  test('属性 name', () => {
    const TestComponent = {
      template: `<MeStep>
        <MeStepItem name="first"></MeStepItem>
        <MeStepItem name="second"></MeStepItem>
      </MeStep>`,
      components: {
        MeStep,
        MeStepItem
      }
    }
    const active = ['first']
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { active }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-step')

    expect(viewer.exists()).toBeTruthy()

    const itemDom = viewer.find('.me-step-item:first-child')

    expect(itemDom.exists()).toBeTruthy()
    expect(itemDom.classes('active')).toBe(true)
  })
})
