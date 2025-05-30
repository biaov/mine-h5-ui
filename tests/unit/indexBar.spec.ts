import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeIndexBar from '~/MeIndexBar/index.vue'

describe('MeIndexBar 索引栏', () => {
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

  test('属性 list', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeIndexBar)

    expect(viewer.exists()).toBeTruthy()

    const listRightEl = viewer.findAll('.list-rt>li')

    expect(listRightEl.length > 0).toBeTruthy()

    const listContEl = viewer.findAll('.list-cont>li')

    expect(listContEl.length > 0).toBeTruthy()
  })

  test('属性 range', () => {
    const range = 5
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIndexBar, {
      props: { range }
    })
    /**
     * 获取 DOM
     */
    const listRightEl = getViewer(wrapper, MeIndexBar).findAll('.list-rt>li')
    expect(listRightEl.filter(elem => elem.isVisible()).length).toBe(range)
  })

  test('事件 click', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeIndexBar, {
      props: { list }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeIndexBar).find('.list-cont>li:first-child .list-item>dd:first-of-type')
    expect(viewer.exists()).toBeTruthy()

    await viewer.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
