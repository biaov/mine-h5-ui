import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeTextarea from '~/MeTextarea/index.vue'
import { name } from '~/MeTextarea/config'

describe('MeTextarea 文本域', () => {
  test('属性 model-value', () => {
    const modelValue = '测试'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea)
    expect(viewer.exists()).toBeTruthy()

    const textarea = viewer.find<HTMLTextAreaElement>('.textarea')
    expect(textarea.element.value).toBe(modelValue)
  })

  test('属性 cols', () => {
    const cols = 4
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { cols }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find<HTMLTextAreaElement>('.textarea')
    expect(+viewer.attributes('cols')!).toBe(cols)
  })

  test('属性 rows', () => {
    const rows = 4
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { rows }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    expect(+viewer.attributes('rows')!).toBe(rows)
  })

  test('属性 placeholder', () => {
    const placeholder = '测试占位符'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { placeholder }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    expect(viewer.attributes('placeholder')).toBe(placeholder)
  })

  test('属性 readonly', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { readonly: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    expect(viewer.attributes('readonly')).toBeDefined()
  })

  test('属性 disabled', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    expect(viewer.attributes('disabled')).toBeDefined()
  })

  test('属性 maxlength', async () => {
    const modelValue = '测试最大值'
    const maxlength = 2
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { maxlength, modelValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find<HTMLTextAreaElement>('.textarea')
    expect(viewer.element.value).toBe(modelValue.slice(0, maxlength))
  })

  test('属性 show-count', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea, {
      props: { showCount: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find(`.${name}__count`)
    expect(viewer.exists()).toBeTruthy()
  })

  test('事件 focus', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    await viewer.trigger('focus')

    expect(wrapper.emitted('focus')).toBeDefined()
  })

  test('事件 blur', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    await viewer.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
  })

  test('事件 change', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    await viewer.trigger('change')

    expect(wrapper.emitted('change')).toBeDefined()
  })

  test('事件 input', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeTextarea)
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeTextarea).find('.textarea')

    await viewer.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
  })
})
