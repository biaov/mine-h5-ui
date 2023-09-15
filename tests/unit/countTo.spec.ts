import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeCountTo from '~/MeCountTo/index.vue'

describe('MeCountTo 数字滚动', () => {
  const endValue = 1000

  test('属性 end-value', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountTo, {
      props: { endValue }
    })

    await Retarder(2000)

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-to')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text()).toBe(`${endValue}`)
  })

  test('属性 start-value', () => {
    const startValue = 100
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountTo, {
      props: { endValue, modelValue: false, startValue }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-to')

    expect(viewer.text()).toBe(`${startValue}`)
  })

  test('属性 duration', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountTo, {
      props: { endValue, duration: 2000 }
    })

    await Retarder(2500)

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-to')

    expect(viewer.text()).toBe(`${endValue}`)
  })

  test('属性 thousand', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountTo, {
      props: { endValue, thousand: true }
    })

    await Retarder(2000)

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-to')

    expect(viewer.text()).toBe('1,000')
  })

  test('事件 end', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountTo, {
      props: { endValue }
    })

    await Retarder(2000)

    expect(wrapper.emitted('end')).toBeDefined()
  })
})
