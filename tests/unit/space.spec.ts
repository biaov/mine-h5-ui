import { createVNode } from 'vue'
import { mount } from '@vue/test-utils'
import { getViewer, Retarder } from '@/utils/functions'
import MeSpace from '~/MeSpace/index.vue'

describe('MeSpace 间距', () => {
  const slots = { default: createVNode('div') }

  test('属性 size', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSpace, {
      props: { size: '20px' },
      slots
    })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSpace)
    expect(viewer.exists()).toBeTruthy()
  })

  test('属性 direction', async () => {
    const direction = 'vertical'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeSpace, {
      props: { direction },
      slots
    })
    await Retarder()
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeSpace)
    expect(viewer.classes(direction)).toBeTruthy()
  })
})
