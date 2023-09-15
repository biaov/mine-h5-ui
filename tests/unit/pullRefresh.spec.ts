import { mount } from '@vue/test-utils'
import MePullRefresh from '~/MePullRefresh/index.vue'

describe('MePullRefresh 下拉刷新', () => {
  const modelValue = true

  test('属性 load-text', () => {
    const text = '测试文本内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePullRefresh, {
      props: { modelValue, loadText: [text] }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-pull-refresh')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })
})
