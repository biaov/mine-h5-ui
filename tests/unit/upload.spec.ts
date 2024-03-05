import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeUpload from '~/MeUpload/index.vue'

describe('MeUpload 上传', () => {
  test('属性 file-list', () => {
    const url = 'https://biaov.cn/logo.svg'
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
    const viewer = getViewer(wrapper, MeUpload)

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('.imgs:first-child .img')

    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })

  test('属性 preview', () => {
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

  test('属性 multiple', () => {
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

  test('属性 deletable', () => {
    const url = 'https://biaov.cn/logo.svg'
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

  test('属性 disabled', () => {
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
