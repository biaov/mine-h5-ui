import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeAccordion from '~/MeAccordion/index.vue'
import MeAccordionItem from '~/MeAccordionItem/index.vue'

describe('MeAccordion 手风琴', () => {
  test('是否存在', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount({
      template: `
        <me-accordion modelValue="1">
          <me-accordion-item label="名称一" name="1">内容一</me-accordion-item>
          <me-accordion-item label="名称二" name="2">内容二</me-accordion-item>
        </me-accordion>
      `,
      components: { MeAccordion, MeAccordionItem }
    })

    const viewer = getViewer(wrapper, MeAccordion)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.findAll('.me-accordion-item').length).toBe(2)
  })
})

describe('MeAccordionItem 手风琴项', () => {
  test('属性 label', () => {
    const label = '名称一'
    /**
     * 向组件里传参
     */
    const wrapper = mount({
      template: `
        <me-accordion modelValue="1">
          <me-accordion-item label="${label}" name="1">内容一</me-accordion-item>
          <me-accordion-item label="名称二" name="2">内容二</me-accordion-item>
        </me-accordion>
      `,
      components: { MeAccordion, MeAccordionItem }
    })

    const viewer = getViewer(wrapper, MeAccordion).findAll('.me-accordion-item')[0]

    /**
     * 是否存在
     */
    expect(viewer.html()).toContain(label)
  })
})
