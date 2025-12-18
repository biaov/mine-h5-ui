import { mount } from '@vue/test-utils'
import { getViewer } from '@/utils/functions'
import MeCollapse from '~/MeCollapse/index.vue'
import MeCollapseItem from '~/MeCollapseItem/index.vue'

describe('MeCollapse 折叠面板', () => {
  test('是否存在', () => {
    /**
     * 向组件里传参
     */
    const wrapper = mount({
      template: `
        <me-collapse modelValue="1">
          <me-collapse-item label="名称一" name="1">内容一</me-collapse-item>
          <me-collapse-item label="名称二" name="2">内容二</me-collapse-item>
        </me-collapse>
      `,
      components: { MeCollapse, MeCollapseItem }
    })

    const viewer = getViewer(wrapper, MeCollapse)

    expect(viewer.exists()).toBeTruthy()
    expect(viewer.findAll('.me-collapse-item').length).toBe(2)
  })
})

describe('MeCollapseItem 折叠面板项', () => {
  test('属性 label', () => {
    const label = '名称一'
    /**
     * 向组件里传参
     */
    const wrapper = mount({
      template: `
        <me-collapse modelValue="1">
          <me-collapse-item label="${label}" name="1">内容一</me-collapse-item>
          <me-collapse-item label="名称二" name="2">内容二</me-collapse-item>
        </me-collapse>
      `,
      components: { MeCollapse, MeCollapseItem }
    })

    const viewer = getViewer(wrapper, MeCollapse).findAll('.me-collapse-item')[0]

    /**
     * 是否存在
     */
    expect(viewer.html()).toContain(label)
  })
})
