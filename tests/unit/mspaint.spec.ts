import { mount } from '@vue/test-utils'
import MeMspaint from '~/MeMspaint/index.vue'

describe('MeMspaint', () => {
  const visible = false
  test('props width', () => {
    const width = '300'
    // 向组件里传参
    const wrapper = mount(MeMspaint, {
      props: { visible, width: `${width}px` }
    })
    const viewer = wrapper.find('.me-mspaint') // 获取 DOM
    expect(viewer.attributes('width')).toBe(width)
  })
  test('props height', () => {
    const height = '300'
    // 向组件里传参
    const wrapper = mount(MeMspaint, {
      props: { visible, height: `${height}px` }
    })
    const viewer = wrapper.find('.me-mspaint') // 获取 DOM
    expect(viewer.attributes('height')).toBe(height)
  })
  test('props background', () => {
    const background = 'rgb(255,102,0)'
    // 向组件里传参
    const wrapper = mount(MeMspaint, {
      props: { visible, background }
    })
    const viewer = wrapper.find('.me-mspaint') // 获取 DOM
    let htmlValue = ''
    viewer
      .attributes('style')
      ?.replace(/\s*/g, '')
      ?.split(';')
      ?.forEach(item => {
        const [prop, value] = item.split(':')
        prop === 'background' && (htmlValue = value)
      })
    expect(htmlValue).toBe(background)
  })
})
