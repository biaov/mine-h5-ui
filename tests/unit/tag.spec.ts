import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeTag from '~/MeTag/index.vue'

describe('MeTag 标签', () => {
  test('属性 type', () => {
    const type = 'success'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTag, {
      props: { type }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTag)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes(type)).toBe(true)
  })

  test('属性 plain', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTag, {
      props: { plain: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTag)

    expect(viewer.classes('plain')).toBe(true)
  })

  test('属性 text', () => {
    const text = '测试文本'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTag, {
      props: { text }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-tag .txt>span')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(text)
  })

  test('属性 closeable', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTag, {
      props: { closeable: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-tag .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-baseline-close-px')).toBe(true)
  })

  test('事件 close', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTag, {
      props: { closeable: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-tag .iconfont')

    await viewer.trigger('click')

    expect(wrapper.emitted('close')).toBeDefined()
  })
})
