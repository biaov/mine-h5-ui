import { mount } from '@vue/test-utils'
import MeUpload from '~/MeUpload/index.vue'

describe('MeUpload', () => {
  test('props file-list', () => {
    const url = 'https://dummyimage.com/100x100/4BC7F5/fff&text=1'
    const fileList = [{ id: 1, url }]
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeUpload, {
      props: { fileList }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-upload')

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('.imgs:first-child .img')

    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })

  test('props preview', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeUpload, {
      props: { preview: false }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-upload .preview')

    expect(viewer.exists()).toBe(false)
  })

  test('props multiple', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeUpload, {
      props: { multiple: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-upload .upload .file')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.attributes('multiple')).toBeDefined()
  })

  test('props deletable', () => {
    const url = 'https://dummyimage.com/100x100/4BC7F5/fff&text=1'
    const fileList = [{ id: 1, url }]
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeUpload, {
      props: { fileList, deletable: false }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-upload .imgs:first-child .iconfont')

    expect(viewer.exists()).toBe(false)
  })

  test('props disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeUpload, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-upload')

    expect(viewer.attributes('data-disabled')).toBe('true')
  })
})
