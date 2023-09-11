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
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-index-bar')

    expect(viewer.exists()).toBeTruthy()

    const listRightEl = viewer.findAll('.list-rt>li')

    expect(listRightEl.length > 0).toBeTruthy()

    const listContEl = viewer.findAll('.list-cont>li')

    expect(listContEl.length > 0).toBeTruthy()
  })

  test('emit click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-index-bar .list-cont>li:first-child .list-item>dd:first-of-type')
    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
