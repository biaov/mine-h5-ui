import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeGuide from '~/MeGuide/index.vue'

describe('MeGuide 引导', () => {
  const list = ['https://dummyimage.com/750x1334/f60/fff&text=1', 'https://dummyimage.com/750x1334/f60/fff&text=1']

  test('属性 visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeGuide, {
      props: { visible: true, list }
    })

    const viewer = getViewer(wrapper, MeGuide)

    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 list', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeGuide, {
      props: { visible: true, list }
    })

    const viewer = getViewer(wrapper, MeGuide)

    await viewer.trigger('click')
    expect(viewer.html().includes('https')).toBe(true)
  })

  test('事件 step', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeGuide, {
      props: { visible: true, list }
    })

    const viewer = getViewer(wrapper, MeGuide).find('.img')
    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')
    expect(wrapper.emitted('step')).toBeDefined()
  })

  test('事件 finish', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeGuide, {
      props: { visible: true, list }
    })

    const viewer = getViewer(wrapper, MeGuide).find('.img')

    await viewer.trigger('click')
    await viewer.trigger('click')
    expect(wrapper.emitted('finish')).toBeDefined()
  })

  test('事件 update:visible', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeGuide, {
      props: { visible: true, list }
    })

    const viewer = getViewer(wrapper, MeGuide).find('.img')

    await viewer.trigger('click')
    await viewer.trigger('click')
    expect(wrapper.emitted('update:visible')).toBeDefined()
  })
})
