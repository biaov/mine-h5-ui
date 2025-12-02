import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MePagination from '~/MePagination/index.vue'
import { name } from '~/MePagination/config'

describe('MePagination 分页器', () => {
  test('属性 model-value', async () => {
    const modelValue = 2
    const total = 100
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { modelValue, total }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    expect(viewer.exists()).toBeTruthy()
    const activeNode = viewer.find(`.${name}__item--active`)
    expect(activeNode.exists()).toBeTruthy()
    expect(+activeNode.text()).toBe(modelValue)
  })

  test('属性 total', async () => {
    const total = 11
    const totalPage = Math.ceil(total / 10) + 2
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { total }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const itemNodes = viewer.findAll(`.${name}__item`)
    expect(itemNodes.length).toBe(totalPage)
  })

  test('属性 page-size', async () => {
    const total = 11
    const pageSize = 20
    const totalPage = Math.ceil(total / pageSize) + 2
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { total, pageSize }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const itemNodes = viewer.findAll(`.${name}__item`)
    expect(itemNodes.length).toBe(totalPage)
  })

  test('属性 mode', async () => {
    const total = 11
    const totalPage = Math.ceil(total / 10)
    const mode = 'simple'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { total, mode }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const simpleNode = viewer.find(`.${name}__item--${mode}`)
    expect(simpleNode.text()).toBe(`1/${totalPage}`)
  })

  test('属性 ellipsis', async () => {
    const total = 100
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { total, ellipsis: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const ellipsisNode = viewer.find(`.${name}__item:nth-child(6)`)
    expect(ellipsisNode.text()).toBe('···')
  })

  test('属性 prev-text', async () => {
    const prevText = '<'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { prevText }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const prevNode = viewer.find(`.${name}__item--prev`)
    expect(prevNode.text()).toBe(prevText)
  })

  test('属性 next-text', async () => {
    const nextText = '>'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { nextText }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const nextNode = viewer.find(`.${name}__item--next`)
    expect(nextNode.text()).toBe(nextText)
  })

  test('属性 disabled', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      props: { disabled: true }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    expect(viewer.classes(`${name}--disabled`)).toBeTruthy()
  })

  test('插槽 prev', async () => {
    const prev = '<'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      slots: { prev }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const prevNode = viewer.find(`.${name}__item--prev`)
    expect(prevNode.text()).toBe(prev)
  })

  test('插槽 next', async () => {
    const next = '>'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MePagination, {
      slots: { next }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MePagination)
    const prevNode = viewer.find(`.${name}__item--next`)
    expect(prevNode.text()).toBe(next)
  })
})
