import { mount } from '@vue/test-utils'
import MeUpload from '~/MeUpload/index.vue'

describe('MeUpload', () => {
  test('props fileList', () => {
    const url = 'https://dummyimage.com/100x100/4BC7F5/fff&text=1'
    const fileList = [{ id: 1, url }]
    // 向组件里传参
    const wrapper = mount(MeUpload, {
      props: { fileList }
    })
    const viewer = wrapper.find('.me-upload') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const imgEl = viewer.find('.m-imgs:first-child .u-img')
    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })
  test('props preview', () => {
    // 向组件里传参
    const wrapper = mount(MeUpload, {
      props: { preview: false }
    })
    const viewer = wrapper.find('.me-upload .m-preview') // 获取 DOM
    expect(viewer.exists()).toBe(false)
  })
  test('props multiple', () => {
    // 向组件里传参
    const wrapper = mount(MeUpload, {
      props: { multiple: true }
    })
    const viewer = wrapper.find('.me-upload .m-upload .u-file') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('multiple')).toBeDefined()
  })
  test('props deletable', () => {
    const url = 'https://dummyimage.com/100x100/4BC7F5/fff&text=1'
    const fileList = [{ id: 1, url }]
    // 向组件里传参
    const wrapper = mount(MeUpload, {
      props: { fileList, deletable: false }
    })
    const viewer = wrapper.find('.me-upload .m-imgs:first-child .iconfont') // 获取 DOM
    expect(viewer.exists()).toBe(false)
  })
  test('props disabled', () => {
    // 向组件里传参
    const wrapper = mount(MeUpload, {
      props: { disabled: true }
    })
    const viewer = wrapper.find('.me-upload') // 获取 DOM
    expect(viewer.attributes('data-disabled')).toBe('true')
  })
})
