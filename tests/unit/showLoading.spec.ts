import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeShowLoading from '~/MeShowLoading/index.vue'

describe('MeShowLoading 消息提示', () => {
  test('属性 message', async () => {
    const message = '提示语'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeShowLoading, {
      props: { message, visible: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeShowLoading)

    expect(viewer.exists()).toBeTruthy()

    const messageEl = wrapper.find('.text')

    expect(messageEl.exists()).toBeTruthy()
    expect(messageEl.text()).toBe(message)
  })
})
