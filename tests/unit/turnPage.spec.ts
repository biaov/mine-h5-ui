import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import TurnPage from '~/MeTurnPage/index.vue'

describe('TurnPage 仿真翻页', () => {
  test('属性 type', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(TurnPage, {
      props: { type: 'number' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePassword)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('me-password-number')).toBe(true)
  })
})
