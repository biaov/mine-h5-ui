import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeSkeleton from '~/MeSkeleton/index.vue'

describe('MeSkeleton 骨架屏', () => {
  test('属性 visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSkeleton, {
      props: { visible: true }
    })

    const viewer = getViewer(wrapper, MeSkeleton)

    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 active', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSkeleton, {
      props: { visible: true, active: true }
    })

    const viewer = getViewer(wrapper, MeSkeleton)
    expect(viewer.classes('active')).toBeTruthy()
  })

  test('属性 title', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSkeleton, {
      props: { visible: true, title: true }
    })

    const viewer = getViewer(wrapper, MeSkeleton).find('.me-skeleton-title')
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 row', async () => {
    const row = 4
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSkeleton, {
      props: { visible: true, row }
    })

    const viewer = getViewer(wrapper, MeSkeleton).findAll('.me-skeleton-item')
    expect(viewer.length).toBe(row)
  })

  test('属性 avatar', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSkeleton, {
      props: { visible: true, avatar: true }
    })

    const viewer = getViewer(wrapper, MeSkeleton).find('.me-skeleton-avatar')
    expect(viewer.exists()).toBeTruthy()
  })
})
