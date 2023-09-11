import { mount } from '@vue/test-utils'
import MeForm from '~/MeForm/index.vue'

describe('MeForm', () => {
  test('emit submit', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeForm)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-form')

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('submit')

    expect(wrapper.emitted('submit')).toBeDefined()
  })
})
