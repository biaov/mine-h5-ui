import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeMspaint from '~/MeMspaint/index.vue'

describe('MeMspaint 画图', () => {
  const visible = false
  test('属性 width', () => {
    const width = '300'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMspaint, {
      props: { visible, width: `${width}px` }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeMspaint)
    expect(viewer.attributes('width')).toBe(width)
  })
  test('属性 height', () => {
    const height = '300'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMspaint, {
      props: { visible, height: `${height}px` }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeMspaint)
    expect(viewer.attributes('height')).toBe(height)
  })
  test('属性 background', () => {
    const background = 'rgb(255,102,0)'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMspaint, {
      props: { visible, background }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeMspaint)
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
