import { mount } from '@vue/test-utils'
import { Retarder } from '@/utils/functions'
import MeMessageBox from '~/MeMessageBox/index.vue'

describe('MeMessageBox 弹窗', () => {
  test('属性 tips', async () => {
    const tips = '提示语'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { tips }
    })

    await Retarder(200)

    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-message-box')

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.classes('show')).toBe(true)

    const tipsEl = viewer.find('.tips')

    expect(tipsEl.exists()).toBeTruthy()
    expect(tipsEl.text()).toBe(tips)
  })

  test('属性 type', async () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { type: 'alert' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.findAll('.me-message-box .btn>button')
    expect(viewer[0]).toBeTruthy()
    expect(viewer.length === 1).toBe(true)
  })

  test('属性 message', async () => {
    const message = '提示文本内容'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { message, type: 'confirm' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-message-box .text')
    expect(viewer).toBeTruthy()
    expect(viewer.text()).toBe(message)
  })

  test('属性 html', async () => {
    const html = `<div class="uni-test">自定义 HTML</div>`
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { html, type: 'custom' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-message-box .uni-test')
    expect(viewer).toBeTruthy()
    expect(viewer.html()).toBe(html)
  })

  test('属性 cancel-button-text', async () => {
    const cancelButtonText = '取消按钮文字'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { cancelButtonText, type: 'confirm' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-message-box .btn .btn-cancel')
    expect(viewer).toBeTruthy()
    expect(viewer.text()).toBe(cancelButtonText)
  })

  test('属性 confirm-button-text', async () => {
    const confirmButtonText = '确认按钮文字'
    /**
     * 向组件里传参
     */
    const wrapper = mount(MeMessageBox, {
      props: { confirmButtonText, type: 'confirm' }
    })
    /**
     * 获取 DOM
     */
    const viewer = wrapper.find('.me-message-box .btn .btn-confirm')
    expect(viewer).toBeTruthy()
    expect(viewer.text()).toBe(confirmButtonText)
  })
})
