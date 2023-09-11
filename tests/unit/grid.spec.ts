import { mount } from '@vue/test-utils'
import MeGrid from '~/MeGrid/index.vue'
import MeGridItem from '~/MeGridItem/index.vue'

describe('MeGrid', () => {
  const TestComponent = {
    template: `<MeGrid :cols="3">
      <MeGridItem></MeGridItem>
      <MeGridItem></MeGridItem>
      <MeGridItem></MeGridItem>
      <MeGridItem></MeGridItem>
    </MeGrid>`,
    components: {
      MeGrid,
      MeGridItem
    }
  }

  test('props cols', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-grid')

    expect(viewer.exists()).toBeTruthy()

    const viewerItemEl = viewer.find('.me-grid-item:first-child')

    expect(viewerItemEl.exists()).toBeTruthy()
    expect(viewerItemEl.html()).toContain(`${100 / 3}`)
  })
})

describe('MeGridItem', () => {
  const TestComponent = {
    template: '',
    components: {
      MeGrid,
      MeGridItem
    }
  }

  test('props icon', () => {
    TestComponent.template = `<MeGrid>
      <MeGridItem icon="icon-github"></MeGridItem>
      <MeGridItem icon="icon-github"></MeGridItem>
      <MeGridItem icon="icon-github"></MeGridItem>
      <MeGridItem icon="icon-github"></MeGridItem>
    </MeGrid>`
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-grid-item .iconfont')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('icon-github')).toBe(true)
  })

  test('props text', () => {
    const testText = '测试文本'
    TestComponent.template = `<MeGrid>
      <MeGridItem text="${testText}"></MeGridItem>
      <MeGridItem text="${testText}"></MeGridItem>
      <MeGridItem text="${testText}"></MeGridItem>
      <MeGridItem text="${testText}"></MeGridItem>
    </MeGrid>`
    /**
     * 向组件里传参
     */
    const wrapper = mount(TestComponent)
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-grid-item')
    const descEl = viewer.find('.desc')

    expect(descEl.exists()).toBeTruthy()
    expect(descEl.text()).toBe(testText)
  })
})
