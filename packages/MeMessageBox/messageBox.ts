import { createVNode, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import { CurOption, OnOk } from './types'
import { Option, InMessageBox } from './interfaces'
import { IsType } from '../MeAPI/function'
/**
 * 消息提示
 * @param {Option} arg 选项参数
 * @returns {void} 空
 */
const MessageBox = (option: Option, type: string): Promise<string | undefined> => {
  // 判断是否是对象
  if (!IsType('Object', option)) {
    throw new Error(`${option} is not Object`) // 抛出错误
  } else if (option.html && option.html.includes('script')) {
    throw new Error('Your HTML may be attacked by XSS') // 抛出错误
  } else {
    return new Promise<string | undefined>((resolve, reject) => {
      const curOption: CurOption = { ...option } // 设置当前类型
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
      const vm = createVNode(MessageBoxConstructor, curOption) // 创建虚拟节点
      const container = document.createElement('div')
      render(vm, container)
      document.body.appendChild(container.firstElementChild!) // 把虚拟DOM插入到真实DOM树中
    })
  }
}
/* 导出fn.type */
const types = ['alert', 'confirm', 'prompt', 'custom'] // 列表
types.forEach(type => {
  ;(MessageBox as InMessageBox)[type] = (option: Option) => MessageBox(option, type)
})
/* 导出type */
export const alert = (option: Option) => MessageBox(option, 'alert') // 警告框
export const confirm = (option: Option) => MessageBox(option, 'confirm') // 确认框
export const prompt = (option: Option) => MessageBox(option, 'prompt') // 提示框
export const custom = (option: Option) => MessageBox(option, 'custom') // 自定义框

export default MessageBox
