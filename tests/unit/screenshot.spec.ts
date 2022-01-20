import { mount } from '@vue/test-utils'
import MeScreenshot from '~/MeScreenshot/index.vue'

describe('MeScreenshot', () => {
  test('props start', () => {
    const testText = '测试文本内容'
    const TestComponent = {
      template: `<MeScreenshot>${testText}</MeScreenshot>`,
      components: {
        MeScreenshot
      }
    }
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { start: false }
    })
    const viewer = wrapper.find('.me-screenshot') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(testText)
  })
  test('emit on-click', async () => {
    // 向组件里传参
    const wrapper = mount(MeScreenshot)
    const viewer = wrapper.find('.me-screenshot') // 获取 DOM
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click')).toBeDefined()
  })
})
