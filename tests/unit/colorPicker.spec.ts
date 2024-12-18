import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeColorPicker from '~/MeColorPicker/index.vue'
import { presetSize } from '~/MeColorPicker/config'

describe('MeColorPicker 颜色选择器', () => {
  test('组件是否存在', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeColorPicker)

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeColorPicker)
    expect(viewer.exists()).toBeTruthy()
  })
  test('属性 modelValue', async () => {
    const value = 'rgb(34,34,34)'
    const alpha = 50
    const color = value.replace(')', `,${alpha / 100})`)
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeColorPicker, { props: { modelValue: { type: 'rgb', value, alpha } } })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeColorPicker).find(`.${MeColorPicker.name}-inner`)
    const colorVar = getComputedStyle(viewer.element).getPropertyValue('--color')
    expect(colorVar).toBe(color)
  })
  test('属性 size', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeColorPicker, { props: { size: 'large' } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeColorPicker).find(`.${MeColorPicker.name}-inner`)
    expect(viewer.exists()).toBeTruthy()
    const sizeVar = getComputedStyle(viewer.element).getPropertyValue('--size')
    expect(parseInt(sizeVar)).toBe(presetSize.large.size)
  })
  test('属性 showText', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeColorPicker, { props: { showText: true } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeColorPicker).find('.inner-label')
    expect(viewer.exists()).toBeTruthy()
  })
  test('属性 filterText', async () => {
    const text = '测试文案'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeColorPicker, { props: { filterText: () => text, showText: true } })

    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeColorPicker).find('.inner-label')
    expect(viewer.text()).toBe(text)
  })
})
