import { shallowMount } from '@vue/test-utils'
import MeButton from '~/MeButton/index.vue'

describe('MeButton', () => {
  /* 测试用例描述 */
  // 测试 type 属性
  it('renders props.type when passed', () => {
    const type = 'default'
    // 向组件里传参
    const wrapper = shallowMount(MeButton, {
      propsData: { type }
    })
    // 正则验证是否存在值
    expect(wrapper.html()).toMatch(type)
  })
  // 测试 width 属性
  it('renders props.width when passed', () => {
    const width = '100px'
    // 向组件里传参
    const wrapper = shallowMount(MeButton, {
      propsData: { width }
    })
    // 正则验证是否存在值
    expect(wrapper.html()).toMatch(width)
  })
})
