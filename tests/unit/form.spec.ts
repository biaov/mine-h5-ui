import { mount } from '@vue/test-utils'
import MeForm from '~/MeForm/index.vue'

describe('MeForm', () => {
  test('emit on-submit', async () => {
    // 向组件里传参
    const wrapper = mount(MeForm)
    const viewer = wrapper.find('.me-form') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    await viewer.trigger('submit')
    expect(wrapper.emitted('on-submit')).toBeDefined()
  })
})
