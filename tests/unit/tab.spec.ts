import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeTab from '~/MeTab/index.vue'
import MeTabItem from '~/MeTabItem/index.vue'

const modelValue = 0
describe('MeTab', () => {
  test('exists', () => {
    // 向组件里传参
    const wrapper = mount(MeTab, {
      props: { modelValue }
    })
    const viewer = wrapper.find('.me-tab') // 获取 DOM

    expect(viewer.exists()).toBeTruthy()
  })
})

describe('MeTabItem', () => {
  test('props label', async () => {
    const TestComponent = {
      template: `<MeTab>
        <MeTabItem name="1" label="1"></MeTabItem>
        <MeTabItem name="2" label="2"></MeTabItem>
      </MeTab>`,
      components: {
        MeTab,
        MeTabItem
      }
    }
    // 向组件里传参
    const wrapper = mount(TestComponent, {
      props: { modelValue }
    })

    await Retarder(0)

    const viewer = wrapper.find('.me-tab') // 获取 DOM
    const labelEl = viewer.find('.tabs .tab-item:first-child')

    expect(labelEl.exists()).toBeTruthy()
    expect(labelEl.text()).toBe('1')

    const tabItemEl = viewer.find('.me-tab-item:last-child')

    expect(tabItemEl.exists()).toBeTruthy()
  })
})
