import { mount } from '@vue/test-utils'
import MePreview from '~/MePreview/index.vue'

describe('MePreview', () => {
  test('props url', () => {
    const url = 'https://dummyimage.com/100x100/f60/fff'
    // 向组件里传参
    const wrapper = mount(MePreview, {
      props: { url }
    })
    const viewer = wrapper.find('.me-preview') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const imgEl = viewer.find('.u-img')
    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })
})
