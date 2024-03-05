import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeLoading from '~/MeLoading/index.vue'

describe('MeLoading 加载', () => {
  test('是否存在', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeLoading, {
      props: {}
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeLoading)

    expect(viewer.exists()).toBeTruthy()
  })
})
