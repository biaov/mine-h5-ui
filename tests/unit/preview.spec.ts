import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MePreview from '~/MePreview/index.vue'

describe('MePreview 图片预览', () => {
  test('属性 url', () => {
    const url = 'https://biaov.cn/logo.svg'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePreview, {
      props: { url }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePreview)

    expect(viewer.exists()).toBeTruthy()

    const imgEl = viewer.find('.img')

    expect(imgEl.exists()).toBeTruthy()
    expect(imgEl.attributes('src')).toBe(url)
  })
})
