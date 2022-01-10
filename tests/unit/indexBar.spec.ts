import { mount } from '@vue/test-utils'
import MeIndexBar from '~/MeIndexBar/index.vue'

describe('MeIndexBar', () => {
  const list = [
    {
      name: 'A',
      cities: [
        { code: 'AR', en: 'Argentina', cn: '阿根廷' },
        { code: 'AD', en: 'Andorra', cn: '安道尔' },
        { code: 'AE', en: 'United Arab Emirates', cn: '阿联酋' }
      ]
    }
  ]
  test('props list', () => {
    // 向组件里传参
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-index-bar') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    const listRightEl = viewer.findAll('.m-list-rt>li')
    expect(listRightEl.length > 0).toBeTruthy()
    const listContEl = viewer.findAll('.m-list-cont>li')
    expect(listContEl.length > 0).toBeTruthy()
  })
  test('emit on-click', async () => {
    // 向组件里传参
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    const viewer = wrapper.find('.me-index-bar .m-list-cont>li:first-child .m-list-item>dd:first-of-type') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    await viewer.trigger('click')
    expect(wrapper.emitted('on-click')).toBeTruthy()
  })
})
