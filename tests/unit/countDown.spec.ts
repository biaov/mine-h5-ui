import { mount } from '@vue/test-utils'
import { Retarder, getViewer } from '@/utils/functions'
import MeCountDown from '~/MeCountDown/index.vue'

describe('MeCountDown 倒计时', () => {
  const time = 2 * 60 * 60 * 1000

  test('属性 time', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCountDown)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.text().replace(/\s+/g, '')).toBe('02时00分00秒')
  })

  test('属性 format', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time, format: 'DD:hh:mm:ss:ms' }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCountDown)

    expect(viewer.text().replace(/\s+/g, '')).toBe('00天02时00分00秒0毫秒')
  })

  test('事件 progress', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCountDown, {
      props: { time: 1000 }
    })

    await Retarder(1500)

    expect(wrapper.emitted('progress')).toBeDefined()
  })

  test('事件 end', async () => {
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
