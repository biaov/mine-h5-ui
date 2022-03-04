import { mount } from '@vue/test-utils'
import MeDrag from '~/MeDrag/index.vue'

describe('MeDrag', () => {
  const list = [
    {
      rect: {
        w: 100,
        h: 100,
        x: 0,
        y: 0,
        r: 0
      }
    },
    {
      rect: {
        w: 80,
        h: 80,
        x: 110,
        y: 110,
        r: 0
      }
    }
  ]

  test('props list', () => {
    // 向组件里传参
    const wrapper = mount(MeDrag, {
      props: { list }
    })
    const viewer = wrapper.find('.me-drag') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
    const items = wrapper.findAll('.item')
    expect(items.length).toBe(list.length)
  })

  test('props current', () => {
    const current = 0
    // 向组件里传参
    const wrapper = mount(MeDrag, {
      props: { list, current }
    })
    const viewer = wrapper.find(`.me-drag .item:first-child`) // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('active')).toBe(true)
  })
})
