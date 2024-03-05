import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeDrag from '~/MeDrag/index.vue'

describe('MeDrag 拖拽', () => {
  const url = 'https://biaov.cn/logo.svg'
  const list = [
    {
      rect: {
        w: 100,
        h: 100,
        x: 0,
        y: 0,
        r: 0
      },
      url
    },
    {
      rect: {
        w: 80,
        h: 80,
        x: 110,
        y: 110,
        r: 0
      },
      url
    }
  ]

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDrag, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDrag)

    expect(viewer.exists()).toBeTruthy()

    const items = wrapper.findAll('.item')

    expect(items.length).toBe(list.length)
  })

  test('属性 current', () => {
    const current = 0
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeDrag, {
      props: { list, current }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeDrag).find(`.item:first-child`)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('active')).toBe(true)
  })
})
