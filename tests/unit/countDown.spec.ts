import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeCountDown from '~/MeCountDown/index.vue'

describe('MeCountDown', () => {
  const time = 2 * 60 * 60 * 1000

  test('props time', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-down')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text().replace(/\s+/g, '')).toBe('02时00分00秒')
  })

  test('props format', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time, format: 'DD:hh:mm:ss:ms' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-count-down')

    expect(viewer.text().replace(/\s+/g, '')).toBe('00天02时00分00秒0毫秒')
  })

  test('emit progress', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time: 1000 }
    })

    await Retarder(1500)

    expect(wrapper.emitted('progress')).toBeDefined()
  })

  test('emit end', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time: 1000 }
    })

    await Retarder(2400)

    expect(wrapper.emitted('end')).toBeDefined()
  })
})
