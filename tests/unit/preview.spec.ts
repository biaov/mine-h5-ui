import { mount } from '@vue/test-utils'
import MePreview from '~/MePreview/index.vue'

describe('MePreview', () => {
  test('props url', () => {
    const url = 'https://dummyimage.com/100x100/f60/fff'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePreview, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-preview')

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('.img')

    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })
})
