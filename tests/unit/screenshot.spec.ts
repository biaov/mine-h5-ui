import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeScreenshot from '~/MeScreenshot/index.vue'

describe('MeScreenshot 截长图', () => {
  test('属性 start', () => {
    const testText = '测试文本内容'
    const TestComponent = {
      template: `<MeScreenshot>${testText}</MeScreenshot>`,
      components: {
        MeScreenshot
      }
    }
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent, {
      props: { start: false }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeScreenshot)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(testText)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeScreenshot)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeScreenshot)

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })
})
