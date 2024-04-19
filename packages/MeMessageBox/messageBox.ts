import { createVNode, render } from 'vue'
import { IsType } from '../MeAPI/function'
import type { AddComponentNameRecord } from '../types'
import MessageBoxConstructor from './index.vue'
import type { OnOk, Option, InMessageBox, CurOption, OptionType } from './types'

/**
 * 消息提示
 * @param { Option } arg 选项参数
 * @returns { void } 空
 */
const MessageBox = (option: Option, type?: OptionType): Promise<string | undefined> => {
  /**
   * 判断是否是对象
   */
  if (!IsType('Object', option)) {
    /**
     * 抛出错误
     */
    throw new Error(`${option} is not Object`)
  } else if (option.html && option.html.includes('script')) {
    /**
     * 抛出错误
     */
    throw new Error('Your HTML may be attacked by XSS')
  } else {
    return new Promise<string | undefined>((resolve, reject) => {
      /**
       * 设置当前类型
       */
      const curOption: CurOption = { ...option }
      type && (curOption.type = type)
      curOption.onAction = (action: string, value?: string) => {
        switch (action) {
          case 'onOk':
            curOption.onOk ? (curOption.onOk as OnOk)(value) : resolve(value)
            break
          case 'onOff':
            curOption.onOff ? curOption.onOff() : reject()
            break
          default:
            break
        }
      }
      /**
       * 创建虚拟节点
       */
      const vm = createVNode(MessageBoxConstructor, curOption)
      const container = document.createElement('div')
      render(vm, container)
      /**
       * 把虚拟DOM插入到真实 DOM 树中
       */
      document.body.appendChild(container.firstElementChild!)
    })
  }
}

const MessageBoxConst = MessageBox as AddComponentNameRecord<InMessageBox>

/**
 * 导出 fn.type
 *
 * 列表
 */
const types: OptionType[] = ['alert', 'confirm', 'prompt', 'custom']
types.forEach(type => {
  MessageBoxConst[type] = (option: Option | string) => (IsType('string', option) ? MessageBox({ message: option as string }, type) : MessageBox(option as Option, type))
})
MessageBoxConst.componentName = MessageBoxConstructor.name as string

export default MessageBoxConst
