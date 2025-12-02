import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeStepper from '~/MeStepper/index.vue'

describe('MeStepper 步进器', () => {
  test('属性 modelValue', async () => {
    const modelValue = 100
    const wrapper = mount(MeStepper, {
      props: { modelValue }
    })
    const viewer = getViewer(wrapper, MeStepper)
    const inputEl = viewer.find('input')

    expect(viewer.exists()).toBeTruthy()
    expect(inputEl.exists()).toBeTruthy()
    expect(+inputEl.element.value).toBe(modelValue)
  })

  test('属性 max', async () => {
    const max = 9
    const wrapper = mount(MeStepper, {
      props: { modelValue: 100, max }
    })
    const inputEl = getViewer(wrapper, MeStepper).find('input')

    expect(+inputEl.element.value).toBe(max)
  })

  test('属性 min', async () => {
    const min = 9
    const wrapper = mount(MeStepper, {
      props: { modelValue: 8, min }
    })
    const inputEl = getViewer(wrapper, MeStepper).find('input')

    expect(+inputEl.element.value).toBe(min)
  })

  test('属性 step', async () => {
    const step = 2
    const wrapper = mount(MeStepper, {
      props: { step }
    })
    const viewer = getViewer(wrapper, MeStepper)
    const inputEl = viewer.find('input')
    const plusBtn = viewer.find('.button:nth-child(3)')

    await plusBtn.trigger('click')

    expect(+inputEl.element.value).toBe(step + 1)
  })

  test('属性 height', async () => {
    const height = '40px'
    const wrapper = mount(MeStepper, {
      props: { height }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('height')).toBe(height)
  })

  test('属性 input-width', async () => {
    const inputWidth = '40px'
    const wrapper = mount(MeStepper, {
      props: { inputWidth }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--input-width')).toBe(inputWidth)
  })

  test('属性 color', async () => {
    const color = '#f60'
    const wrapper = mount(MeStepper, {
      props: { color }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--color')).toBe(color)
  })

  test('属性 border-color', async () => {
    const borderColor = '#f60'
    const wrapper = mount(MeStepper, {
      props: { borderColor }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--border-color')).toBe(borderColor)
  })

  test('属性 disabled-color', async () => {
    const disabledColor = '#f60'
    const wrapper = mount(MeStepper, {
      props: { disabledColor }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--disabled-color')).toBe(disabledColor)
  })

  test('属性 border-radius', async () => {
    const borderRadius = '10px'
    const wrapper = mount(MeStepper, {
      props: { borderRadius }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--border-radius')).toBe(borderRadius)
  })

  test('属性 font-size', async () => {
    const fontSize = '10px'
    const wrapper = mount(MeStepper, {
      props: { fontSize }
    })
    const viewer = getViewer(wrapper, MeStepper)

    expect(getComputedStyle(viewer.element).getPropertyValue('--font-size')).toBe(fontSize)
  })
})
