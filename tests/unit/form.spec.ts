import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeForm from '~/MeForm/index.vue'

describe('MeForm 表单', () => {
  test('事件 submit', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeForm)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeForm)

    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('submit')

    expect(wrapper.emitted('submit')).toBeDefined()
  })
})
