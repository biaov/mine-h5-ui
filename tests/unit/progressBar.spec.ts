import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeProgressBar from '~/MeProgressBar/index.vue'

describe('MeProgressBar 进度条', () => {
  const modelValue = 0

  test('属性 type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, type: 'circle' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeProgressBar)

    expect(viewer.exists()).toBeTruthy()

    const circleEl = viewer.find('.circle')

    expect(circleEl.exists()).toBeTruthy()
  })

  test('属性 text', () => {
    const text = '测试文本'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, text }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-progress-bar .line .txt')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })

  test('属性 text-show', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeProgressBar, {
      props: { modelValue, textShow: false }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-progress-bar .line .txt')

    expect(viewer.exists()).toBeFalsy()
  })
})
