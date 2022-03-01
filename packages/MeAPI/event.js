/**
 * 绑定事件
 * @param { Document } - 节点对象
 * @param { string } event - JS 事件名称，不带 on
 * @param { Function } fn - 回调函数
 * @param { boolean } [flag=false] - false: 冒泡事件，true: 捕获事件
 * @returns { Document } - 返回的dom节点对象
 */
export const Bind = (dom, event, fn, flag = false) => {
  dom.addEventListener(event, fn, flag)
  return dom
}

/**
 * 移除绑定事件
 * @param { Document } - 节点对象
 * @param { string } event - JS 事件名称，不带 on
 * @param { Function } fn - 回调函数
 * @param { boolean } [flag=false] - false: 冒泡事件，true: 捕获事件
 * @returns { Document } - 返回的dom节点对象
 */
export const Unbind = (dom, event, fn, flag = false) => {
  dom.removeEventListener(event, fn, flag)
  return dom
}
export default {
  Bind, // 绑定事件
  Unbind // 移除绑定事件
}
