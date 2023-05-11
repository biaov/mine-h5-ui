import { createVNode, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import { OnOk, Option, InMessageBox, CurOption } from './types'
import { SFCWithInstall } from '../types'
import { IsType } from '../MeAPI/function'

/**
 * 消息提示
 * @param { Option } arg 选项参数
 * @returns { void } 空
 */
const MessageBox = (option: Option, type?: string): Promise<string | undefined> => {
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

const MessageBoxConst = MessageBox as SFCWithInstall<InMessageBox>

/* 导出 fn.type */
const types = ['alert', 'confirm', 'prompt', 'custom'] // 列表
types.forEach(type => {
  MessageBoxConst[type] = (option: Option | string) => (IsType('String', option) ? MessageBox({ message: option as string }, type) : MessageBox(option as Option, type))
})

export default MessageBoxConst
