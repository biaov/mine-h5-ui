import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeCaptcha from '~/MeCaptcha/index.vue'

describe('MeCaptcha 图片验证器', () => {
  const visible = true
  const url = 'https://biaov.cn/logo.svg'

  const item = {
    bgElem: {
      url: url,
      size: [672, 390]
    },
    elem: {
      initPos: [20, 179],
      url: url,
      size: [120, 120]
    }
  }

  test('属性 visible', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCaptcha, {
      props: { visible }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCaptcha)
    expect(viewer.exists()).toBeTruthy()
  })
  test('属性 statusCode', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCaptcha, {
      props: { visible, statusCode: 1, item }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCaptcha)
    const successEl = viewer.find('.captcha-success-text')
    expect(successEl.exists()).toBeTruthy()
  })

  test('属性 item', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeCaptcha, {
      props: { visible, item }
    })
    /**
     * 获取 DOM
     */
    const viewer = getViewer(wrapper, MeCaptcha)
    const successEl = viewer.find('.captcha-img-rect')
    expect(successEl.exists()).toBeTruthy()
  })
})
