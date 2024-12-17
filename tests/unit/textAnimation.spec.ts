import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeTextAnimation from '~/MeTextAnimation/index.vue'

describe('MeTextAnimation 对话框', () => {
  const text = '演示'

  test('属性 text', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation)
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toContain(text)
  })

  test('属性 type', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text, type: 'border' } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation).find('.border')
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 size', async () => {
    const size = 40
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text, size } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation)
    const sizeVar = getComputedStyle(viewer.element).getPropertyValue('--size')
    expect(parseInt(sizeVar)).toBe(size)
  })

  test('属性 family', async () => {
    const family = 'cursive'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text, family } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation)
    const familyVar = getComputedStyle(viewer.element).getPropertyValue('--family')
    expect(familyVar).toBe(family)
  })
  test('属性 color', async () => {
    const color = '#f60'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text, color } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation)
    const colorVar = getComputedStyle(viewer.element).getPropertyValue('--color')
    expect(colorVar).toBe(color)
  })
  test('属性 background', async () => {
    const background = '#f60'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextAnimation, { props: { text, background } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextAnimation)
    const backgroundVar = getComputedStyle(viewer.element).getPropertyValue('--background')
    expect(backgroundVar).toBe(background)
  })
})
