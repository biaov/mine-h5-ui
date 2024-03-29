import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeDivider from '~/MeDivider/index.vue'

describe('MeDivider 分割线', () => {
  test('属性 list', () => {
    const list = ['缥缈']
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDivider, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDivider)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(list[0])
  })
})
