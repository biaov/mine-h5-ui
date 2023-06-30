/**
 * 绑定事件
 * @param { EventTarget } dom 节点对象
 * @param { string } event JS 事件名称，不带 on
 * @param { EventListenerOrEventListenerObject } fn 回调函数
 * @param { boolean } [flag=false] false: 冒泡事件，true: 捕获事件
 * @returns { EventSource } 返回的dom节点对象
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * MeAPI.Bind(document.getElementById('dom'), 'click', e => {
 *   console.log(e)
 * })
 */
export const Bind = (dom: EventTarget, event: string, fn: EventListenerOrEventListenerObject, flag = false): EventTarget => {
  dom.addEventListener(event, fn, flag)
  return dom
}

/**
 * 移除绑定事件
 * @param { EventTarget } dom 节点对象
 * @param { string } event JS 事件名称，不带 on
 * @param { EventListenerOrEventListenerObject } fn 回调函数
 * @param { boolean } [flag=false] false: 冒泡事件，true: 捕获事件
 * @returns { EventSource } 返回的 dom 节点对象
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * const dom = document.getElementById('dom')
 * const fn = e => {
 *   console.log(e)
 * }
 * MeAPI.Bind(dom, 'click', fn)
 * MeAPI.Unbind(dom, 'click', fn)
 */
export const Unbind = (dom: EventTarget, event: string, fn: EventListenerOrEventListenerObject, flag = false): EventTarget => {
  dom.removeEventListener(event, fn, flag)
  return dom
}

export default {
  Bind, // 绑定事件
  Unbind // 移除绑定事件
}
