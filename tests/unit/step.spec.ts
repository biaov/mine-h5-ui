import { mount } from '@vue/test-utils'
import MeStep from '~/MeStep/index.vue'
import MeStepItem from '~/MeStepItem/index.vue'

describe('MeStep', () => {
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

  test('props active', () => {
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { active }
    })
    const viewer = wrapper.find('.me-step') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('horizontal')).toBe(true)

    const itemDom = viewer.find('.me-step-item:first-child')

    expect(itemDom.exists()).toBeTruthy()
    expect(itemDom.classes('active')).toBe(true)
  })

  test('props direction', () => {
    const direction = 'vertical'
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { active, direction }
    })
    const viewer = wrapper.find('.me-step') // 获取 DOM

    expect(viewer.classes(direction)).toBe(true)
  })

  test('props type', () => {
    const type = 'danger'
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { active, type }
    })
    const viewer = wrapper.find('.me-step .me-step-item:first-child') // 获取 DOM

    expect(viewer.classes(type)).toBe(true)
  })
})

describe('MeStepItem', () => {
  test('props name', () => {
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
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { active }
    })
    const viewer = wrapper.find('.me-step') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()

    const itemDom = viewer.find('.me-step-item:first-child')

    expect(itemDom.exists()).toBeTruthy()
    expect(itemDom.classes('active')).toBe(true)
  })
})
