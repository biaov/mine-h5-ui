import { mount } from '@vue/test-utils'
import MeAccordion from '~/MeAccordion/index.vue'
import MeAccordionItem from '~/MeAccordionItem/index.vue'

describe('MeAccordion', () => {
  test('accordion exist', () => {
    // 向组件里传参
    const wrapper = mount({
      template: `
        <me-accordion modelValue="1">
          <me-accordion-item label="名称一" name="1">内容一</me-accordion-item>
          <me-accordion-item label="名称二" name="2">内容二</me-accordion-item>
        </me-accordion>
      `,
      components: { MeAccordion, MeAccordionItem }
    })
    const viewer = wrapper.find('.me-accordion') // 获取 DOM
    expect(viewer.exists()).toBeTruthy()
    expect(viewer.findAll('.me-accordion-item').length).toBe(2)
  })
})

describe('MeAccordionItem', () => {
  test('props label', () => {
    const label = '名称一'
    // 向组件里传参
    const wrapper = mount({
      template: `
        <me-accordion modelValue="1">
          <me-accordion-item label="${label}" name="1">内容一</me-accordion-item>
          <me-accordion-item label="名称二" name="2">内容二</me-accordion-item>
        </me-accordion>
      `,
      components: { MeAccordion, MeAccordionItem }
    })
    const viewer = wrapper.find('.me-accordion') // 获取 DOM
    const itemEl = viewer.findAll('.me-accordion-item')[0]
    expect(itemEl.html()).toContain(label) // 是否存在
  })
})
